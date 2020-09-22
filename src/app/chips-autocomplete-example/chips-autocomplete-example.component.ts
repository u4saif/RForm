import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

 
@Component({
  selector: 'chips-autocomplete-example',
  templateUrl: 'chips-autocomplete-example.component.html',
  styleUrls: ['chips-autocomplete-example.component.css'],
})
export class ChipsAutocompleteExample {
   
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  cityCtrl = new FormControl();
  filteredcitys: Observable<string[]>;
  citys: string[] = [];
  allcitys: string[] = ['Alabama', 'Alaska','California','Delaware','Tennessee', 'Texas'];

  @ViewChild('cityInput') cityInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredcitys = this.cityCtrl.valueChanges.pipe(
        startWith(null),
        map((city: string | null) => city ? this._filter(city) : this.allcitys.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our city
    if ((value || '').trim()) {
      this.citys.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.cityCtrl.setValue(null);
  }

  remove(city: string): void {
    const index = this.citys.indexOf(city);

    if (index >= 0) {
      this.citys.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.citys.push(event.option.viewValue);
    this.cityInput.nativeElement.value = '';
    this.cityCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allcitys.filter(city => city.toLowerCase().indexOf(filterValue) === 0);
  }


}
