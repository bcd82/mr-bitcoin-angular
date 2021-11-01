import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

const RATE_URL = 'https://blockchain.info/tobtc?currency=USD&value=1';
const PRICE_URL =
  'https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  getRate() {
    const rate = loadFromStorage('rate');
    if (rate) return of(rate);
    return this.http.get<number>(RATE_URL).pipe(
      tap((res: number) => saveToStorage('rate', res)),
      map((res) => res)
    );
  }

  getMarketPrice() {
    let data = loadFromStorage('marketPrice');
    if (data?.values) return of(data.values);
    return this.http.get<number>(PRICE_URL).pipe(
      tap((res: any) => saveToStorage('marketPrice', res)),
      map((res) => res.values)
    );
  }
}
function saveToStorage(key: string, val: number |[]) {
  localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key: string) {
  var val = localStorage.getItem(key);
  return JSON.parse(val);
}
