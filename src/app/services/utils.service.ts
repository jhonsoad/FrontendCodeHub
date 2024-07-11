import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  adicionaLinkTag(rel: string, href: string, crossorigin?: string, type?:string): void {
    if (typeof document !== 'undefined') {
      const link: HTMLLinkElement = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (crossorigin) {
        link.crossOrigin = crossorigin;
      }
      if (type) {
        link.type = type;
      }
      document.head.appendChild(link);
    }
  }
}
