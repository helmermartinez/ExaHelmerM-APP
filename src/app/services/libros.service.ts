import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { ListComponent} from '../components/Libros/list/list.component';
import { Libros} from '../models/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private url='http://localhost:8080';

  constructor(private http:HttpClient) { }
  getListarLibros(){
    return this.http.get<Libros[]>(this.url+'/libro');
  }
}
