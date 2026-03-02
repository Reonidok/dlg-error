import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'dlg-success',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="dlg-container">
      <h2 class="dlg-title">Успех</h2>
      <p class="dlg-message">{{ message }}</p>
      <button mat-raised-button color="primary" (click)="close()">Закрыть</button>
    </div>
  `,
    styles: [`
    .dlg-container { padding: 20px; text-align: center; }
    .dlg-title { color: #4caf50; margin-bottom: 10px; }
    .dlg-message { margin-bottom: 20px; font-size: 14px; }
  `]
})
export class SuccessDialogComponent {
    message: string = 'Успех операции';
    private dialogRef = inject(MatDialogRef<SuccessDialogComponent>)
    close() { this.dialogRef.close(); }
}