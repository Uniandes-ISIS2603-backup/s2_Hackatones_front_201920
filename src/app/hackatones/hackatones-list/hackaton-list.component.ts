import { Component, OnInit } from '@angular/core';
import{ Hackaton }from '../hackatones';
import { HackatonService } from '../hackatones.service';

@Component({
  selector: 'app-hackatones-list',
  templateUrl: './hackaton-list.component.html',
  styleUrls: ['./hackatones-list.component.css']
})
export class HackatonesListComponent implements OnInit {

  /**
     * Constructor for the component
     * @param hackatonService The author's services provider
     */
    constructor(private hackatonService: HackatonService) { }

  ngOnInit() {
    this.getHackatones();
  }
  getHackatones(): void {
        this.hackatonService.getHackatones.subscribe(hackatones => this.hackatones = hackatones);
    }
  
  hackatones: Hackaton[] ;

}