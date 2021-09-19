import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmailComponent } from './pages/email/email.component';

const routes: Routes = [
  {
    path:"email",
    component:EmailComponent,
    pathMatch:"full"
  },
 /* {
    path:'/',
    component:loginComponent,
    pathMatch:"full"
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
