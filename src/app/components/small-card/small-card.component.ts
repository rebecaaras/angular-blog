import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string = "";
  @Input()
  cardLink:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
