import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { InternalComponent } from './observable/internal/internal.component';
import { ScanComponent } from './observable/scan/scan.component';

const routes: Routes = [
  {path: 'promises', component: PromiseComponent},
  {path: 'observable', component: ObservableComponent, children:[
    {path:'', component: ListComponent},
    {path:'fromEvent', component: FromEventComponent},
    {path:'interval', component: InternalComponent},
    {path:'scan', component: ScanComponent}

  ]},
  {path: '**', redirectTo:'promoises'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
