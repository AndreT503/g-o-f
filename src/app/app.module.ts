import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FloydComponent } from './floyd/floyd.component';
import { FloydComponentComponent } from './floyd-component/floyd-component.component';
import { NgModule } from '@angular/core';
import { AngularPreDirective } from './angular-pre.directive';

@NgModule({
  declarations: [
    AppComponent,
    FloydComponentComponent,
    FloydComponent,
    AngularPreDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FloydComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
