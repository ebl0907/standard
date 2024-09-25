import { Id } from "../id";

export class Product extends Id{
    name: string;
    barcode: string;
    stock: number;
  
    constructor(name: string, barcode: string, stock: number, id: number) {
      super(id);
      this.name = name;
      this.barcode = barcode;
      this.stock = stock;
    }
  }