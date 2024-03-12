import {Component, inject} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";
import {CardModule} from "@progress/kendo-angular-layout";
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { SkeletonCardComponent } from '../../skeleton-card/skeleton-card.component';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  region: string;
  weight: string;
  flavor_profile: string;
  grind_option: string;
  roast_level: string;
  image_url: string;
};

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CardModule,
    CurrencyPipe,
    IndicatorsModule,
    SkeletonCardComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  http = inject(HttpClient);
  products = toSignal(
    this.http.get<Product[]>('https://fake-coffee-api.vercel.app/api'),
  );
}
