import { AFormComponent } from './components/a-form/a-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ATableComponent } from './components/a-table/a-table.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeysPipe } from './pipes/keys.pipe';
import { AButtonsComponent } from './components/a-buttons/a-buttons.component';



@NgModule({
  declarations: [ATableComponent, AFormComponent, FilterPipe, KeysPipe, AButtonsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class SharedModule { }
