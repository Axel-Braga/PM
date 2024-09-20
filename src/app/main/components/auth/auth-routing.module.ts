import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'error',
                loadChildren: () =>
                    import('./error/error-routing.module').then((m) => m.ErrorRoutingModule),
            },
            {
                path: 'access',
                loadChildren: () =>
                    import('./access/access-routing.module').then(
                        (m) => m.AccessRoutingModule
                    ),
            },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: '/notfound' },
        ]),
    ],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
