import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Zadatak } from '../zadatak';
import { ZadatakService } from '../zadatak.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ZadatakDialogComponent } from '../zadatak-dialog/zadatak-dialog.component';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-zadatak-detail',
  templateUrl: './zadatak-detail.component.html',
  styleUrls: ['./zadatak-detail.component.css'],
  providers: [ZadatakService]
})
export class ZadatakDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: ZadatakService,
    private modalService: NgbModal,
    private location: Location
  ) { }

  id: string;
  zadatak: Zadatak;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  editZadatak(zad) {
    const modalRef = this.modalService.open(ZadatakDialogComponent);

    let zadatak = {
      _id: zad._id,
      ime: zad.ime,
      opis: zad.opis,
      kreiran: zad.kreiran
    };

    modalRef.componentInstance.zadatak = zadatak;
    modalRef.componentInstance.event.subscribe(($e) => {
      this.getData();
    })
  }

  deleteZadatak() {
    const modalRef = this.modalService.open(DeleteConfirmComponent);
    modalRef.componentInstance.event.subscribe(($e) => {
      this.service
        .deleteZadatakById(this.zadatak._id);
      this.goBack();
    })
  }

  getData() {
    this.service
      .getZadatakById(this.id)
      .subscribe(
        (zadatak) => {
          this.zadatak = zadatak;
        }
      );
  }

  goBack() {
    this.location.back();
  }

}
