import { Component, Input, ElementRef , OnChanges} from '@angular/core';
import { Builder } from 'escher-vis';


@Component({
  selector: 'app-escher',
  templateUrl: './escher.component.html',
  styleUrls: ['./escher.component.css']
})
export class EscherComponent implements OnChanges {

  @Input() data: any;
  title: string = '';
  description: string = '';
  builder: any;
  colorChanged: boolean = false;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnChanges(changesObj) {
    if (changesObj.data.currentValue && changesObj.data.currentValue !== changesObj.data.previousValue) {
      this.title = this.data[0].map_name;
      this.description = this.data[0].map_description;
      Builder(this.data, null, null, this.elementRef.nativeElement.getElementsByClassName('escher')[0], {
        menu: 'zoom',
        use_3d_transform: true,
        enable_editing: false,
        enable_keys: false,
      });
    }
  }
  switchColor () {
   if(this.colorChanged){
      this.colorChanged = false;
   }else{
     this.colorChanged = true;
   }   
  }
}
