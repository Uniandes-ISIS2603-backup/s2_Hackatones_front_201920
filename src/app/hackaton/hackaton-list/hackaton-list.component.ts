import { Component, OnInit } from '@angular/core';
import { Hackaton} from '../hackaton';
import { Router } from '@angular/router';
import { HackatonService } from '../hackaton.service';



@Component({
  selector: 'app-hackaton-list',
  templateUrl: './hackaton-list.component.html',
  styleUrls: ['./hackaton-list.component.css']
})
export class HackatonListComponent implements OnInit {
/**
   * Constructor for the component
   * @param hackatonService The author's services provider
   */
  constructor(private hackatonService: HackatonService, private router: Router) { 
      this.hackatones = [];
  }

  /**
   * The list of hackatones
   */
  hackatones: Hackaton[];

  /**
   * Asks the service to update the list of hackatones
   */
  getHackatons(): void {
    this.hackatonService.getHackaton().subscribe(hackatons => this.hackatones = hackatons);
  }

  

  
  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getHackatons();
  }

}