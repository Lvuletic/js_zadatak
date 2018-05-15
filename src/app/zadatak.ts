export class Zadatak {
  _id: string;
  ime: string;
  opis: string;
  kreiran: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
