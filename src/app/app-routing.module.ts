import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes = [
    {path:'', component : LoginComponent},
    {path:'navbar', component: NavbarComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [LoginComponent,NavbarComponent]