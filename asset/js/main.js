window.addEventListener('load', function () {
    // handel preloader
    document.querySelector('.preloader').classList.add('hidePreloader');
});

// active link nav
// get the container element
var btnContiner = document.getElementById('navbarSupportedContent');
// get the all a link
let links = btnContiner.getElementsByClassName("nav-item");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        // console.log(current);
    });
};



// header 
// alert(h);

// function declaration 
function sayHi() {
    console.log('Hello');
}
//invoke the function
// sayHi();

// function experision
var person = function (name) {
    console.log('Hello ' + name);
}
// call the functions  
// person('killua');

//imediately invoked function
// dose not need to be invoked speratlly
// variable not in globle scope
var fun = (function () {
    // private invoked function 
    // var name = "john";
    // console.log(name);
})();

// create module tab
var moduel = (function () {
    // console.log('hello from Module');
    // debugger;
    var counter = 0;

    function addCount() {
        counter++;
    }

    function show() {
        console.log(counter);
    }

    return {
        addCount: addCount,
        show: show
    }

})();

// invoke function 
// moduel.addCount();
// moduel.addCount();
// moduel.addCount();
// moduel.show();

// we need to build the same concept with ES62015
// function experssion
const ESModule = (() => {
    // console.log('123')
    let counter = 0;

    function addCount() {
        counter++;
    }
    function show() {
        console.log('Counter Value: ' + counter);
    }

    return {
        addCount,
        show
    }
})();

// ESModule.addCount();
// ESModule.addCount();
// ESModule.addCount();
// ESModule.show();

// create the module makerCar in ES6  for the car 
// here in ES6 use let and const to declear new variable
const createCar = (() => {
    // declear empty array car data to hold the data later
    const cars = [];
    // car class to hold all data about the cat it self
    class Car {
        // we declear the constructor function to run we to 
        // create instance from the class and passed the default values
        constructor(make, country, img = 'car2.png', special = true, model = 'new model',
            price = 20000, type = 'suden', trans = 'auto', gas = '50') {
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas;
        }
    }
    // car function creation
    function makeCar(make, country, img, special, model, price, type, trans, gas) {
        // instance class from class car
        const car = new Car(make, country, img, special, model, price, type, trans, gas);
        // push car to the empty array
        cars.push(car);
        // console.log(cars);  
    }
    // preduce car (hear add info abut the car but actuly this informations get from backend)
    function preduceCare() {
        makeCar('chivy', 'china');
        // overrride to the defualt value 
        makeCar('cammry', 'american', 'car1.jpg', true, 'new model');
        makeCar('GXR', 'china', 'slider2.png', false, 'new model');
        makeCar('land cruser', 'american', 'car1.jpg', false, 'other model');
        makeCar('chivy', 'china', 'car1.jpg', false, 'some model');
        makeCar('bmw', 'korean', 'car2.jpg', false, 'new model');
        makeCar('cammry', 'american', 'car2.png', undefined, 'new model');
        makeCar('bmw', 'korean', 'car1.jpg', false, 'some model');
        makeCar('gxr', 'american', 'slider2.png');
        makeCar('cammry', 'korean', 'car2.jpg', false, 'new model');
    }
    // invoke the preduceCarfunction
    preduceCare();
    // get special car by filtering the special property 
    const spacialCar = cars.filter(car => car.special === true);
    // return the obj
    return {
        cars,
        spacialCar
    }
})();
// display special car
const displaySpeacialCars = ((createCar) => {
    // console.log(createCar.spacialCar);
    const specialCar = createCar.spacialCar;

    // first target the class feature info
    const info = document.querySelector('.featuerd-info');
    // document loaded
    document.addEventListener('DOMContentLoaded', () => {
        let data = '';
        info.innerHTML = "";
        specialCar.forEach(item => {

            data += `
            <!-- single item -->
            <div class="featured-item my-3 d-flex align-items-baseline text-capitalize flex-wrap">
                <span data-img="asset/img/${item.img}" class="featured-icon mr-2"><i class="bx bxs-car"></i></span>
                <h5 class="text-weight-blod mx-1">${item.make}</h5>
                <h5 class="mx-1">${item.model}</h5>
            </div>
            <!-- end of single item -->
            `
        });
        // display the content of the car info in the dom 
        info.innerHTML = data;
    })

    // change img 
    info.addEventListener('click', (event) => {
        if (event.target.parentElement.classList.contains('featured-icon')) {
            const img = event.target.parentElement.dataset.img;
            document.querySelector('.featured-photo').src = img;
            // console.log(img);
        }
    })


})(createCar);
// display car 
const displayCars = ((createCar) => {
    // all cars
    const cars = createCar.cars;
    // car container
    const inventory = document.querySelector('.inventory-container');
    // content is loaded
    document.addEventListener('DOMContentLoaded', (event) => {
        let data = '';
        inventory.innerHTML = '';
        cars.forEach(element => {
            data += `
            <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${element.country}">
            <div class="card car-card">
                <img src="asset/img/${element.img}" class="card-img-top car-img" alt="car1">
                <!-- card body -->
                <div class="card-body">
                    <div class="car-info d-flex justify-content-between">
                        <!-- first flex child -->
                        <div class="car-text text-uppercase">
                            <h6 class="font-weight-bold">${element.make}</h6>
                            <h6>${element.moduel}</h6>
                        </div>
                        <!-- second flex child -->
                        <div class="car-value align-self-center py-2 px-3">$
                            <span class="car-price">${element.price}</span>
                        </div>
                    </div>
                    <div class="card-footer text-capitalze d-flex justify-content-between">
                        <p><span><i class=" bx bxs-car "></i></span>${element.type}</p>
                        <p><span><i class=" bx bxl-steam "></i></span>${element.trans}</p>
                        <p><span><i class=" bx bxs-gas-pump "></i></span>${element.gas}</p>
                        </div>
                        </div>
                <!-- end of card body -->

            </div>
            </div>
            `;
        }
        );
        inventory.innerHTML = data;
        // console.log(data);
    })

    // console.log(cars);
})(createCar);

// model filter car
const filterCar = (() => {
    // select filter btn for all the btn class 
    const filter = document.querySelectorAll('.filter-btn');
    // select the target btn and add event
    filter.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            // to get the value of dataset of the class by the country of made 
            const value = event.target.dataset.filter;
            // select all the single car element 
            const singleCar = document.querySelectorAll('.single-car');
            // loops for all the cars and check all btn value
            singleCar.forEach((car) => {
                if (value === 'all') {
                    car.style.display = 'block';
                } else {
                    (!car.classList.contains(value)) ? car.style.display = 'none' :
                        car.style.display = 'block';
                }
            })
            console.log(singleCar);

        })

    })
})();
















