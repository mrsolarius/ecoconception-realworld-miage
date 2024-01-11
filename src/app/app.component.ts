import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  getRandom(): string {
    return (Math.random() * 1000).toString();
  }
}
