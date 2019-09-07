import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
declare const responsiveVoice;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  // @ts-ignore
  @ViewChild('recipe') recipes: ElementRef;
  // @ts-ignore
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;
  check = false;
  dName: any;

  calories: any;
  weight: any;

  constructor(private router: Router, private http: HttpClient) {
    console.log('name', localStorage.getItem('email'));
    this.dName = localStorage.getItem('name');
  }

  ngOnInit() {
    this.check = true;
    console.log('hello', this.dName);
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat= position.coords.latitude;
        this.currentLong= position.coords.longitude;
        console.log(position);
      });
  }

  currentuser(){
    return localStorage.getItem('current') || 'false';
  }

  logout(){
    localStorage.setItem('current', 'false');
  }

  loginr(){
    this.router.navigate(['/']);
  }

  getVenues() {
    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if(this.recipeValue !== null) {
      this.http.get('https://api.edamam.com/search?q=' + this.recipeValue + '&app_id=ede91962&app_key=022872169a77570e955d4cdafb76f8b7&from=0&to=3')
        .subscribe((data: any)=>{
          for (var i = 0; i < data.hits.length; i++) {
            this.recipeList[i] = {
              "name": data.hits[i].recipe.label,
              "url": data.hits[i].recipe.url,
              "icon": data.hits[i].recipe.image
            };
          }
        });
    }



    if (this.placeValue != null && this.placeValue != "" && this.recipeValue != null && this.recipeValue != "") {
      this.http.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=3PPNMTIKJJNDVYPFOBGSHHV2PR5A2P05PYHXDN2MKSKTTBSX" +
        "&client_secret=0QPHT0F5RS043F4TB4KKPQSHKSAXKE5ZNOYGB5KL2MBDYAG4" +
        '&v=20160215&limit=5' +
        "&near=" + this.placeValue +
        "&query=" + this.recipeValue)
        .subscribe((data: any) => {
          for (var i = 0; i < data.response.venues.length; i++) {
            this.venueList[i] = {
              "name": data.response.venues[i].name,
              "id": data.response.venues[i].id,
              "location": data.response.venues[i].location
            };
            console.log(this.venueList[i]);

          }

        })
    }

    if(this.recipeValue !== null) {
      // tslint:disable-next-line:max-line-length
      this.http.get('https://api.nutritionix.com/v1_1/search/q=' + this.recipeValue + '?results=0:1&cal_min=1420&cal_max=1430&brand_id=513fcc648110a4cafb90ca5e&fields=*&appId=4d388932&appKey=57687448b8cf70730987ccdd56cc731d')
        .subscribe((data: any) => {
          this.calories = data.hits[0].fields.nf_calories;
          this.weight = data.hits[0].fields.nf_serving_weight_grams;
          console.log(data);
          // tslint:disable-next-line:max-line-length
          responsiveVoice.speak(this.recipeValue + ' contains ' + this.calories + ' calories in ' + this.weight + ' grams', 'UK English Male');
        });
    }



  }

}
