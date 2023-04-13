import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class LandingPageApiService {

  constructor(private http: HttpClient) {

  }
  getData() {
    let url = "/api/getAll"
    return this.http.post(url, {});
  }

  getTrendingPageData() {
    let url = "/api/Popular"
    return this.http.post(url, {});
  }

  getTopPicksData() {
    let url = "/api/topPicks"
    return this.http.post(url, {});
  }

  getTopRatedData() {
    let url = "/api/topRated"
    return this.http.post(url, {});
  }

}
