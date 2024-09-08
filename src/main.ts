import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component'
import { AppRoutingModule } from './app/app-routing.module'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'
import { IxModule } from '@siemens/ix-angular'
import { provideHttpClient } from '@angular/common/http'

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), importProvidersFrom(BrowserModule, AppRoutingModule, IxModule.forRoot())],
}).catch((err) => console.error(err))
