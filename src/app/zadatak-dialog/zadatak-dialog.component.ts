import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Zadatak } from '../zadatak';
import { ZadatakService } from '../zadatak.service';

@Component({
  selector: 'app-zadatak-dialog',
  templateUrl: './zadatak-dialog.component.html',
  styleUrls: ['./zadatak-dialog.component.css']
})
export class ZadatakDialogComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private zadatakService: ZadatakService
  ) {}

  zadatak: Zadatak;
  model = new Zadatak();
  public event: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    if (this.zadatak) {
      this.model = this.zadatak;
    }
  }

  onSubmit() {
    if (this.zadatak) {
      this.zadatakService
        .updateZadatak(this.model)
        .subscribe(
          (newZadatak) => {
            this.event.emit('modal closed');
            this.activeModal.close();
          }
        );
    } else {
      this.zadatakService
        .createZadatak(this.model)
        .subscribe(
          (newZadatak) => {
            this.event.emit('modal closed');
            this.activeModal.close();
          }
        );
    }
  }

}
