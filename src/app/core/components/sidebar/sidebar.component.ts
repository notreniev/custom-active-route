import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

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

  ngOnInit(): void {
    this.setDefaultMarker()
  }

  go(route: string): void {
    this.links.forEach((link) =>
      link.path === route ? (link.active = !link.active) : (link.active = false)
    )
  }

  setDefaultMarker(current?: string): void {
    if (!current) {
      const parts = window.location.href.split('/')
      current = parts[parts.length - 1]
    }

    this.go(current)
  }
}
