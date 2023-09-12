import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  photoCover: string = "";

  @Input()
  cardTitle: string = "";

  @Input()
  Id: string = "0";

  constructor() { }

  getTitleColor(): string {
    if (this.Id === "1") {
      return "red";
    } else if (this.Id === "2") {
      return "#F1F";
    } else if (this.Id === "3") {
      return "#6b53b5ff";
    } else if (this.Id === "4") {
      return "#1d9df3";
    } else if (this.Id === "5") {
      return "red";
    } else {
      return "black";
    }
  }
}
