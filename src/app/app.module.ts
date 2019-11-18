import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UserComponent } from './components/user/user.component';
import { TablesComponent } from './components/tables/tables.component';
import { IconsComponent } from './components/icons/icons.component';
import { TypographyComponent } from './components/typography/typography.component';
import { MapComponent } from './components/map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomecontentComponent } from './components/homecontent/homecontent.component';
import {FormsModule} from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupsComponent } from './components/groups/groups.component';
import { AdministrationComponent } from './components/administration/administration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotificationsComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    MapComponent,
    FooterComponent,
    HomecontentComponent,
    GroupsComponent,
    AdministrationComponent
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
