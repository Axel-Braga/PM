import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersMainPageComponent } from './pages/users-main-page/users-main-page.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'list', component: UsersMainPageComponent },
            { path: '**', redirectTo: '/notfound' },
        ]),
    ],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
