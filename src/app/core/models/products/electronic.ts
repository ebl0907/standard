import { Product } from './product';

export class Electronic extends Product {
  voltage: number;
  connectionType: string;
  haveBatery: boolean;

  constructor(name: string, barcode: string, stock: number, voltage: number, connectionType: string, bateria: boolean, id: number) {
    super(name, barcode, stock, id);
    this.voltage = voltage;
    this.connectionType = connectionType;
    this.haveBatery = bateria;
  }
}