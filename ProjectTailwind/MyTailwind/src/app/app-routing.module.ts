import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntorductionComponent } from './components/intorduction/intorduction.component';

const routes: Routes = [
  
  {
    path: 'ards',
    loadChildren: () => import('./modules/layout/layout/layout.module').then((m) => m.LayoutModule),
  },
  {path:'home', component:IntorductionComponent},
  {path:'**', redirectTo:'/ards',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
