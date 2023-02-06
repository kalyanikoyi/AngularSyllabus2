import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

register = new FormGroup({
  name : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
  email : new FormControl('',[Validators.required,Validators.email]),
  password : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]+$')]),
  confoPass : new FormControl('',[Validators.required])
})

onsubmit(register : FormGroup){
console.log(register.value);
}

// ----------- we can write validations like this --

get name(){
  return this.register.get('name')
}
get password(){
  return this.register.get('password')
}
get confoPass(){
  return this.register.get('confoPass')
}
get email(){
  return this.register.get('email')
}
}
