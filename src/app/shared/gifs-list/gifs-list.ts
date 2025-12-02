import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GiffListItem } from "./giff-list-item/giff-list-item";
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'app-gifs-list',
  imports: [GiffListItem],
  templateUrl: './gifs-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsList {

  gifs = input.required<Gif[]>();

 }
