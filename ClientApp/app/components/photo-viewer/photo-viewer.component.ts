import { Component } from "@angular/core";

@Component({
    selector: "photo-viewer",
    templateUrl: "./photo-viewer.component.html",
    styleUrls: ["./photo-viewer.component.less"]
})
export class PhotoViewerComponent {
    /*
    Hard coded filename strings will be used temporarily
    until a content management system is implemented for PawPals Client.
    She needs a remedial way to upload and change pictures easily from her mobile device
    this was her biggest complaint about her prior consulting service. (Not changing pictures promplty),
    we are not offering continued support.
    */
    public readonly directory = "shots/";
    public readonly fileNames = [
        "bella_01.jpg",
        "buster_corky_01.jpg",
        "sadie_01.jpg",
        "tux_before_01.jpg",
        "tux_after_01.jpg",
        "unknown01_01.jpg"
    ];
    public imageSources = new Array<string>();

    constructor() {
        this.fileNames.forEach(file => this.imageSources.push(`${this.directory}/${file}`));
    }

    initActiveClass(carouselItem: HTMLElement, index: any): string | undefined {
        if (typeof carouselItem.dataset !== "undefined") {
            carouselItem.dataset.slideTo = index;
            return index === 0 ? "active" : "";
        }
    }
}
