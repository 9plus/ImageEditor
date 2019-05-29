import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
        MatCardModule } from '@angular/material';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  exports: [
    MatButtonModule,
    DragDropModule,
    MatCardModule
  ]
})
export class MaterialModule { }
