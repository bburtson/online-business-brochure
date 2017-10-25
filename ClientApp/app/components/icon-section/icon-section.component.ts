import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "icon-section",
  templateUrl: "./icon-section.component.html",
  styleUrls: [ "./icon-section.component.less" ]
})
export class IconSectionComponent implements OnInit {
  @Input() heading: string;
  @Input() faClasses: string;
  @Input() content: string;
  ngOnInit(): void { this.faClasses += " bg baby-blue"; }
}
