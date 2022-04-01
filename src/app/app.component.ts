import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "AluraPic";

  photos = [
    {
      url: "https://www.premierpet.com.br/wp-content/uploads/2020/10/banner-gato-3.jpg",
      description: "gata"
    },
    {
      url: "https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-03/gato-siames-sentado.jpg?itok=pUKQ_pPL", description: "gato"
    },
  ]

}
