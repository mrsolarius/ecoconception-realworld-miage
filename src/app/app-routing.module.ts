import { inject, NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { UserService } from "./core/services/user.service";
import { map } from "rxjs/operators";
import { ProfileComponent } from "./features/profile/profile.component";
import { HomeComponent } from "./features/home/home.component";
import { AuthComponent } from "./core/auth/auth.component";
import { SettingsComponent } from "./features/settings/settings.component";
import { ProfileArticlesComponent } from "./features/profile/profile-articles.component";
import { ProfileFavoritesComponent } from "./features/profile/profile-favorites.component";
import { EditorComponent } from "./features/editor/editor.component";
import { ArticleComponent } from "./features/article/article.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "login",
    component: AuthComponent,
    canActivate: [
      () => inject(UserService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
    ],
  },
  {
    path: "register",
    component: AuthComponent,
    canActivate: [
      () => inject(UserService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
    ],
  },
  {
    path: "settings",
    component: SettingsComponent,
    canActivate: [() => inject(UserService).isAuthenticated],
  },
  {
    path: "profile",
    children: [
      {
        path: ":username",
        component: ProfileComponent,
        children: [
          {
            path: "",
            component: ProfileArticlesComponent,
          },
          {
            path: "favorites",
            component: ProfileFavoritesComponent,
          },
        ],
      },
    ],
  },
  {
    path: "editor",
    children: [
      {
        path: "",
        component: EditorComponent,
        canActivate: [() => inject(UserService).isAuthenticated],
      },
      {
        path: ":slug",
        component: EditorComponent,
        canActivate: [() => inject(UserService).isAuthenticated],
      },
    ],
  },
  {
    path: "article/:slug",
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
