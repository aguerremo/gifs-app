import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GifsList } from "src/app/shared/gifs-list/gifs-list";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search',
  imports: [GifsList, FormsModule],
  templateUrl: './search.html',
})
export default class Search {

  gifService = inject(GifService)
  searchGif = signal<Gif[]>([])

  searchValue = ''


  onSearch(query: string){
    this.gifService.searchGifs(query)
      .subscribe((resp) => {
        this.searchGif.set(resp)
      })

    this.searchValue = ''

    console.log({query})
  }

}
