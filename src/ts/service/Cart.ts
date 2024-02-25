import Buyable from '../domain/Buyable';

export default class Cart {
    _items: Buyable[] = []; // массив с покупками

    //добавление товаров в корзину
    add(item: Buyable): void {
        this._items.push(item);
    }

    //вывод списка из корзины
    get items(): Buyable[] {
        return [...this._items]; 
    }

    //вывод суммы добавленых товаров
    amount() { 
        let result: number = 0;
        for (let i = 0; i < this._items.length; i++) {
            result += this._items[i].price;
      }
      return result;   
    }

    //вывод суммы добавленых товаров со скидкой
    amountDiscounted(discounted: number) { 
        let result: number = 0;
        for (let i = 0; i < this._items.length; i++) {
            result += this._items[i].price;
      }
      result = result - discounted;
      return result;   
    }

    deletingItem(id: number): void  {
        for (let i = 0; i < this._items.length; i++) {
            if (id === this._items[i].id) {
                this._items.splice(i, 1);
            }
        }
    }
}