import { NgModule } from '@angular/core';
import {
    HashLocationStrategy,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './main/components/notfound/notfound.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

//configuracion idioma local pipes
import localEsMX  from "@angular/common/locales/es-MX";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localEsMX);

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule, ToastModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        MessageService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
