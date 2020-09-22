import { Component, OnInit } from '@angular/core';
import { CustomValidator } from '../common/validation';
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
 
interface City {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent implements OnInit {
  
  citys2: City[] = [
    {value: 'Alabama-0', viewValue: 'Alabama'},
    {value: 'Alaska-1', viewValue: 'Alaska'},
    {value: 'California-2', viewValue: 'California'},
    {value: 'Delaware-3', viewValue: 'Delaware'},
    {value: 'Tennessee-4', viewValue: 'Tennessee'},
    {value: 'Texas-5', viewValue: 'Texas'}
  ]; 

  constructor() { }
  form= new FormGroup({ 
    nameFormControl:new FormControl('', [Validators.required,Validators.minLength(3)]),
    emailFormControl : new FormControl('', [Validators.required, Validators.email]),
    phoneFormControl:new FormControl('',[Validators.required,CustomValidator.phoneValidator]),
    dateFormControl: new FormControl('',[Validators.required])
})
 
  ngOnInit(): void {
  }


}