import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';

export const routes: Routes = [
    {
        path:'list',
        component: ClientsComponent
    },
    {
        path:'**',
        redirectTo: 'notfound'
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class ClientsRoutingModule { }
