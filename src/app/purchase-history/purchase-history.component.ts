import { Component } from '@angular/core';
import { PurchaseHistoryItemComponent } from '../purchase-history-item/purchase-history-item.component';
@Component({
  selector: 'app-purchase-history',
  standalone: true,
  imports: [PurchaseHistoryItemComponent],
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.css'
})
export class PurchaseHistoryComponent {

}
