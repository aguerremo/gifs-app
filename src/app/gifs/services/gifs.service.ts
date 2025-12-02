import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { RouteConfigLoadEnd } from '@angular/router';
import { Gif } from '../interfaces/gif.interface';
import { GifsMapper } from '../mapper/gifs.mapper';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([])

  constructor() {
    this.loadTrendingGifs()
  }


  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: 20,
      }
    })
    .subscribe((resp) => {
      const gifs = GifsMapper.mapperGiphyItemstoGifArray(resp.data);
      this.trendingGifs.set(gifs);
      console.log({gifs});
    })
  }

}
