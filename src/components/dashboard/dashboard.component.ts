import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data: any;
  nodes: any;
  reactions: any;

  constructor() { }

  fileUploaded(file: File): void {
    const fileReader = new FileReader(); // New instance fileReader
    fileReader.onload = () => {  // Called when a read operation successfully completes
        this.data = JSON.parse(fileReader.result);
        this.nodes = this.data[1].nodes;
        this.reactions = this.data[1].reactions;
    };
    fileReader.readAsText(file); // For stored the file in this.data after the 'load' event fires
  }

}
