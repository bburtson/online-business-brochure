import { Component, OnInit } from "@angular/core";
import { ViewDataService } from "../../services/view-data/view-data.service";
import { RouterModule, Router, NavigationEnd } from "@angular/router";

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
    providers: [ViewDataService, RouterModule]
})
export class AppComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit(): void {
        if (typeof window !== "undefined") {
            this.router.events.subscribe((evt) => {
                if (!(evt instanceof NavigationEnd)) { return; }
                window.scrollTo(0, 0);
            });

            this.precacheImages();
        }

    }
    private precacheImages(): void {
        const sources:string[] = `img/cockapoo_about.jpg,
                                  img/cockapoo_about_draft.jpg,
                                  img/dog_cheesing_mobile.jpg,
                                  img/dog_cheesing.jpg,
                                  img/molly_service_dog.jpg,
                                  img/service_dog_2.jpg,
                                  img/sleeping_duo_large.jpeg,
                                  img/sleeping_pup_mobile.jpg,
                                  `.split(",");

        for(let src of sources) {
            let img: any = new Image();
            img.src = src;
        }

    }
}

