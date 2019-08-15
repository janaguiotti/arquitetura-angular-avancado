import { Category } from '../../categories/shared/category.model';

export class Entry {
  constructor (
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: string,
    public date?: string,
    public paid?: boolean,
    public amount?: string,
    public categoryID?: number,
    public category?: Category
  ){}

  static types = {
    expense: 'Despesa',
    revenue: 'Receita'
  }

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pendente';
  }
}