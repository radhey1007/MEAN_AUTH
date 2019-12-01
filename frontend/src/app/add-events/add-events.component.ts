import { UploadDialogComponent } from './../upload-dialog/upload-dialog.component';
import { EventsService } from './../services/events.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss']
})
export class AddEventsComponent implements OnInit {

  constructor(public dialog: MatDialog, public eventService:EventsService) { }

  ngOnInit() {
  }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '50%',
      height: '50%',
    })
  }
}
