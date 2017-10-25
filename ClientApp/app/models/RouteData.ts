export class RouteData {
    public title: string;
    public path = "/";

    constructor(title: string, path: string) {
        this.title = title;
        this.path += path;
    }
}

export const ALLROUTES: Array<RouteData> = [
    new RouteData("Home", "home"),
    new RouteData("Services", "product"),
    new RouteData("Gallery", "gallery"),
    new RouteData("About", "about")
];
