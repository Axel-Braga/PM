import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-access',
    templateUrl: './access.component.html',
    imports:[
        RouterLink
    ]
})
export class AccessComponent { }
