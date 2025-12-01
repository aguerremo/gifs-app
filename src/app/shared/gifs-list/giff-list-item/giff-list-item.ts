import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import Trending from 'src/app/gifs/pages/trending/trending';
import { GifsList } from '../gifs-list';

@Component({
  selector: 'app-giff-list-item',
  imports: [],
  templateUrl: './giff-list-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiffListItem {



  imageUrl = input.required<string>()


}
