import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';
import { IsLoggedInGuard } from './shared/guards/is-logged-in.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './search/search.component';
import { AuthService } from './shared/services/auth.service';
import { TodoService } from './shared/services/todo.service';
import { SearchService } from './shared/services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TodoComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AuthService, TodoService, SearchService, IsLoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
