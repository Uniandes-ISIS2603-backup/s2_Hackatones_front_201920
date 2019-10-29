import { Component, OnInit } from '@angular/core';

/**
     * The list of proximas which belong to the BookStore
 */ proximas: Proxima[];

@Component({
  selector: 'app-proxima-list',
  templateUrl: './proxima-list.component.html',
  styleUrls: ['./proxima-list.component.css']
})
export class ProximaListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}