import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { APIError } from './api-error.model';

@Component({
    selector: 'dlg-error',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="dlg-container">
      <h2 class="dlg-title">Ошибка</h2>
      <p class="dlg-message"><strong *ngIf="error?.code">{{error?.code}}:</strong> {{error?.message}}</p>
      <p class="dlg-details" *ngIf="error?.details">{{error?.details}}</p>
      <button mat-raised-button color="warn" (click)="close()">Закрыть</button>
    </div>
  `,
    styles: [`
    .dlg-container { padding: 20px; text-align: center; }
    .dlg-title { color: #f44336; margin-bottom: 10px; }
    .dlg-message { margin-bottom: 10px; font-size: 14px; }
    .dlg-details { font-size: 12px; color: #666; }
  `]
})
export class ErrorDialogComponent {
    @Input() error?: APIError;   // сюда будем передавать APIError
    private dialogRef = inject(MatDialogRef<ErrorDialogComponent>);

    close() { this.dialogRef.close(); }
}