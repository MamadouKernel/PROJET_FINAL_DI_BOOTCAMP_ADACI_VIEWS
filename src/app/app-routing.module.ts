import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AuthentificationComponent} from "./pages/authentification/authentification.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "authentification"},
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [

      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component: WelcomeComponent},
      {
        path: "users",
        loadChildren: () => import("./pages/users/users.module").then(value => value.UsersModule),

      },
      
      {
        path: "roles",
        loadChildren: () => import("./pages/roles/roles.module").then(value => value.RolesModule),
      },

    ],
  },
  {
    path: "authentification",
    component: AuthentificationComponent,
    loadChildren: () => import("./pages/authentification/authentification.module").then(m => m.AuthentificationModule),
  },
  {path: "**", redirectTo: "authentification", pathMatch: "full"},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
