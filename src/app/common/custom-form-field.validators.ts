import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'path';
import { reject } from 'q';
import { Observable } from 'rxjs';

export class CustomFormFieldValidators {
    static spaceNotAllowed ( control: AbstractControl) : ValidationErrors | null {

        if((control.value as string).indexOf(' ') != -1)
            return  { spaceNotAllowed: 'space is not ....alolowed' };
        
        return null;
    }

    // Asynchronous Validator using Service call and 
    // "CustomFormFieldValidators" will pass as a ThIRD Parameter in FORMGROUP


    static uniqueName ( control: AbstractControl) : Promise <ValidationErrors | null> | Observable <ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            
            setTimeout(() =>{

                if( control.value == 'sunil')  
                    resolve({uniqueName: true});
                else 
                    resolve(null);

            }, 2000)
        });   
    }

    static uniquePassword ( control: AbstractControl) : Promise <ValidationErrors | null> | Observable <ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            
            setTimeout(() =>{

                if( control.value == 'Sunil@123')  
                    resolve({uniquePassword: true});
                else 
                    resolve(null);

            }, 2000)
        });   
    }
}