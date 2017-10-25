import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { ViewDataService } from "../../services/view-data/view-data.service";

@Component({
    selector: "stretch-media",
    templateUrl: "./stretch-media.component.html",
    styleUrls: ["./stretch-media.component.less"]
})
export class StretchMediaComponent implements OnInit {
    private _player: HTMLVideoElement;
    @ViewChild("videoPlayer")
    set player(value: ElementRef) { this._player = value.nativeElement; }
    @Input() vidSrc: string;
    @Input() vidFallback: string;
    @Input() imgSrc: string;

    constructor(public viewData: ViewDataService) { }

    ngOnInit(): void {
        let shouldRender: boolean = this.viewData.innerWidth >= 768 && typeof window !== undefined;
        if (shouldRender) {
            this.displayVideo();
        }
    }

    private displayVideo(): void {
        if (this.vidSrc.length > 0) {
            this._player.setAttribute("src", this.vidSrc);
            this._player.load();
            this._player.play();
        }
    }
}
