import { Injectable } from '@angular/core';
import { Product } from '../types/products';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    {
      ref: '1',
      libelle: 'Chaussures',
      prix: 50,
    },
    {
      ref: '2',
      libelle: 'T-shirt',
      prix: 20,
    },
    {
      ref: '3',
      libelle: 'Pantalon',
      prix: 40,
    },
    {
      ref: '4',
      libelle: 'Veste',
      prix: 60,
    },
    {
      ref: '5',
      libelle: 'Chaussettes',
      prix: 10,
    },
    {
      ref: '6',
      libelle: 'Casquette',
      prix: 15,
    },
    {
      ref: '7',
      libelle: 'Echarpe',
      prix: 25,
    },
    {
      ref: '8',
      libelle: 'Gants',
      prix: 20,
    },
    {
      ref: '9',
      libelle: 'Pull',
      prix: 45,
    },
    {
      ref: '10',
      libelle: 'Jupe',
      prix: 35,
    },
  ];

  public getCatalogue(): Observable<Product[]> {
    return from([this.products]);
  }
}
