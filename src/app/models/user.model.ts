import { Contact } from "./contact.model";
import { Move } from "./move";

export class User {
  constructor(
    public moves?: any[],
    public _id?: string,
    public username: string = '',
    public password: string = '',
    public balance: number = 0,
  ) {}
  setId?() {
    // Implement your own set Id
    this._id = `id-${Date.now() % 1000}`;
  }
}
