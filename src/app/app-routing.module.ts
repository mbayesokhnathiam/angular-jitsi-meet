import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndedCallComponent } from './components/ended-call/ended-call.component';
import { CallComponent } from './components/call/call.component';

const routes: Routes = [
  {
    path: '',
    component: EndedCallComponent,
  },
  {
    path: 'call',
    component: CallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
