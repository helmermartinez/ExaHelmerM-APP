import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { Router } from '@angular/router';
import { Libros } from 'src/app/models/libros';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  libros:Libros[];

  constructor(private librosService:LibrosService, private router:Router) { }

  ngOnInit(): void {
  }

  listarLibros(){
    this.librosService.getListarLibros().subscribe(data=>{
      this.libros=data;
    })
  }

}
