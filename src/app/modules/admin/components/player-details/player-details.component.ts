import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AdminServicesService } from './../../admin-services/admin-services.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
})

export class PlayerDetailsComponent implements OnInit {
  
  @Input() player?: any;

  constructor(
    private adminService: AdminServicesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDetailsPlayer();
  }

  getDetailsPlayer() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.adminService.getPlayer(id).subscribe((player) => {
      this.player = player;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.player) {
      this.adminService.updatePlayer(this.player)
        .subscribe(() => this.goBack())
    }
  }

}
