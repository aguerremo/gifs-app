import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeader } from "../../components/gifs-side-menu/gifs-side-menu-header/gifs-side-menu-header";
import { GifsSideMenuOptions } from "../../components/gifs-side-menu/gifs-side-menu-options/gifs-side-menu-options";
import { GifsSideMenu } from "../../components/gifs-side-menu/gifs-side-menu";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, GifsSideMenuHeader, GifsSideMenuOptions, GifsSideMenu],
  templateUrl: './dashboard.html',
})
export default class Dashboard { }
