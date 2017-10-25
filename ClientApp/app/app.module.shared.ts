import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { HomeComponent } from "./components/home/home.component";
import { StretchMediaComponent } from "./components/stretch-media/stretch-media.component";
import { ViewDataService } from "./services/view-data/view-data.service";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { IconSectionComponent } from "./components/icon-section/icon-section.component";
import { ProductComponent } from "./components/product/product.component";
import { AboutComponent } from "./components/about/about.component";
import { PhotoViewerComponent } from "./components/photo-viewer/photo-viewer.component";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        StretchMediaComponent,
        GalleryComponent,
        ProductComponent,
        AboutComponent,
        IconSectionComponent,
        PhotoViewerComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            // when adding route components dont forget to update
            // models/RouteData.ts
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: HomeComponent },
            { path: "gallery", component: GalleryComponent },
            { path: "product", component: ProductComponent },
            { path: "about", component: AboutComponent },
            { path: "**", redirectTo: "home" }
        ])
    ]
})
export class AppModuleShared { }
