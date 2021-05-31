import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

  constructor(public title: string, public info: string) { }

  ngOnInit(): void {
  }

}
