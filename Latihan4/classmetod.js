class Human {
  //menambah constructor
  constructor(name,address){
    this.name = name;
    this. address = address;
  }
  // menambahkan static property
  static isLivingOnEarth = true
  // menambah instance method
  introduce(){
    console.log(`Hi,my name id ${this.name}`);
  }
}
//menambahkan property / instance method
console.log(Human.isLivingOnEarth);
Human.prototype.greet = function(name){
  console.log(`Hi, ${name}, I'm ${this.name}`);
}
// menambahkan static method
Human.destroy = function(thing){
  console.log(`Human is destroying ${thing}`);
}
// Membuat object dengan class Human
let mj=new Human("Michael Jackson", "Isekai");
// ouput : Human {name : 'Michael Jackson', address : 'Isekai'}
console.log(mj);
// mengcek jika object adalah instance dari class
// output : true
console.log(mj instanceof Human)
//output :Hi, Donald Trump, i'm Michael Jacksson
mj.greet("Donald Trump");
// ouput: Human is destroying Amazon Forest
Human.destroy("Amazon Forest");