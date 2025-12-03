import { Component, computed, inject } from '@angular/core';
import { SearchHistoryItem } from "../search-history-item/search-history-item";
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { map } from 'rxjs';
import { GifService } from 'src/app/gifs/services/gifs.service';
import { GifsList } from "src/app/shared/gifs-list/gifs-list";

@Component({
  selector: 'app-search-history-page',
  imports: [GifsList],
  templateUrl: './search-history-page.html',
})
export default class SearchHistoryPage {

  gifService = inject(GifService)

  key = toSignal(inject(ActivatedRoute).params // toSignal convert any observable to signal
.pipe(
  map( (params) => params['key'])
))

  keyGifs = computed(() => {
   return this.gifService.getHistoryGifs(this.key())
  })

 }
