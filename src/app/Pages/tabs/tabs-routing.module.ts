import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'production',
        loadChildren: () =>
          import('../production/production.module').then(
            (m) => m.ProductionPageModule
          ),
      },
      {
        path: 'stock',
        loadChildren: () =>
          import('../stock/stock.module').then((m) => m.StockPageModule),
      },
      {
        path: 'ingredient',
        loadChildren: () =>
          import('../ingredient/ingredient.module').then(
            (m) => m.IngredientPageModule
          ),
      },
      {
        path: 'produit',
        loadChildren: () =>
          import('../produit/produit.module').then((m) => m.ProduitPageModule),
      },
      {
        path: '',
        redirectTo: '/production',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
