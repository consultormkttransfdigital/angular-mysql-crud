import { NgModule } from '@angular/core';

// En otros ejemplos requieren también
// Seguro es porque implementan otros controles de Material todavia no utilizados
// import { CommonModule } from '@angular/common';

import { 
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule
} from '@angular/material';

import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatSelectModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatTableModule,
        MatTabsModule,
        MatGridListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatStepperModule,
        MatCheckboxModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatSelectModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatTableModule,
        MatTabsModule,
        MatGridListModule,
        MatDividerModule,
        MatFormFieldModule,        
        MatStepperModule,
        MatCheckboxModule,
        MatButtonModule
    ]
})

export class MaterialModule {}
