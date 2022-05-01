import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      { path: 'home/details/:id', component: PlayerDetailsComponent },
      { path: 'home/create', component: CreatePlayerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
