import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { RouteConfigLoadEnd } from '@angular/router';
import { Gif } from '../interfaces/gif.interface';
import { GifsMapper } from '../mapper/gifs.mapper';
import { map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([])
  searchHistory = signal<Record<string, Gif[]>>({})
  keySearchHistory = computed(() => Object.keys(this.searchHistory()))

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

  searchGifs(query:string) {
    return this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/search`, {
      params: {
        api_key: environment.apiKey,
        q: query,
        limit: 20,
        }
      }).pipe(
        map(({data}) => data),
        map((items) => GifsMapper.mapperGiphyItemstoGifArray(items)),

        tap((items) => {
          this.searchHistory.update((history) => ({ ...history, [query.toLowerCase()]: items }))
          console.log('Historial: ', this.searchHistory())

        })
      )
        // map((items) => GifsMapper.mapperGiphyItemstoGifArray(items)))
    //   .subscribe((resp) => {
    //   const gifs = GifsMapper.mapperGiphyItemstoGifArray(resp.data);
    //     this.searchGif.set(gifs)
    //   console.log({search: gifs});
    // })
    }
  }


