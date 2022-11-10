import { Component, OnInit , Input} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Peixes } from '../../models/peixes/peixes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  @Input() peixe: Peixes

  ngOnInit(): void {
  }

  detalhes(){
    const modal = this.modalService.open(ModalComponent)
    modal.componentInstance.peixe = this.peixe;
  }
}
