import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new card add item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(505, 'Мстители', 200, 2022, "Россия", "Anengers Assemble!", "Фантастика, боевик, фэнтези, приключения...", 137));

  expect(cart.items).toEqual([{id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225},
  {id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900}, {country: "Россия", genre: "Фантастика, боевик, фэнтези, приключения...",
   id: 505, name: "Мстители", price: 200, slogan: "Anengers Assemble!", time: 137, year: 2022}]);
});

test('new card amound', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(505, 'Мстители', 200, 2022, "Россия", "Anengers Assemble!", "Фантастика, боевик, фэнтези, приключения...", 137));
  
  expect(cart.amount()).toBe(3100);
});

test('new card amountDiscounted', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(505, 'Мстители', 200, 2022, "Россия", "Anengers Assemble!", "Фантастика, боевик, фэнтези, приключения...", 137));
  
  expect(cart.amountDiscounted(1000)).toBe(2100);
});

test('new card deletingItem', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(505, 'Мстители', 200, 2022, "Россия", "Anengers Assemble!", "Фантастика, боевик, фэнтези, приключения...", 137));
  cart.deletingItem(1008);

  expect(cart.items).toEqual([{id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225},
   {country: "Россия", genre: "Фантастика, боевик, фэнтези, приключения...",
   id: 505, name: "Мстители", price: 200, slogan: "Anengers Assemble!", time: 137, year: 2022}]);
});
