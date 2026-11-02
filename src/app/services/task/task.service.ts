import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Task {
  id: string;
  title: string;
  notes?: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly apiUrl = `${environment.apiUrl}/tasks`;

  private http = inject(HttpClient);

  getTasks(accessToken: string): Observable<Task[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    return this.http.get<Task[]>(this.apiUrl, { headers });
  }
}
