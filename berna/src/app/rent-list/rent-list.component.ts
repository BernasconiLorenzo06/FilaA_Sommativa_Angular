import { Component, Input } from '@angular/core';
import { rentModel } from '../rent.model';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent {
  @Input() mezziNoleggiati !: rentModel[];
}
