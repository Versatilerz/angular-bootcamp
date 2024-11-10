import { Component, HostListener } from '@angular/core';

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
    willShow: false,
    pageX: 0,
    pageY: 0,
  };

  contextClicked: boolean = false;

  tooltipInfo: any = {
    willShow: false,
    pageX: 0,
    pageY: 0,
  };

  incrementClicked = () => {
    this.clicked += 1;
  };

  incrementDoubleClicked = () => {
    this.doubleClicked += 1;
  };

  toggleContextMenu = (
    showContextMenu: boolean,
    event: MouseEvent | null = null
  ) => {
    if (event !== null) {
      event.preventDefault();
      this.contextMenuInfo.pageX = event.pageX;
      this.contextMenuInfo.pageY = event.pageY;
    }
    this.contextMenuInfo.willShow = showContextMenu;
  };

  @HostListener('document:click')
  closeContextMenu = () => {
    setTimeout(() => {
      if (!this.contextClicked) {
        this.toggleContextMenu(false);
      }
    }, 10);
  };

  contextClick = () => {
    this.contextClicked = true;
    setTimeout(() => {
      this.contextClicked = false;
    }, 20);
  };

  onMouseMove(inside: boolean, event: MouseEvent) {
    console.log(event);
    if (this.tooltipInfo.willShow !== inside) {
      this.tooltipInfo.willShow = inside;
    }

    this.tooltipInfo.pageX = event.pageX;
    this.tooltipInfo.pageY = event.pageY;
  }
}
