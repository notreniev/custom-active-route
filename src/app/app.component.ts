import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common'
import { SidebarComponent } from './core/components/sidebar/sidebar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    SidebarComponent,
  ],
})
export class AppComponent {
  title = 'todo-app'
}
