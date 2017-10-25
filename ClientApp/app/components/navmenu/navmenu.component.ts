import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ViewDataService } from "../../services/view-data/view-data.service";
import { RouterModule, Router } from "@angular/router";
import { ALLROUTES } from "../../models/RouteData";

@Component({
    selector: "nav-menu",
    templateUrl: "./navmenu.component.html",
    styleUrls: ["./navmenu.component.less"]
})
export class NavMenuComponent implements OnInit {

    private menuIconClasses: DOMTokenList;
    private navBarClasses: DOMTokenList;
    @ViewChild("menuIcon") menuIcon: ElementRef;
    @ViewChild("navLink") navLink: ElementRef;
    @ViewChild("navBar") navBar: ElementRef;
    get menuOpen(): boolean { return this.navBarClasses.contains("menu-open"); }
    set menuOpen(value: boolean) {
        value ? this.navBarClasses.add("menu-open") : this.navBarClasses.remove("menu-open");
    }
    public menuOptions = ALLROUTES;

    constructor(private viewData: ViewDataService, private router: Router) { }

    ngOnInit(): void {
        this.viewData.onScrollY.subscribe((y: number) => {
            y > 100 ?
                this.navBarClasses.add("idle-collapsed") :
                this.navBarClasses.remove("idle-collapsed");
        });
        this.menuIconClasses = this.menuIcon.nativeElement.classList;
        this.navBarClasses = this.navBar.nativeElement.classList;
    }

    public toggleMenu(): void { this.switchIcon(); this.menuOpen = !this.menuOpen; }

    private switchIcon(): void {
        if (this.menuOpen) {
            this.menuIconClasses.remove("fa-times");
            this.menuIconClasses.add("fa-bars");
        } else {
            this.menuIconClasses.remove("fa-bars");
            this.menuIconClasses.add("fa-times");
        }
    }

    public stripeSelections(index: number): string {
        return index % 2 === 0 ? "bg crimson " + "lighten" : "bg crimson";
    }
}
