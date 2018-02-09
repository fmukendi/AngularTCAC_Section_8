import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MomentModule } from 'angular2-moment/moment.module';
import {CalendarComponent} from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { FullCalendarModule } from 'ng-fullcalendar';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule , MatButtonModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        ButtonsModule.forRoot(),
        ModalModule.forRoot(),
        FlexLayoutModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MomentModule ,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
        FormComponent,
        NewCourseFormComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
