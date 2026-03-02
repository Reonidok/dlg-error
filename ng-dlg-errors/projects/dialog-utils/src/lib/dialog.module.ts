import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ErrorDialogComponent } from './error-dialog.component';
import { SuccessDialogComponent } from './success-dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        
        ErrorDialogComponent,
        SuccessDialogComponent
    ],
    exports: [
        ErrorDialogComponent,
        SuccessDialogComponent
    ]
})
export class DialogModule { }