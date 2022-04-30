import { Component, OnInit } from '@angular/core';

import { AdminServicesService } from '../../admin-services/admin-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  players: any = {};

  constructor(private adminService: AdminServicesService) { }

  ngOnInit(): void {
    this.adminService.getAlllPlayers().subscribe(players => {
      this.players = players;
      console.log(this.players);
    })
  }

}
