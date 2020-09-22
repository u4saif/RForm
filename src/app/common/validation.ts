
export class CustomValidator {

    // Validates  phone numbers
static phoneValidator(number): any {
    if (number.pristine) {
       return null;
    }
    const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    if (PHONE_REGEXP.test(number.value)) {
       return null;
    }
    return {
       invalidNumber: true
    };
 }

  

}