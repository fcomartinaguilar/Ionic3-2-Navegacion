import { Component } from "@angular/core";
import { Platform, MenuController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { TabsPage } from '../pages/tabs/tabs';
import { Ajustes2Page } from '../pages/ajustes2/ajustes2';

@Component({
  templateUrl: "app.html"
})
export class MyApp {

  rootPage: any = TabsPage;
  tabs: any = TabsPage;
  ajustes2: any = Ajustes2Page;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirPagina(pagina: any) {
    this.rootPage = pagina;
    this.menuCtrl.close();
  }
}
