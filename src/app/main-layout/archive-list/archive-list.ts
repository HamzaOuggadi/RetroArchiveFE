import {Component, OnInit} from '@angular/core';
import {ArchiveService} from '../../services/archive-service';
import {Archive} from '../../models/archive';

@Component({
  selector: 'app-archive-list',
  imports: [],
  templateUrl: './archive-list.html',
  styleUrl: './archive-list.css'
})
export class ArchiveList implements OnInit {

  archives : Array<Archive> = [];

  constructor(private archiveService : ArchiveService) {

  }

  ngOnInit() {
    this.archiveService.getArchiveList().subscribe({
      next : value => {
        this.archives = value;
      },
      error: error => {
        console.error('Error fetching archive list:', error);
      }
    })
  }

}
