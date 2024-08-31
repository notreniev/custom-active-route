import { Component, inject, OnInit } from '@angular/core'
import { routes } from '../../../app-routing.module'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import { BreadcrumbService } from '../../services/breadcrumb.service'
import { Observable, tap } from 'rxjs'
import { BreadCrumb } from './models/breadcrumb.model'

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  protected readonly breadcrumbsService = inject(BreadcrumbService)

  breadcrumbs$ = new Observable<BreadCrumb[]>()

  ngOnInit(): void {
    this.breadcrumbs$ = this.breadcrumbsService.breadcrumbsObservable.pipe(
      tap(console.log)
    )
    console.log('current:')
  }
}
