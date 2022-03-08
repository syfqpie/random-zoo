import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Animal } from './zoo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZooService {

  // Data
  public animal: Animal | null = null
  public animals: Animal[] = []

  constructor(
    private http: HttpClient
  ) { }

  getSingle(): Observable<Animal> {
    const urlTemp = `${ environment.baseUrl }animals/rand/`
    return this.http.get<Animal>(urlTemp).pipe(
      tap((res: Animal) => {
        this.animal = res
        console.log('Animal:', this.animal)
      })
    )
  }

  getMultiple(query: number): Observable<Animal[]> {
    const urlTemp = `${ environment.baseUrl }animals/rand/${query}/`
    return this.http.get<Animal[]>(urlTemp).pipe(
      tap((res: Animal[]) => {
        this.animals = res
        console.log('Animals:', this.animals)
      })
    )
  }
}
