import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { PrimeNgModule } from 'src/app/primeng.module';

@Component({
    standalone: true,
    imports: [PrimeNgModule, CommonModule, FormsModule, ReactiveFormsModule],
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    password!: string;

    constructor(public layoutService: LayoutService) {}
}
