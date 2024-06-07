import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TempItem, TempData } from './TempData';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

@Component({
  selector: 'app-chart-temp',
  templateUrl: './chart-temp.component.html',
  styleUrl: './chart-temp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartTempComponent {

  @ViewChild("legend", { static: true }) 
  private legend: IgxLegendComponent | undefined;
  @ViewChild("chart", { static: true })
  private chart: IgxCategoryChartComponent | undefined;
  private data: TempData | undefined;
  public get tempData(): TempData {
    if (this.data == null)
    {
      this.data = new TempData();
    }
    return this.data;
  }

  public constructor(private _detector: ChangeDetectorRef)
  {
  }

  public ngAfterViewInit(): void
  {
  }

}
