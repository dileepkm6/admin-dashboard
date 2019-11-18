import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { IconsComponent } from './components/icons/icons.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TablesComponent } from './components/tables/tables.component';
import { TypographyComponent } from './components/typography/typography.component';
import { UserComponent } from './components/user/user.component';
import { HomecontentComponent } from './components/homecontent/homecontent.component';
import { GroupsComponent } from './components/groups/groups.component';
import { AdministrationComponent } from './components/administration/administration.component';

const routes: Routes = [
  {
    path: '',component:HomecontentComponent
  },
  {
    path: 'map',component:MapComponent
  },
  {
    path: 'icon',component:IconsComponent
  },
  {
    path: 'notification',component:NotificationsComponent
  },
  {
    path: 'tables',component:TablesComponent
  },
  {
    path: 'typography',component:TypographyComponent
  },
  {
    path: 'user',component:UserComponent
  },
  {
    path: 'groups',component:GroupsComponent
  },
  {
    path: 'administration', component:AdministrationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
