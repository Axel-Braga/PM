import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Projects } from '../../interfaces/projects.interface';

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
      client: 'Jorge',
      dateStart: new Date(),
      dateEnd: new Date(),
      dateNext: new Date(),
      hours: 5,
      statusWork: true,
      statusGeneral: true,
    },
    {
      name: 'Cosmofon',
      client: 'Jorge',
      dateStart: new Date(),
      dateEnd: new Date(),
      dateNext: new Date(),
      hours: 5,
      statusWork: true,
      statusGeneral: true,
    },
    {
      name: 'PM',
      client: 'Jorge',
      dateStart: new Date(),
      dateEnd: new Date(),
      dateNext: new Date(),
      hours: 5,
      statusWork: true,
      statusGeneral: true,
    },
    {
      name: 'PM',
      client: 'Jorge',
      dateStart: new Date(),
      dateEnd: new Date(),
      dateNext: new Date(),
      hours: 5,
      statusWork: true,
      statusGeneral: true,
    },
    {
      name: 'PM',
      client: 'Jorge',
      dateStart: new Date(),
      dateEnd: new Date(),
      dateNext: new Date(),
      hours: 5,
      statusWork: true,
      statusGeneral: true,
    },
    {
      name: 'PM',
      client: 'Jorge',
      dateStart: new Date(),
      dateEnd: new Date(),
      dateNext: new Date(),
      hours: 5,
      statusWork: false,
      statusGeneral: true,
    },
    {
      name: 'PM',
      client: 'Jorge',
      dateStart: new Date(),
      dateEnd: new Date(),
      dateNext: new Date(),
      hours: 5,
      statusWork: true,
      statusGeneral: true,
    },
    {
      name: 'PM',
      client: 'Jorge',
      dateStart: new Date(),
      dateEnd: new Date(),
      dateNext: new Date(),
      hours: 5,
      statusWork: true,
      statusGeneral: true,
    },
    {
      name: 'PM',
      client: 'Jorge',
      dateStart: new Date(),
      dateEnd: new Date(),
      dateNext: new Date(),
      hours: 5,
      statusWork: true,
      statusGeneral: true,
    },
    {
      name: 'PM',
      client: 'Jorge',
      dateStart: new Date(),
      dateEnd: new Date(),
      dateNext: new Date(),
      hours: 5,
      statusWork: false,
      statusGeneral: true,
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
