import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'list', component: ProjectsPageComponent },
            { path: '**', redirectTo: '/notfound' },
        ]),
    ],
    exports: [RouterModule],
})
export class ProjectsRoutingModule { }
