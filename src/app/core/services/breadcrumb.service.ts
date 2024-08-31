import { Injectable } from '@angular/core'
import { BreadCrumb } from '../components/breadcrumb/models/breadcrumb.model'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { BehaviorSubject, filter } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbs: BreadCrumb[] = []
  private breadcrumbsSubject = new BehaviorSubject<BreadCrumb[]>([])
  public breadcrumbsObservable = this.breadcrumbsSubject.asObservable()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root)

      this.breadcrumbsSubject.next(this.breadcrumbs)
    })
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {
    const children: ActivatedRoute[] = route.children

    if (children.length === 0) {
      return breadcrumbs
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment) => segment.path).join('/')
      if (routeURL !== '') {
        url += `/${routeURL}`
      }

      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url })
      return this.createBreadcrumbs(child, url, breadcrumbs)
    }

    return breadcrumbs
  }
}
