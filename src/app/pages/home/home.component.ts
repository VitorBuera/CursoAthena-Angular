import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Peixes } from '../../models/peixes/peixes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  peixes: any[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.peixes = JSON.parse(localStorage.getItem("Peixes") || "[]")
    this.getPeixes();
  }

  getPeixes() {
    if (this.peixes.length > 0)
      return

    this.apiService.getPeixes().subscribe((data:any) =>{
      localStorage.setItem("Peixes", JSON.stringify(data))
     });
     setTimeout(() => {
      this.peixes = JSON.parse(localStorage.getItem("Peixes") || "[]");
     }, 1);
  }

}
