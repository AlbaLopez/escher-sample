import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  @Output() onFileUpload = new EventEmitter<File>();
  @ViewChild('inputFile')

  inputFileVariable: any;
  fileTypes: String = '.json';

  constructor() {
  }

  fileChange(event) {
    if (event.target.files) {
      if(event.target.files[0].name.includes('.json')){ // Check extension of file
      let fileList: FileList = event.target.files;
      let file: File = fileList[0];
      this.onFileUpload.emit(file);
      }else{  // Alert 
        this.inputFileVariable.nativeElement.value = "";
        alert('File extension is not valid, try again with .json')
      }
    }
  }
}
