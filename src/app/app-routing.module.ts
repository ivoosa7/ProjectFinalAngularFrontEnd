import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerCompromissosComponent } from './ver-compromissos/ver-compromissos.component';
import { FormCompromissosComponent } from './form-compromissos/form-compromissos.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'compromissos', component: VerCompromissosComponent},
  {path: 'formcompromissos', component:FormCompromissosComponent},
  {path: 'formcompromissos/:id', component:FormCompromissosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
