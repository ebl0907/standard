export class Mapper<T> {
    constructor(private modelClass: new (...args: any[]) => T) {}
  
    public map(data: { domain: string; message: string; result: any }): T {
      return new this.modelClass(...Object.values(data.result));
    }
  }
  