import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductTemplateComponent } from './product-template/product-template.component';
import { WebSocketComponent } from './web-socket/web-socket.component';
import {WebSocketService} from './shared/web-socket.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductTemplateComponent,
    WebSocketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
