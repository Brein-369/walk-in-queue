import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'
import { VisitorService } from '../services/visitor.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {
  
  customerData = new Customer()

  constructor(private visitorService: VisitorService, private router: Router) {
  }
  
  ngOnInit(): void {
  } 

  onSubmit() {
    // setting the date time when submitting
    const date = new Date()
    const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
    const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
    const seconds = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
    const time = `${hours}:${minutes}:${seconds}`
    const datenum = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    this.customerData.date = `${datenum} ${time}`
    console.log(this.customerData);

    //caching to local storage
    let cacheData = {
      key : "Visitors",
      data : this.customerData
    }
    const queueNumber = this.visitorService.addVisitor(cacheData)
    
    this.router.navigate(
      ['/request-queue-number'],
      {
        queryParams:{
          queueNumber: queueNumber,
          date: datenum,
          time: time
        }
      }
    )
  }
}
