import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: MenuItem[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                ],
            },
            {
                label: 'Administrador',
                items: [
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/users/list'],
                    },
                ],
            },
            {
                label: 'Clientes',
                items: [
                    {
                        label: 'Lista',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/clients/list'],
                    },
                ],
            },
        ];
    }
}
