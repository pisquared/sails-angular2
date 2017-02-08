/**
 * Created by marc on 17/08/16.
 */
import { Component, Input, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelectComponent),
    multi: true
};

@Component({
    selector: 'multi-select',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    template: `
<select class="form-control"
        [(ngModel)]="value"
        required=""            
        multiple="">
  <option *ngFor="let opt of options" [ngValue]="opt">{{opt}}</option>
</select>
`,
    styleUrls: ['app/components/hero-detail/multi-select.component.css']
})


/**
 *
 */
export class MultiSelectComponent implements ControlValueAccessor {

    @Input() options: Array<string>;


    //The internal data model
    private innerValue: any = [];

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;


    get value(): any {
        return this.innerValue;
    };

    set value(v: any) {
        if (v !== this.innerValue) {
           this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

}
