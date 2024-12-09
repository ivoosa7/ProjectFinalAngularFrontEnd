import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Agenda } from '../Agenda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-compromissos',
  templateUrl: './ver-compromissos.component.html',
  styleUrl: './ver-compromissos.component.css'
})
export class VerCompromissosComponent implements OnInit{

  VerAgenda: Agenda [] = [];
  constructor(private service:AgendaService, 
              private router:Router
  ) { }

  ngOnInit(): void {
    this.LoadAgenda();
  }

  LoadAgenda(){
    this.service.getAgenda().subscribe({
      next: data => this.VerAgenda = data
    })
  }

  goToUpdate(id:Number){
    this.router.navigate(['/formcompromissos', id]);
  }
}
