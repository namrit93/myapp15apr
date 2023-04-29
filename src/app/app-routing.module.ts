import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { PipeComponent } from './pipe/pipe.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',component:DatabindingComponent},
  {path:'dir', component:DirComponent},
  {path:'pipe',component:PipeComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'**', redirectTo:'notfound'} //its must be in last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
