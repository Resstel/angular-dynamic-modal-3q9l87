import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ModalService } from '../components/modal/modal.service';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ModalComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ModalService ],
  entryComponents: [ModalComponent]
})
export class AppModule { }
