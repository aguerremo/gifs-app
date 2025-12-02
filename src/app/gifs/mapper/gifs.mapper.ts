import type { Gif } from './../interfaces/gif.interface';
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifsMapper {
   static mapperGiphyToGif(item: GiphyItem):Gif{
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

    static mapperGiphyItemstoGifArray(items: GiphyItem[]): Gif[]{
      return items.map(this.mapperGiphyToGif);

  }
}
