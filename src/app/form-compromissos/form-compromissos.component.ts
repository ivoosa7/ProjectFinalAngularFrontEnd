import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-compromissos',
  templateUrl: './form-compromissos.component.html',
  styleUrl: './form-compromissos.component.css'
})
export class FormCompromissosComponent implements OnInit{

  formGroupAgenda: FormGroup;

  constructor(private service: AgendaService, 
              private router: Router, 
              private formBuilder: FormBuilder,
              private activeRouter: ActivatedRoute) { 
    this.formGroupAgenda = formBuilder.group({
      id:         [''],
      titulo:     [''],
      descricao:  [''],
      data:       [''],
      hora:       [''],
      local:      ['']
    })          
  } 
  ngOnInit(): void {
    const id = Number(this.activeRouter.snapshot.paramMap.get("id"));
    this.loadAgenda(id);
  }

  loadAgenda(id: number){
    this.service.getAgendaById(id).subscribe({
      next: data => this.formGroupAgenda.setValue(data)
    });
  }

  salvarCompromisso(){
    this.service.addAgenda(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['compromissos'])
    });
  }
}
