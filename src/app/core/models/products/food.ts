import { Product } from "./product";

export class Food extends Product {
  expirationDate: Date;
  calories: number;

  constructor(name: string, barcode: string, stock: number, expirationDate: Date, calories: number, id: number) {
    super(name, barcode, stock, id);
    this.expirationDate = expirationDate;
    this.calories = calories;
  }
}
