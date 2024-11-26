import { Component } from '@angular/core';
import { ItemCategoriesComponent } from '../item-categories/item-categories.component';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ItemCategoriesComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

}
