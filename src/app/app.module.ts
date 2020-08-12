import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';


const appRoutes: Routes = [
  { path: 'blue/:id', component: BlueComponent },
  { path: 'red', component: RedComponent },
  { path: '',
    redirectTo: '/red',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    BlueComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
