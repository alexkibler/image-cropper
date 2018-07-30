import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  logs = [];
  file: File = null;
  clickedBox: number;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropperReady = false;

  public config = {
    ImageName: 'Some image',
    AspectRatios: ["1:1"],
    File: null,
    ImageType: 'image/jpeg'
  }

  fileChange(event) {

    this.imageChangedEvent = event;
  }
  public uploadImage(id: number) {
    let element: HTMLElement = document.getElementById('file') as HTMLElement;
    this.clickedBox = id;
    element.click();
  }

  imageLoaded() {
    this.cropperReady = true;
  }

  public close() {
    // Fired when the editor is closed.
  }


  imageCroppedBase64(image: string) {
    this.croppedImage = image;
    let element: HTMLElement = document.getElementById('image' + this.clickedBox) as HTMLElement;
    element.setAttribute('style', 'content:url(' + image + ')');
  }
}
