import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GridCharts';

  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;


   static itemChange(item: any, itemComponent: any) {
     console.info('itemChanged', item, itemComponent);
   }

   static itemResize(item: any, itemComponent: any) {
     console.info('itemResized', item, itemComponent);
   }

   ngOnInit() {

     this.options = {
       itemChangeCallback: AppComponent.itemChange,
       itemResizeCallback: AppComponent.itemResize,
       resizable: { enabled: true },
       draggable: {enabled: true },
     };

     this.dashboard = [
       {cols: 2, rows: 1, y: 0, x: 0},
       {cols: 2, rows: 2, y: 0, x: 2},
       {cols: 2, rows: 3, y: 0, x: 2}
     ];
   }

   changedOptions() {
    // this.options.api.optionsChanged();
   }

   removeItem(item: GridsterItem) {
     this.dashboard.splice(this.dashboard.indexOf(item), 1);
   }

   addItem() {
     this.dashboard.push({cols: 2, rows: 1, y: 0, x: 0});
   }

   salvar() {
     console.log('info dash: ', this.dashboard);

   }
}
