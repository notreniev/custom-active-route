import { InjectionToken, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './core/components/not-found/not-found.component'

export const externalUrlProvider = new InjectionToken(
  'externalUrlRedirectResolver'
)

export const routes: Routes = [
  {
    path: 'feature1',
    loadComponent: () =>
      import('./features/feature1/feature1.component').then(
        (c) => c.Feature1Component
      ),
  },
  {
    path: 'feature2',
    loadComponent: () =>
      import('./features/feature2/feature2.component').then(
        (c) => c.Feature2Component
      ),
  },
  {
    path: 'feature3',
    loadComponent: () =>
      import('./features/feature3/feature3.component').then(
        (c) => c.Feature3Component
      ),
  },
  {
    path: 'feature4',
    loadComponent: () =>
      import('./features/feature4/feature4.component').then(
        (c) => c.Feature4Component
      ),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'feature1',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
