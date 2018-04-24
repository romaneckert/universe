import { Routes } from "@angular/router";
import { ImprintComponent } from "./imprint/imprint.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    //{path: '', redirectTo:'library', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
