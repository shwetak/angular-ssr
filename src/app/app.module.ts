import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {HttpClientModule} from '@angular/common/http';


import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {HomeComponent} from './component/home/home.component';
import {SearchComponent} from './component/search/search.component';
import {ServiceComponent} from './component/service/service.component';
import {StateComponent} from './component/state/state.component';
import {ContactComponent} from './component/contact/contact.component';
import {PrivacyComponent} from './component/privacy/privacy.component';
import {ServicesComponent} from './component/services/services.component';
import {BlogComponent} from './component/blog/blog.component';
import {AboutUsComponent} from './component/about-us/about-us.component';


const router: Routes = [
  {path: '', component: HomeComponent},
  {path: 'state', component: StateComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'services', component: ServicesComponent},
  {path: ':service/:permalink', component: StateComponent},
  {path: ':permalink', component: ServiceComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    ServiceComponent,
    StateComponent,
    ContactComponent,
    PrivacyComponent,
    ServicesComponent,
    BlogComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(
      router, {
      enableTracing: false,
    }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
