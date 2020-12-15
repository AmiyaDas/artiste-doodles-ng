import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChobuAdminComponent } from './chobu-admin/chobu-admin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chobu', component: ChobuAdminComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
