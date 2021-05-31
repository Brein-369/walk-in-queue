import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {
  query: any
  value: string
  title: string = 'visitor'
  queueNumber: string
  section = "A"
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params)
        this.query = params
      }
    )
    this.value = `${this.query.date} ${this.query.time}`
    this.queueNumber = 
    parseInt(this.query.queueNumber) < 100 && parseInt(this.query.queueNumber) > 9 ? `0${this.query.queueNumber}`
    :
    parseInt(this.query.queueNumber) < 10 ? `00${this.query.queueNumber}` : this.query.queueNumber
    
  }

}
