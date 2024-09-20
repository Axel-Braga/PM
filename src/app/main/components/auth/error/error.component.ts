import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone:true,
    selector: 'app-error',
    templateUrl: './error.component.html',
    imports: [RouterLink]
})
export class ErrorComponent { }