import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeader } from "../../components/gifs-side-menu-header/gifs-side-menu-header";
import { GifsSideMenuOptions } from "../../components/gifs-side-menu-options/gifs-side-menu-options";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, GifsSideMenuHeader, GifsSideMenuOptions],
  templateUrl: './dashboard.html',
})
export default class Dashboard { }
