import { Component } from '@angular/core';
import { LandingPageApiService } from 'src/app/landing-page-api.service';

@Component({
  selector: 'app-advance-filter',
  templateUrl: './advance-filter.component.html',
  styleUrls: ['./advance-filter.component.css']
})
export class AdvanceFilterComponent {

  advanceFilterData

  constructor(private data: LandingPageApiService) {
    this.data.getData().subscribe(data => {
      console.log(data)
      this.advanceFilterData = data
    })
  }

}
