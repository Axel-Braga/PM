import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './main/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ClientsRoutingModule } from './main/modules/clients/clients-routing.module';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: 'users',
                            loadChildren: () =>
                                import(
                                    './main/modules/users/users-routing.module'
                                ).then((m) => m.UsersRoutingModule),
                        },
                    ],
                },
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: 'clients',
                            loadChildren: () =>
                                import(
                                    './main/modules/clients/clients-routing.module'
                                ).then((m) => m.ClientsRoutingModule),
                        },
                    ],
                },
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: 'projects',
                            loadChildren: () =>
                                import(
                                    './main/modules/projects/projects-routing.module'
                                ).then(m => m.ProjectsRoutingModule)
                        }
                    ]
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import(
                            './main/components/auth/auth-routing.module'
                        ).then((m) => m.AuthRoutingModule),
                },
                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
