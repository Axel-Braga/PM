import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

import { Client } from './interfaces/clients.interface';

@Component({
    standalone: true,
    selector: 'module-clients',
    imports: [
        ButtonModule,
        InputTextModule,
        TableModule,
        CommonModule,
        TagModule,
    ],
    templateUrl: './clients.component.html',
    styles: ``,
})
export class ClientsComponent {

    public clients: Client[] = [
        {
            name: 'prueba1',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: true,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: true,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
        },
        {
            name: 'prueba',
            email: 'jhondoe@gmail.com',
            phoneNumber: '9981352671',
            creationDate: new Date(),
            status: false,
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

    public setMessage(status: boolean):string{
        if(status)return 'Activo';
        return 'Inactivo';
    }
    
}
