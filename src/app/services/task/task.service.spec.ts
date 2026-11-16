import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CreateTaskDTO, Task, TaskService } from './task.service';
import { environment } from '../../../environments/environment';

describe('TaskService', () => {
  let service: TaskService;
  let httpTesting: HttpTestingController;
  const apiUrl = `${environment.apiUrl}/tasks`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        TaskService,
      ],
    });
    service = TestBed.inject(TaskService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTasks', () => {
    it('deve realizar GET com cabeçalho de autenticação Bearer', () => {
      const mockTasks: Task[] = [
        { id: '1', title: 'Task 1', status: 'needsAction' },
      ];

      service.getTasks('token-123').subscribe((tasks) => {
        expect(tasks).toEqual(mockTasks);
      });

      const req = httpTesting.expectOne(apiUrl);
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Authorization')).toBe('Bearer token-123');

      req.flush(mockTasks);
    });
  });

  describe('createTask', () => {
    it('deve realizar POST com payload e cabeçalhos corretos', () => {
      const taskDto: CreateTaskDTO = {
        title: 'Nova Tarefa',
        notes: 'Alguma anotação',
      };

      const mockResponse: Task = {
        id: 'new-id',
        title: 'Nova Tarefa',
        notes: 'Alguma anotação',
        status: 'needsAction',
      };

      service.createTask('token-123', taskDto).subscribe((task) => {
        expect(task).toEqual(mockResponse);
      });

      const req = httpTesting.expectOne(apiUrl);
      expect(req.request.method).toBe('POST');
      expect(req.request.headers.get('Authorization')).toBe('Bearer token-123');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      expect(req.request.body).toEqual(taskDto);

      req.flush(mockResponse);
    });
  });
});
