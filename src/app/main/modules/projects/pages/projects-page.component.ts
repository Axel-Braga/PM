import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Projects } from '../interfaces/projects.interface';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    CommonModule,
    TagModule,
  ],
  templateUrl: './projects-page.component.html',
})
export class ProjectsPageComponent {

  public projects: Projects[] = [
    {
      name: 'PM',
      description: 'Proyecto de desarrollo interno',
      area: 'Desarrollo',
      client: 'Jorge',
      startDate: new Date(),
      endDate: new Date(),
      proxDate: new Date(),
      workStatus: false,
      generalStatus: true,
      creationDate: new Date(),
    },
    {
      name: 'Pachoa',
      description: 'App móvil tipo/"uber eats"/ de complejos de dark kitchens con restaurantes ',
      area: 'Desarrollo',
      client: 'Jorge',
      startDate: new Date(),
      endDate: new Date(),
      proxDate: new Date(),
      workStatus: true,
      generalStatus: true,
      creationDate: new Date()
    },
    {
      name: 'PM',
      description: 'Proyecto de desarrollo interno',
      area: 'Desarrollo',
      client: 'Jorge',
      startDate: new Date(),
      endDate: new Date(),
      proxDate: new Date(),
      workStatus: true,
      generalStatus: true,
      creationDate: new Date(),
    },
    {
      name: 'Pachoa',
      description: 'App móvil tipo/"uber eats"/ de complejos de dark kitchens con restaurantes ',
      area: 'Desarrollo',
      client: 'Jorge',
      startDate: new Date(),
      endDate: new Date(),
      proxDate: new Date(),
      workStatus: true,
      generalStatus: false,
      creationDate: new Date()
    },
    {
      name: 'PM',
      description: 'Proyecto de desarrollo interno',
      area: 'Desarrollo',
      client: 'Jorge',
      startDate: new Date(),
      endDate: new Date(),
      proxDate: new Date(),
      workStatus: true,
      generalStatus: true,
      creationDate: new Date(),
    },
    {
      name: 'Pachoa',
      description: 'App móvil tipo/"uber eats"/ de complejos de dark kitchens con restaurantes ',
      area: 'Desarrollo',
      client: 'Jorge',
      startDate: new Date(),
      endDate: new Date(),
      proxDate: new Date(),
      workStatus: false,
      generalStatus: true,
      creationDate: new Date()
    },
    {
      name: 'PM',
      description: 'Proyecto de desarrollo interno',
      area: 'Desarrollo',
      client: 'Jorge',
      startDate: new Date(),
      endDate: new Date(),
      proxDate: new Date(),
      workStatus: true,
      generalStatus: false,
      creationDate: new Date(),
    },
    {
      name: 'Pachoa',
      description: 'App móvil tipo/"uber eats"/ de complejos de dark kitchens con restaurantes ',
      area: 'Desarrollo',
      client: 'Jorge',
      startDate: new Date(),
      endDate: new Date(),
      proxDate: new Date(),
      workStatus: false,
      generalStatus: true,
      creationDate: new Date()
    },
    {
      name: 'PM',
      description: 'Proyecto de desarrollo interno',
      area: 'Desarrollo',
      client: 'Jorge',
      startDate: new Date(),
      endDate: new Date(),
      proxDate: new Date(),
      workStatus: false,
      generalStatus: true,
      creationDate: new Date(),
    },
    {
      name: 'Pachoa',
      description: 'App móvil tipo/"uber eats"/ de complejos de dark kitchens con restaurantes ',
      area: 'Desarrollo',
      client: 'Jorge',
      startDate: new Date(),
      endDate: new Date(),
      proxDate: new Date(),
      workStatus: false,
      generalStatus: true,
      creationDate: new Date()
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
