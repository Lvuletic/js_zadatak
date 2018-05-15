import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { MainComponent } from './main/main.component'
import { ZadatakDetailComponent } from './zadatak-detail/zadatak-detail.component'

export const AppRoutes: Routes = [
  { path: 'zadatak-details/:id', component: ZadatakDetailComponent},
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
