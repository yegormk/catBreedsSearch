import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './main/main.component';
import {MainResolver} from './app.resolver';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: { listOfBreeds: MainResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
