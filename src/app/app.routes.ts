import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyHeaderComponent } from './my-header/my-header.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { initializeApp} from 'firebase/app';
import { AngularFireModule } from '@angular/fire/compat';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'graph',
    loadComponent: () => import('./graph/graph.page').then(m => m.GraphPage)
  },
  {
    path: 'lab3',
    loadComponent: () => import('./lab3/lab3.page').then( m => m.Lab3Page)
  },
  {
    path: 'lab4',
    loadComponent: () => import('./lab4/lab4.page').then( m => m.Lab4Page)
  },
  {
    path: 'lab5',
    loadComponent: () => import('./lab5/lab5.page').then( m => m.Lab5Page)
  },
  {
    path: 'lab6',
    loadComponent: () => import('./lab6/lab6.page').then( m => m.Lab6Page)
  },
  {
    path: 'lab7',
    loadComponent: () => import('./lab7/lab7.page').then( m => m.Lab7Page)
  },
  {
    path: 'lab10',
    loadComponent: () => import('./lab10/lab10.page').then( m => m.Lab10Page)
  },
];

export { routes }; 
console.log('Firebase Config:', environment.firebase); 

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
     MyHeaderComponent,
     IonicModule,
     BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}]
})
export class AppRoutingModule { }
