import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  nodes: any;
  constructor() { }

  ngOnInit() {
  }
  fileUploaded(file: File): void {
    const fileReader = new FileReader(); // New instance fileReader
    fileReader.onload = () => {  // Called when a read operation successfully completes
        this.data = JSON.parse(fileReader.result);
        this.nodes = this.data[1].nodes;
    };
    fileReader.readAsText(file); // For stored the file in this.data after the 'load' event fires
  }

}
