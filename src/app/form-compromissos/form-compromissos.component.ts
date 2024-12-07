import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-compromissos',
  templateUrl: './form-compromissos.component.html',
  styleUrl: './form-compromissos.component.css'
})
export class FormCompromissosComponent {

  formGroupAgenda: FormGroup;

  constructor(private service: AgendaService, 
              private router: Router, 
              private formBuilder: FormBuilder){ 
    this.formGroupAgenda = formBuilder.group({
      id:         [''],
      titulo:     [''],
      descricao:  [''],
      data:       [''],
      hora:       [''],
      local:      ['']
    })          
  } 

  salvarCompromisso(){
    this.service.addAgenda(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['compromissos'])
    })
  }
}
