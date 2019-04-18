import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [EnrollmentComponent],
  exports: [EnrollmentComponent],
  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
})
export class EnrollmentModule { }
