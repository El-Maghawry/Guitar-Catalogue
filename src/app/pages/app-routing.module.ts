import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
        component: GuitarCataloguePage
    },
    {
        path: "profile",
        component: ProfilePage
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