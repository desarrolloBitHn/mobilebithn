import { Directive, Attribute } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

/**
 * Generated class for the EqualValidatorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[validateEqual][ngModel]', // Attribute selector
  providers: [
    { provide: NG_VALIDATORS, useValue: EqualValidator, multi: true }
  ]
})
export class EqualValidator implements Validator{

  constructor(@Attribute('validateEqual') public validateEqual: string) {
    console.log('Hello EqualValidatorDirective Directive');
  }

  validate(c: FormControl): { [key: string]: any } {
    // self value (e.g. retype password)
    let v = c.value;

    // control value (e.g. password)
    let e = c.root.get(this.validateEqual);

    // value not equal
    if (e && v !== e.value) return {
      validateEqual: false
    }
    return null;
  }

}

