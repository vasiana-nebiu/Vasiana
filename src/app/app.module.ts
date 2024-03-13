import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers/servers.component';
import { FormsModule } from '@angular/forms';
import { AngularAppComponent } from './servers/angular-app/angular-app.component';
import { CounterComponent } from './counter/counter.component';
import { TwoWayInputBindingComponent } from './two-way-input-binding/two-way-input-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AngularAppComponent,
    CounterComponent,
    TwoWayInputBindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
