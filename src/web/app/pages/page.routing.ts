import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { ProfileComponent } from './profile/index';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = [HomeComponent, ProfileComponent];