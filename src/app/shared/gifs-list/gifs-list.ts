import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GiffListItem } from "./giff-list-item/giff-list-item";

@Component({
  selector: 'app-gifs-list',
  imports: [GiffListItem],
  templateUrl: './gifs-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsList {

  gifs = input.required<string[]>();
  
 }
