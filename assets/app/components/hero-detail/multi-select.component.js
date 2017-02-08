"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by marc on 17/08/16.
 */
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const noop = () => { };
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(() => MultiSelectComponent),
    multi: true
};
let MultiSelectComponent = 
/**
 *
 */
class MultiSelectComponent {
    constructor() {
        //The internal data model
        this.innerValue = [];
        //Placeholders for the callbacks which are later providesd
        //by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    get value() {
        return this.innerValue;
    }
    ;
    set value(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }
    writeValue(value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MultiSelectComponent.prototype, "options", void 0);
MultiSelectComponent = __decorate([
    core_1.Component({
        selector: 'multi-select',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
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
], MultiSelectComponent);
exports.MultiSelectComponent = MultiSelectComponent;
//# sourceMappingURL=multi-select.component.js.map