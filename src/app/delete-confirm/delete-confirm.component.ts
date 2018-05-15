import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  public event: EventEmitter<any> = new EventEmitter();


  ngOnInit() {
  }

  onSubmit() {
    this.event.emit('delete confirmed');
    this.activeModal.close();
  }

}
