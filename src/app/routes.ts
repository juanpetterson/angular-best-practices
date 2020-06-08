import { Routes } from "@angular/router";
import { CatalogComponent } from "./components/catalog.component";
import { RegisterComponent } from "./components/sign-in.component";
import { SignInComponent } from "./components/sign-in.component";

export const appRoutes: Routes = [
  { path: "catalog", component: CatalogComponent },
  { path: "users/register", component: RegisterComponent },
  { path: "users/sign-in", component: SignInComponent },
];
