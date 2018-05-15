import { Component, ViewChild, OnInit } from '@angular/core';
import { ZadatakService } from '../zadatak.service';
import { Zadatak } from '../zadatak';
import { ZadatakDialogComponent } from '../zadatak-dialog/zadatak-dialog.component';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';

import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  zadaci: Zadatak[] = [];
  elements = {};

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private zadatakService: ZadatakService,
    private modalService: NgbModal,
    private location: Location
  ) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthChange: false
    };

    this.getData();
  }

  createZadatak() {
    const modalRef = this.modalService.open(ZadatakDialogComponent);
    modalRef.componentInstance.event.subscribe(($e) => {
      this.getData();
      this.rerender();
    })
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
      this.rerender();
    })
  }

  deleteZadatak() {
    console.log(this.elements);
    const modalRef = this.modalService.open(DeleteConfirmComponent);
    modalRef.componentInstance.event.subscribe(($e) => {

      var keys = Object.keys(this.elements);

      keys.forEach(key => {
        if (this.elements[key]) {
          this.zadatakService
            .deleteZadatakById(key);
        }

        if (keys[keys.length - 1] == key) {
          setTimeout(() => {
            this.getData();
            this.rerender();
          }, 500);
        }
      });
    })
  }

  getData() {
    this.zadatakService
      .getAllZadaci()
      .subscribe(
        (zadaci) => {
          this.zadaci = zadaci;
          this.dtTrigger.next();
        }
      );
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

}
