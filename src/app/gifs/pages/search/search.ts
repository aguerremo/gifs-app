import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifsList } from "src/app/shared/gifs-list/gifs-list";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search',
  imports: [GifsList],
  templateUrl: './search.html',
})
export default class Search {

  gifService = inject(GifService)
  searchGif = signal<Gif[]>([])



  onSearch(query: string){

    this.gifService.searchGifs(query)
    .subscribe((resp) => {
      this.searchGif.set(resp)
    })
    console.log({query})
  }

}
