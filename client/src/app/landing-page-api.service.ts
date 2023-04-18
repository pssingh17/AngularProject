import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


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
  getSearchData(term : string ) {
    let url = "/api/search"
    let body = new URLSearchParams();
    body.set('searchString', term);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    console.log(body.get('searchString'), options.headers);
    return this.http.post(url, body.toString(), options);
  }


}
