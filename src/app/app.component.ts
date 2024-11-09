import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'ClientApp';
  hellowWorld: string = 'Hello World';
  clicked: number = 0;
  doubleClicked: number = 0;

  willShowBlock: boolean = true;

  valuesToLoop: number[] = [1, 3, 5, 7, 9, 11];
  contextMenuInfo: any = {
    willContextMenuShow: false,
    pageX: 0,
    pageY: 0,
  };

  incrementClicked = () => {
    this.clicked += 1;
  };

  incrementDoubleClicked = () => {
    this.doubleClicked += 1;
  };

  toggleContextMenu = (showContextMenu: boolean, event: MouseEvent) => {
    console.log(event);
    this.contextMenuInfo.pageX = event.pageX;
    this.contextMenuInfo.pageY = event.pageY;
    this.contextMenuInfo.willContextMenuShow = showContextMenu;
  };
}
