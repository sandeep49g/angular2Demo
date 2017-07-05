import { Injectable } from '@angular/core';

@Injectable()
export class GraphService {
  pieChartData: (number | string | object)[][];
  pieChartOptions;
  listOfAccounts;

  constructor() { }

  init(graphData){

    this.pieChartOptions = {
      chartType: 'PieChart',
      options: {
        height: '340',
        backgroundColor: "#dcddde",
        chartArea: { width: '100%', height: '240px', top: '5px' },
        title: 'All Accounts',
        titleTextStyle: { fontSize: 16 },
        legend: 'none',
        slices:
        graphData.reduce(
          (acc, curr, i) => {
            acc[i] = { color: curr.legend };
            return acc
          },
          { 
            0: { color: graphData[0].legend }
          }
        )
      }
    };

    //Update chart data from listOfAccounts
    this.pieChartOptions.dataTable = this.updateGraphData(graphData);

    return this.pieChartOptions;
  }

  updateGraphData(listOfAccounts){
    let pieChartData = [[
      { label: 'Name', role: 'domain' },
      { label: 'Cash %', role: 'data' }
    ]];

    listOfAccounts.forEach((account, index) => {
      let lastElement = listOfAccounts[listOfAccounts.length - 1];
      if (index < listOfAccounts.length - 1) {
        pieChartData.push([
          account.name,
          (account.cash / lastElement.cash * 100)
        ]);
      }
    });

    return pieChartData;
  }

}
