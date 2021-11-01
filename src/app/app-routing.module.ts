import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactResolverService } from './services/contact.resolver.service';

const routes: Routes = [
  { path: 'contacts/edit/:id', component: EditComponent,resolve: { contact: ContactResolverService } },
  { path: 'contacts/edit', component: EditComponent},
  { path: 'contacts/:id', component: ContactDetailsComponent,resolve: { contact: ContactResolverService } },
  { path: 'contacts', component: ContactsComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
