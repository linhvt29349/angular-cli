import { Component, Input } from '@angular/core';
import { IProducts } from 'src/app/interfaces/products';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',

})
export class UsersComponent {
  @Input() products!: IProducts[]
}
