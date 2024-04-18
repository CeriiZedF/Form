import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form! : FormGroup;
  defaultGender : string = 'male';
  defaultSubject : string = 'Ng';

  subjects = [
    {
      type: 'Ng',
      text: 'Angular',
    },
    {
      type: 'j',
      text: 'Java',
    },
    {
      type: 'sharp',
      text: 'C#',
    },
    {
      type: 'js',
      text: 'JavaScript',
    },
  ];

  genders = [
    {
      type: 'male',
      text: 'man',
    },
    {
      type: 'female',
      text: 'woman',
    },
    {
      type: 'Im_croissant',
      text: 'I`m croissant',
    }
  ];

  ngOnInit(){
    this.form = new FormGroup({
      user: new FormGroup({
        family: new FormControl('',[Validators.required, Validators.minLength(3)]),
        name: new FormControl(''),
        groupName: new FormControl('',[Validators.required, Validators.minLength(3)]),
        selectedItem: new FormControl(''),
        gender: new FormControl(''),
        checkBox: new FormControl('')
      }),
    });
  }

  isSubmited : boolean = false;

  onSubmit(){
    this.isSubmited = true;

    console.log(this.form.value.user.family)
  }
}
