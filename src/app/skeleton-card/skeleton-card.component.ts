import { Component } from '@angular/core';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { CardModule } from '@progress/kendo-angular-layout';

@Component({
  selector: 'skeleton-card',
  standalone: true,
  imports: [IndicatorsModule, CardModule],
  templateUrl: './skeleton-card.component.html',
  styleUrl: './skeleton-card.component.scss'
})
export class SkeletonCardComponent {

}
