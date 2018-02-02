import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-escher-statistics',
  templateUrl: './escher-statistics.component.html',
  styleUrls: ['./escher-statistics.component.css']
})
export class EscherStatisticsComponent implements OnInit {

  @Input() nodes: any;
  statistics: any = [];
  nodeCounter: any = [];
  constructor() { }

  ngOnInit() {
    this.getStatistics();
  }
  getStatistics() {
    const nodes = this.nodeCounterMethod();
    const keys = Object.keys(nodes);
    for(const i in keys) {
      const key = keys[i];
      this.statistics.push(nodes[key]);
    }
  }

  nodeCounterMethod(){
    for(const i in this.nodes){
      const node = this.nodes[i];

      if (!this.nodeCounter[node.node_type]) {
        this.nodeCounter[node.node_type] = {
          name: node.node_type,
          count: 0,
          nodesCategory: []
        };
      }

      this.nodeCounter[node.node_type].count++;
      this.nodeCounter[node.node_type].nodesCategory.push(node);
    }
    return this.nodeCounter;
  }

}
