import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageEditor: any;

  constructor() {
    this.imageEditor = (<any>window).Lollipop.setOptions({
      path: "lollipop",
      appendTo: "body",
      gallery_icon: true,
      camera_icon: true,
      save_icon: true,
      share_icon: true,
      onSave: function (data, extension) {
        console.log(data);
      }
    });
  }
  fileChange(event) {

  }
  public uploadImage(id: number) {
    this.imageEditor.open();
  }

}
