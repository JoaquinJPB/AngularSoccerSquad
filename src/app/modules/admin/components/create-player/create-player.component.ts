import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AdminServicesService } from '../../admin-services/admin-services.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  constructor(
    private adminService: AdminServicesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  
  }

  goBack(): void {
    this.location.back();
  }

  create(name: string, position: string, nationality: string, birth: string,): void {
    let player = {
      name: name,
      position: position,
      nationality: nationality,
      birth: birth,
    }
    if(player) {
      this.adminService.createPlayer(player)
        .subscribe(() => this.goBack())
    }
  }

}
