import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CICDComponent } from './components/cicd.component';


export const routes: Routes = [
    {
        path:'list',
        component: CICDComponent
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
export class CicdModule { }
