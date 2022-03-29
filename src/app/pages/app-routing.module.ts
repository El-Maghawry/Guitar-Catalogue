import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { GuitarCataloguePage } from "./guitar-catalogue/guitar-catalogue.page";
import { LoginPage } from "./login/login.page";
import { ProfilePage } from "./profile/profile.page";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login"

    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "guitars",
        component: GuitarCataloguePage,
        canActivate: [ AuthGuard ]
    },
    {
        path: "profile",
        component: ProfilePage,
        canActivate: [ AuthGuard ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], // Imports a module
    exports: [
        RouterModule
    ], // Expose module and it's features
})

export class AppRoutingModule {

}