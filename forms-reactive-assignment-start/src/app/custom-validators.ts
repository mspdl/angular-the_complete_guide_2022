import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

const INVALID_WORD = "Test";

export class CustomValidators {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === INVALID_WORD) {
      return {
        invalidProjectName: true,
      };
    }
    return null;
  }

  static asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === INVALID_WORD) {
          resolve({
            invalidProjectName: true,
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
