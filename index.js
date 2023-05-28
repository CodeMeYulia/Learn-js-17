//create class Worker
class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
    console.log(this.rate * this.days)
    }
}
//create instance
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
worker.getSalary(); //выведет 310 — то есть 10*31



//код, который отвечает за отображение на сайте информации о транспорте и цене.
//массив данных
const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

//ПЕРЕМЕННЫЕ
const servicediv = document.querySelector('.servicediv');

//родительский класс TRANSPORT
  class Transport {
    constructor(options) {
        this.type = options.type;
        this.price = options.price;
        this.brand = options.brand;
    }

    getInfo() {return `${this.type} ${this.brand}`;}
    getPrice() {return `стоимость: ${this.price} руб.`;}
}

//создание дочернего класса CAR
class Car extends Transport {
    constructor(options){
        super(options)
        this.doors = options.doors
        this.image = options.image
    }
  
    getDoorsCount(){
        return this.doors
    }
};

//создание дочернего класса BIKE
class Bike extends Transport {
    constructor(options){
        super(options)
        this.maxSpeed = options.maxSpeed
        this.image = options.image
    }
   
    getMaxSpeed(){
        return this.maxSpeed
    }
    
}

//создаем классы из дата-массива
for (let i = 0; i < data.length; i++) {

        function newcar() {
          const car = new Car ({type: data[i].type, brand: data[i].brand, doors: data[i].doors, price: data[i].price, image: data[i].image,});
          createCarItem = () => {
            let card = document.createElement('div');
            card.className = 'transport__item';
            card.innerHTML = `
            <div class="item__image_container">
             <img class="item__img" src="${car.image}" alt="${car.brand}">
            </div>
            <p>тип транспорта: ${car.type}</p>
            <p>марка: ${car.brand}</p>
            <p>кол-во дверей: ${car.doors}</p>
            <p>цена: ${car.price} руб.</p>`;
            servicediv.before(card);
          };
      };

        function newbike() {
        const bike = new Bike({ type: data[i].type, brand: data[i].brand, maxSpeed: data[i].maxSpeed, price: data[i].price, image: data[i].image,});
        createBikeItem = () => {
          let card = document.createElement('div');
          card.className = 'transport__item';
          card.innerHTML = `
          <div class="item__image_container">
           <img class="item__img" src="${bike.image}" alt="${bike.brand}">
          </div>
          <p>тип транспорта: ${bike.type}</p>
          <p>марка: ${bike.brand}</p>
          <p>макс. скорость: ${bike.maxSpeed}</p>
          <p>цена: ${bike.price} руб.</p>`;
          servicediv.before(card);
        };
      };

    if (data[i].type === "car") {
        newcar();
        createCarItem();
    } else {
        newbike();
        createBikeItem(); 
    };
}

