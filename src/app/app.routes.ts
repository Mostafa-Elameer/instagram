import { HomeComponent } from './allComponents/home/home.component';
import { NotfoundComponent } from './allComponents/notfound/notfound.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './allComponents/login/login.component';
import { RegisterComponent } from './allComponents/register/register.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { ProfileComponent } from './allComponents/profile/profile.component';
import { pageGuard } from './sheard/gaurds/page.guard';
import { loginGuard } from './sheard/gaurds/login.guard';
import { UpdatepostComponent } from './allComponents/updatepost/updatepost.component';
import { CreatepostComponent } from './allComponents/createpost/createpost.component';
import { SearchComponent } from './allComponents/search/search.component';

export const routes: Routes = [
    {
        path: "", component: AuthLayoutComponent, canActivate: [loginGuard], children: [
            { path: '', redirectTo: "login", pathMatch: "full" },
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent }
        ],
    },
    {
        path: "", component: PageLayoutComponent, canActivate: [pageGuard], children: [
            { path: '', redirectTo: "home", pathMatch: "full" },
            { path: 'home', component: HomeComponent },
            { path: "Profile/:iduser", component: ProfileComponent },
            { path: "createpost", component: CreatepostComponent },
            { path: "search", component: SearchComponent },
            { path: "updatepost/:id", component: UpdatepostComponent },

        ]
    },

    { path: "**", component: HomeComponent }



];
