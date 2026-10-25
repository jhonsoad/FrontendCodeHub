import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id: string;
  title: string;
  notes?: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  private http = inject(HttpClient)


  getTasks(accessToken: string): Observable<Task[]> {
    // Configura o cabeçalho exigido pelo seu Controller do Fastify
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.get<Task[]>(this.apiUrl, { headers });
  }
}