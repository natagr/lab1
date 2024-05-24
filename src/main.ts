// import { enableProdMode } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { RouteReuseStrategy, provideRouter } from '@angular/router';
// import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

// import { routes } from './app/app.routes';
// import { AppComponent } from './app/app.component';
// import { environment } from './environments/environment';

// // import { AppRoutingModule } from './app/app.routes'; // Importing the module
// // const routes = AppRoutingModule.routes; // Extracting 'routes' from the module

// if (environment.production) {
//   enableProdMode();
// }

// bootstrapApplication(AppComponent, {
//   providers: [
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
//     provideIonicAngular(),
//     provideRouter(routes),
//   ],
// });


import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { importProvidersFrom } from '@angular/core'; 
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

if (environment.production) {
  enableProdMode();
}

const firebaseConfig = {
  apiKey: "AIzaSyAVZjipkchJprL3Pw_IaGDxtSCpr5rD8fA",
  authDomain: "lab10-bafd3.firebaseapp.com",
  databaseURL: "https://lab10-bafd3-default-rtdb.firebaseio.com",
  projectId: "lab10-bafd3",
  storageBucket: "lab10-bafd3.appspot.com",
  messagingSenderId: "573014361274",
  appId: "1:573014361274:web:e745c749cbff6038e2ee83",
  measurementId: "G-FNLS0N1D4Z"
};

const app = initializeApp(firebaseConfig);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    provideIonicAngular(),
    provideRouter(routes),
  ],
});