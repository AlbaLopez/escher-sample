import {Component, Output, EventEmitter, ViewChild} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  @Output() onFileUpload = new EventEmitter<File>();
  @ViewChild('inputFile')

  inputFileVariable: any;
  fileType: String = '.json';
  fileUploaded: boolean = false;

  constructor() {
  }

  fileChange(event) {
    if (event.target.files) {
      const fileList: FileList = event.target.files;
      const file: File = fileList[0];
      this.fileUploaded = true;
      this.onFileUpload.emit(file);
    }
  }
}
