import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const appRoute = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'users', component: UsersComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/edit', component: ServersComponent },
  { path: 'user/:id/:name', component: UserComponent },
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoute)],
  declarations: [
    AppComponent,
    EditServerComponent,
    ServerComponent,
    ServersComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
