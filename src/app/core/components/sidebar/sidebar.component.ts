import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public links = [
    { path: 'feature1', active: false },
    { path: 'feature2', active: false },
    { path: 'feature3', active: false },
    { path: 'feature4', active: false },
  ]
  public isActive1!: boolean
  public isActive2!: boolean
  public isActive3!: boolean
  public isActive4!: boolean

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setCurrent()
  }

  goTo(route: string): void {
    this.setCurrent(route)
  }

  setCurrent(current?: string): void {
    if (!current) {
      const parts = window.location.href.split('/')
      current = parts[parts.length - 1]
    }
    this.isActive1 = current === 'feature1' || current === ''
    this.isActive2 = current === 'feature2'
    this.isActive3 = current === 'feature3'
    this.isActive4 = current === 'feature4'
  }
}
