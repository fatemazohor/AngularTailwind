import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',
    component:LayoutComponent,
    children:[
      {path: 'dashboard',
      loadChildren: () => import('../layout/features/dashboard/dashboard.module').then((m) => m.DashboardModule),
    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
