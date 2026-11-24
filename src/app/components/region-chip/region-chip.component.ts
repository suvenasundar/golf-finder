import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Region } from 'src/app/models/golf-course';
@Component({
  selector: 'app-region-chip',
  templateUrl: './region-chip.component.html',
  styleUrls: ['./region-chip.component.scss']
})
export class RegionChipComponent {
  @Input() region: Region | 'All' ='All';
  @Input() selected = false;
  @Output() picked = new EventEmitter <Region | 'All'>();

  onClick(){
    this.picked.emit(this.region)
  }

}
