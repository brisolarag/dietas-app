import { Routes } from '@angular/router';
import { DietasComponent } from './components/routes/dietas/dietas.component';
import { PageNotFoundComponent } from './components/routes/page-not-found/page-not-found.component';
import { NovaDietaComponent } from './components/routes/nova-dieta/nova-dieta.component';
import { DadosComponent } from './components/routes/dados/dados.component';

export const routes: Routes = 
[
    {path: '', redirectTo: '/dietas', pathMatch: 'full'},
    {path: 'dietas', component: DietasComponent},
    {path: 'nova-dieta', component: NovaDietaComponent},
    {path: 'dados', component: DadosComponent},
    {path: '**', component: PageNotFoundComponent}
];


