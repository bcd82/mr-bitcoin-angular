import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { EditComponent } from './pages/edit/edit.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';
import { NaturalTypingPipe } from './pipes/natural-typing.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    ContactsComponent,
    ChartsComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    EditComponent,
    MoveListComponent,
    MovePreviewComponent,
    NaturalTypingPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
