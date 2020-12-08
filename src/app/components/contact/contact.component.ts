import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder,private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('.*.com$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9 ]{11}')]],
      message: ['', Validators.required]
    });
  }
  getFormData() {
    this.toastr.success('Send successful', 'Well done!');
  }
  ngOnInit(): void { }
}
