import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog.component';
import { SuccessDialogComponent } from './success-dialog.component';
import { APIError } from './api-error.model';

@Injectable({ providedIn: 'root' })
export class DialogService {
    private dialog = inject(MatDialog);

    showError(input: string | APIError) {
        const dialogRef = this.dialog.open(ErrorDialogComponent, { width: '300px' });

        // если передали строку, превращаем в APIError с message
        if (typeof input === 'string') {
            dialogRef.componentInstance.error = { message: input };
        } else {
            dialogRef.componentInstance.error = input;
        }

        return dialogRef.afterClosed();
    }

    showSuccess(message: string) {
        const dialogRef = this.dialog.open(SuccessDialogComponent, { width: '300px' });
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    }
}