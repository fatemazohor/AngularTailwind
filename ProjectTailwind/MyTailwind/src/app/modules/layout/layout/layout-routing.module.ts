import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',
    component:LayoutComponent,
    children:[
      {path: 'ards/dashboard', component:DashboardComponent
    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
