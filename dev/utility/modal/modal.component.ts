import {Component} from 'angular2/core';
declare var jQuery: any;

@Component({
    selector: "my-modal",
    styleUrls: ['../prod/utility/modal/modal.css'],
    templateUrl: '../prod/utility/modal/modal.html',
    inputs: ['modalHeader','modalBody']
})
export class ModalComponent {
  
  public modalHeader: string;
  public modalBody: string;

  alert() {
      jQuery('#myAlertModal').modal('toggle');
  }

}
