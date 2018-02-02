import {Component, Input, OnChanges, OnInit, Pipe, PipeTransform} from '@angular/core';



@Component({
  selector: 'app-escher-statistics',
  templateUrl: './escher-statistics.component.html',
  styleUrls: ['./escher-statistics.component.css']
})
export class EscherStatisticsComponent implements OnChanges {

  @Input() nodes: any;
  @Input() reactions: any;
  nodeCounter: any = {};
  genes: any = {};
  constructor() { }

  ngOnChanges() {
    this.nodeCounterMethod();
    this.countGenesReaction();
  }

  nodeCounterMethod(){
    this.nodeCounter = {};
    for (const i in this.nodes) {
      const node = this.nodes[i];
      (this.nodeCounter[node.node_type]) ? ++this.nodeCounter[node.node_type] : this.nodeCounter[node.node_type] = 1;
    }
  }

  countGenesReaction() {
    this.genes = {};
    for (const i in this.reactions) {
      const reaction = this.reactions[i];
      for (const j in reaction.genes) {
        const gene = reaction.genes[j];
        (this.genes[gene.name]) ? ++this.genes[gene.name] : this.genes[gene.name] = 1;
      }
    }
    for(const k in this.genes) {
      const gen = this.genes[k];
      console.log(gen);
      if(gen == 1){
        delete this.genes[k];
      }
    }
  }

}
