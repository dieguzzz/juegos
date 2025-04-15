import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  data: any[] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getGames();
  }

  public getGames(): void {
    this.ApiService.getGames().subscribe( data => {
      this.data = data;
      console.log(this.data);
     });
  }

}
