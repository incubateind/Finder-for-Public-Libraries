import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HereMapComponent } from './components/here-map/here-map.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes:Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent},
  /*{path: 'about-us', component:SectionComponent},*/
  {path: 'developers-near-you', component:HereMapComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    SectionComponent,
    FooterComponent,
    HereMapComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
