import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class ViewDataService {
    public readonly innerHeight: number;
    public readonly innerWidth: number;
    public onScrollY: EventEmitter<number>;

    constructor() {
        if (typeof window !== "undefined") {
            let h: number = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;

            let w: number = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

            this.innerHeight = h;
            this.innerWidth = w;
            this.onScrollY = new EventEmitter<number>();
            window.onscroll = () => { this.onScrollY.emit(window.scrollY); };
        }
    }
}
