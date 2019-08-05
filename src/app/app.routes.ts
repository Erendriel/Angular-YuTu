import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
import { VideoCardsComponent } from './components/video-cards/video-cards.component';
// import { BuscadorComponent } from './components/buscador/buscador.component';


const APP_ROUTES: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: 'videos/:id', component: VideoCardsComponent },
    // { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
