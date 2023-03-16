import {Component} from "@angular/core";
import {routeMapping} from "../../utils/routeMapping";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.less']
})
export class AdminLayoutComponent {
  isCollapsed = false;
  readonly routeMapping = routeMapping;
  home = routeMapping.home;

  constructor() { }


}
