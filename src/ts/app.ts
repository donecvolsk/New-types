import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';


const cart = new Cart(); //начало покупок
//console.log(cart.items);

//добавление в корзину товаров
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(505, 'Мстители', 200, 2022, "Россия", "Anengers Assemble!", "Фантастика, боевик, фэнтези, приключения...", 137));
console.log(cart.items); //вывовд списка добавленных товаров

console.log(cart.amount()); //вывод суммы добавленных товаров
console.log(cart.amountDiscounted(1000)); //вывод суммы добавленных товаров со скидкой

cart.deletingItem(1008); //удаление товара из карзины по id
console.log(cart.items); //вывод списка оставшихся товаров

