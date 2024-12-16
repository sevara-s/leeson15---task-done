// class Home {
//   constructor(width, height, people, color) {
//     this.width = width;
//     this.height = height;
//     this.people = people;
//     this.color = color;
//   }
//   about() {
//     return `Uyning eni ${this.width / 100} m va uning bo'yi ${
//       this.height / 100
//     }m rangi esa ${this.color === "black" ? "qora" : "qizil"}`;
//   }
//   kv() {
//     const h = this.height / 100;
//     const w = this.width / 100;
//     return `${w * h}kv`;
//   }
// }

// const home1 = new Home(220, 3000, 5, "black");
// const home2 = new Home(500, 4000, 8, "red");

// console.log(home1.about());
// console.log(home1.kv());

// class Uchaska extends Home {
//   constructor(width, height, people, color, garden, price) {
//     super(width, height, people, color);
//     this.garden = garden;
//     this.price = price;
//   }
//   priceSum() {
//     let sum = 129000;
//     return `${Math.round(this.price * sum)} so'm`;
//   }
//   about() {
//     return (
//       super.about() + `Uy narxi ${this.price()} va uning bog'i ${this.garden}`
//     );
//   }
// }
// const uchaska1 = new Uchaska(240, 300, 4, "red", 2, 400000);
// console.log(uchaska1);
// console.log(home1 instanceof Home);

// // static

// // Math.PI

// class MathObj {
//   constructor(x) {
//     this.x = x;
//   }
//   static PI = 22;
//   static pow(a, b) {
//     return a ** b;
//   }
// }
// const math1 = new MathObj(22);
// console.log(MathObj.pow(5, 2));
// class User{
//     username;
//     #password;
//     constructor(username,password){
//         this.username = username;
//         this.#password = password;
//     }
//     set ChangePassword([password,newPassword]){
//         if(password === this.#password){
//             this.#password = newPassword;
//             console.log(`Password o'zgartirildi . yangi parolingiz: ${this.password}`);
//         }else{
//             console.log("Parol xato");
//         }
//     }


//     set getUser([username,password]){
//         if(username === this.username && password === this.#password){
//             console.log("Xush kelibsiz");
//         }else{
//             console.log("Login yoki parol xato")
//         }
//     }
// }
// const user1 = new User("olimjo0101","12345olimjon");


class Bank{
    owner;
    initialBalance = 0;
    constructor(owner,initialBalance){
        this.owner = owner;
        this.initialBalance = initialBalance;
    }

    addInitialBalance(newSum){
        this.initialBalance+=newSum;
        return `Sizning balansingiz ${newSum} so'mga to'ldirildi hozirgi balansingiz ${this.initialBalance} so'm`;
    }
    useInitialBalance(useSum){
        if(useSum > this.initialBalance){
            return 'Balansingiz yetarlimas';
        }
        this.initialBalance-=newSum;
        return `Sizning balansingiz ${newSum} so'mga kamaydi hozirgi balansingiz ${this.initialBalance} so'm`;
    }
}
const bank1 = new Bank("Karim",10000000);
console.log(bank1.addInitialBalance(8999900));