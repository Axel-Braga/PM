import { Component } from '@angular/core';
import { CICD } from '../interfaces/cicd.interface';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-components',
    standalone: true,
    imports: [
        ButtonModule,
        InputTextModule,
        TableModule,
        CommonModule,
        TagModule,
    ],
    templateUrl: './cicd.component.html',
    styles: [],
})
export class CICDComponent {
    public cicd: CICD[] = [
        {
            name: 'john doe',
            client: {
                name: 'john doe',
            },
            CIStart: new Date(),
            CIEnd: new Date(),
            hours: 5,
            status: true,
        },
        {
            name: 'john doe',
            client: {
                name: 'john doe',
            },
            CIStart: new Date(),
            CIEnd: new Date(),
            hours: 5,
            status: true,
        },
        {
            name: 'john doe',
            client: {
                name: 'john doe',
            },
            CIStart: new Date(),
            CIEnd: new Date(),
            hours: 5,
            status: true,
        },
        {
            name: 'john doe',
            client: {
                name: 'john doe',
            },
            CIStart: new Date(),
            CIEnd: new Date(),
            hours: 5,
            status: true,
        },
        {
            name: 'john doe',
            client: {
                name: 'john doe',
            },
            CIStart: new Date(),
            CIEnd: new Date(),
            hours: 5,
            status: true,
        },
        {
            name: 'john doe',
            client: {
                name: 'john doe',
            },
            CIStart: new Date(),
            CIEnd: new Date(),
            hours: 5,
            status: true,
        },
        {
            name: 'john doe',
            client: {
                name: 'john doe',
            },
            CIStart: new Date(),
            CIEnd: new Date(),
            hours: 5,
            status: true,
        },
        {
            name: 'john doe',
            client: {
                name: 'john doe',
            },
            CIStart: new Date(),
            CIEnd: new Date(),
            hours: 5,
            status: true,
        },
        {
            name: 'john doe',
            client: {
                name: 'john doe',
            },
            CIStart: new Date(),
            CIEnd: new Date(),
            hours: 5,
            status: true,
        },
    ];

    public getSeverity(status: boolean): string | null {
        switch (status) {
            case true:
                return 'success';
            case false:
                return 'danger';
        }
    }

    public setMessage(status: boolean): string {
        if (status) return 'Activo';
        return 'Inactivo';
    }
}
