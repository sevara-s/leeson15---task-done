class Product {
  id;
  name;
  price;
  stock;
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  getDetails() {
    return `id :${this.id} , name: ${this.name} price: ${this.price} stock: ${this.price}`;
  }

  updateStock(quantity) {
    this.stock -= quantity;
  }
}

class OrderItem {
  product;
  quantity;
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  calculatePrice() {
    return `Total amount:${this.product.price * this.quantity}`;
  }
}

class Order {
  id;
  items;
  constructor(id) {
    this.id = id;
    this.items = [];
  }

  addItem(orderItem) {
    this.items.push(orderItem);
  }

  calculateTotal() {
    let sum = 0;
    return `Total amount:${sum+=item.calculatePrice()}`;
  }
}

class Shop {
  pruducts;
  orders;
  constructor() {
    this.products = [];
    this.orders = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  listProducts() {
    return this.products.map((product) => product.getDetails());
  }

  createOrder() {
    const newOrder = new Order(this.orders.length + 1);
    this.orders.push(newOrder);
    return newOrder;
  }
}

const shop = new Shop();

let p1 = new Product(1, "Pizza", 12, 1);
let p2 = new Product(2, "Phone", 800, 20);
shop.addProduct(p1);
shop.addProduct(p2);
console.log(shop.listProducts());
let order1 = shop.createOrder();
