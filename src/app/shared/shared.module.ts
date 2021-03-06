import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoadingSpinnerComponent } from './LoadingSpinner/loading-spinner.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoadingSpinnerComponent],
  exports: [LoadingSpinnerComponent, CommonModule, RouterModule],
  providers: [],
})
export class SharedModule {}
