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
  clikedGene: string = '';
  clikedNode: string = '';

  constructor() { }

  ngOnChanges() {
    this.nodeCounterMethod();
    this.countGenesReaction();
  }

  nodeCounterMethod(){
    this.nodeCounter = {};
    for (const i in this.nodes) {
      const node = this.nodes[i];
      (this.nodeCounter[node.node_type]) ? ++this.nodeCounter[node.node_type].count : this.nodeCounter[node.node_type] = {
        count: 1, nodes: []};
      this.nodeCounter[node.node_type].nodes.push(node);
    }
  }

  countGenesReaction() {
    this.genes = {};
    for (const i in this.reactions) {
      const reaction = this.reactions[i];
      for (const j in reaction.genes) {
        const gene = reaction.genes[j];
        (this.genes[gene.name]) ? ++this.genes[gene.name].count : this.genes[gene.name] = {count: 1, reactions: []};
        this.genes[gene.name].reactions.push(reaction);
      }
    }
    for(const k in this.genes) {
      const gen = this.genes[k].count;
      if(gen == 1){
        delete this.genes[k];
      }
    }
  }

  clickGeneFunction(clicked) {
    if (clicked == this.clikedGene) {
      this.clikedGene = '';
    }else{
      this.clikedGene  = clicked;
    }
  }

  clickNodeFunction(clicked) {
    if (clicked == this.clikedNode) {
      this.clikedNode = '';
    } else {
      this.clikedNode  = clicked;
    }
  }

}
