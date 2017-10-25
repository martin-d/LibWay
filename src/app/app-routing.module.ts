import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
// import { TodoComponent } from './todo/todo.component';
// import { IsLoggedInGuard} from './shared/guards/is-logged-in.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [ 
  {
    path: '',
    children: [],
    // component: TodoComponent, 
    component: SearchComponent
    // canActivate: [IsLoggedInGuard]
  },
  // { path: 'login', children: [], component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
