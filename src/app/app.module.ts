import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import firebase from 'firebase/app';
import { HomeComponent } from './home/home.component';
import { ChobuAdminComponent } from './chobu-admin/chobu-admin.component';
import { ContactComponent } from './contact/contact.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChobuAdminComponent,
    ContactComponent,
    ViewProductComponent,
    AddProductComponent,
    AboutUsComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
