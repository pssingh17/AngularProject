import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingPageApiService } from 'src/app/landing-page-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchData;
  placeId;
  searchTerm: string = '';
  
  constructor(private data: LandingPageApiService) {
    

    // this.data.getSearchData().subscribe(data => {
    //   console.log(data)
    //   this.searchData = data
    // })
    this.data.getSearchData('Private Room in Bushwick').subscribe(data => {
      console.warn(data)
      this.searchData = data;
    });

    
  }

  // onSubmit(){
  //   console.log(this.searchTerm)
  // }

  // search(){
  //   if (this.searchData && this.searchData.includes(this.searchTerm)) {
  //     this.data.getSearchData(this.searchTerm).subscribe(data => {
  //       console.log(data)
  //       this.searchData = data;
  //       console.log(this.searchTerm)
  //     });
  //   }
  // }

}