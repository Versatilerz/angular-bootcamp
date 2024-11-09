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
    willContextMenuShow: false,
    pageX: 0,
    pageY: 0,
    contextClicked: false,
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
    this.contextMenuInfo.willContextMenuShow = showContextMenu;
  };

  @HostListener('document:click')
  closeContextMenu = () => {
    setTimeout(() => {
      if (!this.contextMenuInfo.contextClicked) {
        this.toggleContextMenu(false);
      }
    }, 10);
  };

  contextClick = () => {
    this.contextMenuInfo.contextClicked = true;
    setTimeout(() => {
      this.contextMenuInfo.contextClicked = false;
    }, 20);
  };
}
