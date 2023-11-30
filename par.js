let dog ={
    name:"可口可樂",
    type:"臘腸",
    age:2,
    getName:function(){
        // console.log(this.name);
        return this.name;
    },
    getAge:function(){
        // console.log(this.age)
        return this.age;
    },
    getType(){
        // console.log(this.type)
        return this.type
    },
    setName:function(a){
        this.name = a;
        // dog.name = "雪碧"
        // console.log(this.name)
    },
    setAge:function(b){
        this.age = b;
        // dog.age = 3;
        // console.log(this.age)
    },
    setType:function(c){
        this.type = c;

        // dog.type = "貴賓"
        // console.log(this.type)
    },
    setAll(a,b,c){
        this.name = a;
        this.age = b;
        this.type = c;
    }
}
// js的預設值為 undefined
// dog.getName();
// dog.getAge();
// dog.getType();
// dog.setAge(12);
// dog.setType("貴賓");
// dog.setName("查理王");
// console.log(dog);
// dog.setAll
console.log(dog.getName())
console.log(dog.getAge())
console.log(dog.getType())


function text(x){
    console.log(dog);
    return dog.type
}

text();

let food ={
    name:"義美小泡芙",
    age:2,
    type:text(),
}

console.log(food.type)

let fish = function(){
    return "你好"
}
console.log(fish())

let btn =document.getElementById("testBtn")




//舉例
// 父母親(js)請我(瀏覽器)監督(listener)正在煮水(event)的鍋子(button)若水滾了就關火(function)
// btn.addEventListener("click", function(){
//     console.log("BTN")
// })
//=> 會指向全域
function calculateSalary() {
    let baseHourlySalary = parseInt(document.getElementById('hourlyRate').value);
    let hoursWorked = parseInt(document.getElementById('hoursWorked').value);
    let salary;

    if (hoursWorked < 40) {
        salary = hoursWorked * baseHourlySalary * 0.8;
    } else if (hoursWorked == 40) {
        salary = hoursWorked * baseHourlySalary;
    } else if (hoursWorked <= 50) {
        salary = hoursWorked * baseHourlySalary * 1.2;
    } else {
        salary = hoursWorked * baseHourlySalary * 1.6;
    }

    // 輸出結果
    console.log("薪水為：" + salary);
}

// Math.random()&Math.floor()
console.log(Math.floor(5.63))
// 1~10之間的整數亂數不要０
console.log(Math.floor(Math.random()*10+1))

