import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {


  baseurl:"https://localhost:5005/api/";


  constructor() { }

  ngOnInit(): void {
  }

}
