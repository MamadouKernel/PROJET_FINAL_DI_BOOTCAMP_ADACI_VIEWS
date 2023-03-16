import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.less"],
})
export class WelcomeComponent implements OnInit {


  listOfData: Array<any> = [];

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.listOfData.push({
        key: index,
        zone: (index * 4.2).toFixed(),
        quantity: index * 3.6,
        typeDechet:( index * 6.3).toFixed(),
        deleguetAt: "Jean de la tour",
        name: "New York",
      });
    }
  }


}
