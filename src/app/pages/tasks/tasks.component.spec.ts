import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { TasksComponent } from './tasks.component';
import { AuthService } from '../../services/auth/auth.service';
import { Task, TaskService } from '../../services/task/task.service';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  let authServiceMock: {
    accessToken$: BehaviorSubject<string | null>;
    accessToken: string | null;
    initTokenClient: jest.Mock;
    login: jest.Mock;
    logout: jest.Mock;
  };

  let taskServiceMock: {
    getTasks: jest.Mock;
    createTask: jest.Mock;
  };

  const mockTasks: Task[] = [
    { id: '1', title: 'Task 1', notes: 'Note 1', status: 'needsAction' },
    { id: '2', title: 'Task 2', notes: undefined, status: 'completed' },
  ];

  beforeEach(async () => {
    authServiceMock = {
      accessToken$: new BehaviorSubject<string | null>(null),
      accessToken: null,
      initTokenClient: jest.fn(),
      login: jest.fn(),
      logout: jest.fn(),
    };

    taskServiceMock = {
      getTasks: jest.fn().mockReturnValue(of(mockTasks)),
      createTask: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [TasksComponent],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        { provide: AuthService, useValue: authServiceMock },
        { provide: TaskService, useValue: taskServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar o componente com sucesso', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com o formulário inválido', () => {
    expect(component.taskForm.valid).toBe(false);
    expect(component.taskForm.get('title')?.valid).toBe(false);
  });

  it('deve carregar tarefas quando o token for emitido', (done) => {
    authServiceMock.accessToken$.next('valid-token');

    component.tasks$.subscribe((tasks) => {
      if (tasks.length > 0) {
        expect(tasks).toEqual(mockTasks);
        expect(taskServiceMock.getTasks).toHaveBeenCalledWith('valid-token');
        done();
      }
    });
  });

  it('não deve submeter o formulário se o título estiver inválido', () => {
    component.taskForm.patchValue({ title: ' ' });
    component.onCreateTask();

    expect(taskServiceMock.createTask).not.toHaveBeenCalled();
    expect(component.taskForm.touched).toBe(true);
  });

  it('deve criar tarefa com sucesso, resetar o formulário e exibir mensagem de sucesso', () => {
    authServiceMock.accessToken = 'valid-token';
    const newTask: Task = {
      id: 'new-id',
      title: 'Nova Tarefa Teste',
      notes: 'Nota Teste',
      status: 'needsAction',
    };
    taskServiceMock.createTask.mockReturnValue(of(newTask));

    component.taskForm.patchValue({
      title: 'Nova Tarefa Teste',
      notes: 'Nota Teste',
    });

    component.onCreateTask();

    expect(taskServiceMock.createTask).toHaveBeenCalledWith('valid-token', {
      title: 'Nova Tarefa Teste',
      notes: 'Nota Teste',
    });
    expect(component.successMessage()).toBe('Tarefa criada com sucesso!');
    expect(component.taskForm.value.title).toBeNull();
  });

  it('deve exibir mensagem de erro se a criação de tarefa falhar', () => {
    authServiceMock.accessToken = 'valid-token';
    taskServiceMock.createTask.mockReturnValue(
      throwError(() => ({ error: { error: 'Permissão insuficiente' } }))
    );

    component.taskForm.patchValue({
      title: 'Tarefa que falhará',
    });

    component.onCreateTask();

    expect(component.errorMessage()).toBe('Permissão insuficiente');
    expect(component.isSubmitting()).toBe(false);
  });

  it('deve chamar login do AuthService', () => {
    component.login();
    expect(authServiceMock.login).toHaveBeenCalled();
  });

  it('deve chamar logout do AuthService e limpar mensagens', () => {
    component.logout();
    expect(authServiceMock.logout).toHaveBeenCalled();
    expect(component.errorMessage()).toBeNull();
    expect(component.successMessage()).toBeNull();
  });
});
