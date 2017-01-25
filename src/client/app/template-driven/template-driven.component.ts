import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: './app/template-driven/template-driven.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class TemplateDrivenComponent {
  user = {
    username: 'Sandro',
    email: 'sandro.boehme@gmx.de',
    password: 'Testpassword',
    gender: 'male'
  };
  genders = [
    'male',
    'female'
  ]
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
