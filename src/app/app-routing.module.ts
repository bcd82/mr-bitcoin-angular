import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactResolverService } from './services/contact.resolver.service';
import { UserResolverService } from './services/user-resolver.service';
import { UserGuard } from './guards/user-guard.guard';

const routes: Routes = [
  {
    path: 'contacts/edit/:id',
    component: EditComponent,
    resolve: { contact: ContactResolverService },
    canActivate: [UserGuard],
  },
  {
    path: 'contacts/edit',
    component: EditComponent,
    resolve: { contact: ContactResolverService },
    canActivate: [UserGuard],
  },
  // { path: 'contacts/edit', component: EditComponent},
  {
    path: 'contacts/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolverService, user: UserResolverService },
    canActivate: [UserGuard],
  },
  { path: 'contacts', component: ContactsComponent, canActivate: [UserGuard] },
  { path: 'charts', component: ChartsComponent, canActivate: [UserGuard] },
  {
    path: '',
    component: HomeComponent,
    resolve: { user: UserResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
