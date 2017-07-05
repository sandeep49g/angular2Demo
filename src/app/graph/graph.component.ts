import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GraphService } from '../service/graph/graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  providers: [GraphService]
})
export class GraphComponent implements OnChanges {
  pieChartOptions;

  constructor(private graphService: GraphService) { }

  @Input() graphData: Array<any>;

  ngOnChanges(changes: SimpleChanges){
    let graphData = changes['graphData'];
    
    if (graphData.firstChange){
      this.initializeGraph(graphData.currentValue);
    } else {
      this.initializeGraph(graphData.currentValue);
    }
  }

  initializeGraph (graphData){
    this.pieChartOptions = this.graphService.init(graphData);
  }

}
