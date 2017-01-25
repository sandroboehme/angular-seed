import { Observable } from 'rxjs/Observable';
import {FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';
import {Component} from '@angular/core';

@Component({
    selector: 'data-driven',
    templateUrl: './app/data-driven/data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;

    genders = [
        'male',
        'female'
    ];

    constructor(private formBuilder: FormBuilder) {
        /*
        this.myForm = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl(
                    'Sandro',
                    Validators.required
                ),
                'email': new FormControl(
                    'sandro.boehme@gmx.de',
                    [Validators.required, Validators.pattern("^.+([\.-]?.+)*@.+([\.-]?.+)*(\..{2,3})+$")]

                )
            }),
            'password': new FormControl(
                '1234',
                Validators.required
            ),
            'gender': new FormControl('male'),
            'hobbies': new FormArray([
                new FormControl('Cooking')
            ])
        });
        */
        this.myForm = formBuilder.group({
            'userData': formBuilder.group({
                'username': [ 'Sandro', [Validators.required, this.exampleValidator] ],
                'email': [
                    'sandro.boehme@gmx.de',
                    [Validators.required, Validators.pattern("^.+([\.-]?.+)*@.+([\.-]?.+)*(\..{2,3})+$")]
                ]
            }),
            'password': [ '1234', Validators.required ],
            'gender': ['male'],
            'hobbies': formBuilder.array([ ['Cooking', Validators.required, this.asyncExampleValidator] ])
        });
        this.myForm.statusChanges.subscribe(
            (data: any) => console.log(data)
        );
    }
    onSubmit() {
        console.log(this.myForm);
    }
    onDelete(i: number){
         (<FormArray>this.myForm.get('hobbies')).removeAt(i);
    }

    onAddHobby(){
        (<FormArray>this.myForm.get('hobbies')).push(
            new FormControl('', Validators.required, this.asyncExampleValidator)
        );
    }

    exampleValidator(control: FormControl): {[s: string]: boolean} {
        if (control.value === 'Example') {
            return {'example': true};
        }
        return null;
    }
    asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Example') {
                    resolve({'invalid': true})
                } else {
                    resolve(null);
                }
            }, 1500);
        });
        return promise;
    }
    onReset(){
        this.myForm.reset();
    }
}
