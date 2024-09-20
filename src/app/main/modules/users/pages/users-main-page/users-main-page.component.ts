import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/main/services/toast.service';

@Component({
    standalone: true,
    selector: 'app-users-main-page',
    templateUrl: './users-main-page.component.html',
    styles: [
        `
            p {
                font-size: 17.5px;
            }
        `,
    ],
})
export class UsersMainPageComponent implements OnInit {
    constructor(private toastService: ToastService) {}

    ngOnInit(): void {
        this.toastService.showSuccess('Hola Josue');
    }
}
