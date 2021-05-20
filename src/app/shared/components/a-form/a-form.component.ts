import { enumTypes } from './../../models/enumTypes';
import { IFields } from './../../models/fields';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-a-form',
  templateUrl: './a-form.component.html',
  styleUrls: ['./a-form.component.css']
})
export class AFormComponent implements OnInit {

  enumType = enumTypes;
  @Input() formName: FormGroup;
  @Input() fields: IFields[];
  @Input() bg; // color background



ngOnInit(): void {
   throw new Error('Method not implemented.');
  }



}
