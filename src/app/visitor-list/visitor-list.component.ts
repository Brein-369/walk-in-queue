import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../services/visitor.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {

  
  public allVisitors = []
  constructor(private visitorService: VisitorService) { }

  ngOnInit(): void {
    this.allVisitors = this.visitorService.getAllVisitors('Visitors').reverse()
  }

}
