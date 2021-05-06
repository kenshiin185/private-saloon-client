import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  creationUserForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private el : ElementRef) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.creationUserForm = this.fb.group({
      password:'',
      image:'',
      user:''
    
    });
  }

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#image');
    let fileCount:number = inputEl.files.length;
    if(fileCount > 0) {
      let formData = new FormData();
      formData.append('image',inputEl.files.item(0));
      this.authService.uploadImage(formData).subscribe(data => console.log(data), error => console.error(error));
    }
  }
  createUser(formDirective: FormGroupDirective) {
    if(this.creationUserForm.valid) {
      console.log(this.creationUserForm.value);
      this.authService
      .createUser(this.creationUserForm.value)
      .subscribe(data => this.handleSuccess(data, formDirective), error => this.handleError(error));
    }
  }

  handleSuccess(data, formDirective) {
    console.log('utilisateur créé avec succés !', data);
  this.creationUserForm.reset();
  formDirective.resetForm();
  }

  handleError(error) {
    console.log(' Une erreur s\'est produite lors de la création de l\'utilisateur', error);
  }
}
