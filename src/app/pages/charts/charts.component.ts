import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  marketPrices: any = null;

  constructor(private bitcoinService: BitcoinService) {}

  async ngOnInit(): Promise<void> {
    this.marketPrices = await this.bitcoinService.getMarketPrice().toPromise();
    this.lineChartData = [
      {
        data: [...this.marketPrices.map((price: any) => price.y)],
        label: '$',
      },
    ];
    this.lineChartLabels = [
      ...this.marketPrices.map((price: any) =>
        new Date(price.x * 1000).toLocaleDateString('en-GB')
      ),
    ];
  }
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: any = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,231,0,0.3)',
    },
  ];
  lineChartLegend = false;
  lineChartType = 'line';
  lineChartPlugins: any = [];
}
