import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmpoyeeListComponent } from './empoyee-list/empoyee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", redirectTo:"/department", pathMatch:"full"},
  {path:"department", component: DepartmentListComponent},
  {path:"employee", component: EmpoyeeListComponent},
  {path:"department/:id", component: DepartmentDetailsComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,
                                  EmpoyeeListComponent,
                                  PageNotFoundComponent,
                                  DepartmentDetailsComponent]
