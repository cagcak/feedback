import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { FeedbackToolbarComponent } from './feedback-toolbar/feedback-toolbar.component';
import { FeedbackRectangleComponent } from './feedback-rectangle/feedback-rectangle.component';
import { FeedbackService } from './feedback.service';
import { FeedbackDirective } from './feedback.directive';

@NgModule({
    declarations: [
        FeedbackDialogComponent,
        FeedbackToolbarComponent,
        FeedbackRectangleComponent,
        FeedbackDirective
    ],
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatTooltipModule,
        CommonModule,
        FormsModule,
        MatCheckboxModule,
        MatProgressSpinnerModule
    ],
    exports: [
        FeedbackDirective
    ],
    providers: [
        FeedbackService
    ]
})
export class FeedbackModule {
}
