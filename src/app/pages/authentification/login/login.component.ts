import {Component, OnInit} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {routeMapping} from "../../../utils/routeMapping";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private router: Router) {
    this.form = this.fb.group({
      profile: new UntypedFormControl(null, []),
      username: new UntypedFormControl(null, []),
      password: new UntypedFormControl(null, []),
      remember: new UntypedFormControl(true, []),
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log("submit", this.form.value);
      this.router.navigate([routeMapping.home]);
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
