import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TablesComponent } from './components/tables/tables.component';
import { IconsComponent } from './components/icons/icons.component';
import { TypographyComponent } from './components/typography/typography.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupsComponent } from './components/groups/groups.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { RoomsComponent } from  './components/rooms/rooms.component';
import { CompanyownerComponent } from './components/companyowner/companyowner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotificationsComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    FooterComponent,
    GroupsComponent,
    AdministrationComponent,
    RoomsComponent,
    CompanyownerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
