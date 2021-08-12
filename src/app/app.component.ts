import { Component, ViewContainerRef } from '@angular/core';
import { ModalService } from '../components/modal/modal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(
      private modalService: ModalService,
      private viewContainerRef: ViewContainerRef
  ) {}

  openModal(e, modalTitle, modalText) {
    e.preventDefault();
    this.modalService.setRootViewContainerRef(this.viewContainerRef);
    this.modalService.addDynamicComponent(modalTitle, modalText);
  }
}
