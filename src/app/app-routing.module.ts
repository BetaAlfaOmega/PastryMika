import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    loadChildren: () =>
      import('./Pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./Pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./Pages/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'production',
    loadChildren: () =>
      import('./Pages/production/production.module').then(
        (m) => m.ProductionPageModule
      ),
  },
  {
    path: 'stock',
    loadChildren: () =>
      import('./Pages/stock/stock.module').then((m) => m.StockPageModule),
  },
  {
    path: 'ingredient',
    loadChildren: () =>
      import('./Pages/ingredient/ingredient.module').then(
        (m) => m.IngredientPageModule
      ),
  },
  {
    path: 'produit',
    loadChildren: () =>
      import('./Pages/produit/produit.module').then((m) => m.ProduitPageModule),
  },
  {
    path: 'add-production',
    loadChildren: () =>
      import('./Pages/add-production/add-production.module').then(
        (m) => m.AddProductionPageModule
      ),
  },
  {
    path: 'stock-story',
    loadChildren: () =>
      import('./Pages/stock-story/stock-story.module').then(
        (m) => m.StockStoryPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
