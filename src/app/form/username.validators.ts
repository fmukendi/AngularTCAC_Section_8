import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";


export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors {
        if ((control.value as string).indexOf(' ') >= 0) {
            /* return {
                minLength: {
                    requiredLength: 10,
                    actualLength: control.value.length
                }
            }; */
            return { cannotContainSpace: true };
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
        // simulate server call
        setTimeout(() => {
            if (control.value === 'mosh') {

                resolve({ shouldBeUnique: true });
            }else {
                resolve(null);
            }
        }, 2000);
        });
    }
}
