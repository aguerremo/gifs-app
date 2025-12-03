import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'gifs-side-menu-header',
  imports: [RouterLink],
  templateUrl: './gifs-side-menu-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuHeader {

  envs = environment
}
