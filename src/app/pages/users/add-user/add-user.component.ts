import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.less"],
})
export class AddUserComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      Lastname: new FormControl(null, []),
      Fistname: new FormControl(null, []),
      Email: new FormControl(null, [Validators.email]),
      Username: new FormControl(null, []),
      Role: new FormControl(null, []),
      Phone: new FormControl(null, []),
      Password: new FormControl(null, []),
      ConfirmPassword: new FormControl(null, []),
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log("submit", this.form.value);
      // this.router.navigate([routeMapping.home]);
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  ngOnInit(): void {

  }
}
