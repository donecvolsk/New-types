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
        const totalAmount: number = this._items.reduce((sum, currentAccount) => {
            return sum + currentAccount.price;
        }, 0)
        return totalAmount;
    }

    //вывод суммы добавленых товаров со скидкой
    amountDiscounted(discounted: number) { 
        return this.amount() - discounted;
    }

    //удаление товара из корзины
    deletingItem(id: number): void  {
        this._items = this._items.filter((n) => n.id != id);
    }
}