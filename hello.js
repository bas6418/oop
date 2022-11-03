//function kuadratAsync(x) {
  //setTimeout(() => node x*x,5000)  
//}
//console.log(kuadratAsync(3))


//function kuadratAsync(x, callback) {
 //   setTimeout(() => callback(x*x),5000)  
 // }
 // kuadratAsync(3, console.log);

 //const strArray = ['javaSript','Java','C'];
// function forEach(array,callback){
 //   const newArray=[];
  //  for(let i=0;i<array.length;i++){
   //     newArray.push(callback(array[i]));

   // }
   // return newArray;
 //} 
 //const lenArray = forEach(strArray,(item) =>{
   // return item.length;
 //})
 //console.log(lenArray)

//  function isPasswordCorrect(password) {
//    return new Promise((resolve, reject) => {
//      console.log('Password:', password)
//      if (password !== '123456')
//        return reject("Wrong password!")
    
//      resolve("Password is correct!")
//    })
//   }
//   // Output-nya akan resolve: Password is correct!
//   isPasswordCorrect('123456')
//    .then(resolve => console.log(resolve))
//    .catch(reject => console.error(reject))
//   // Output-nya akan reject: Wrong password!
//   isPasswordCorrect('123455')
//    .then(resolve => console.log(resolve))
//    .catch(reject => console.error(reject))
  // 
  // class Human {
  //   constructor(name, address) {
  //     this.name = name;
  //     this.address = address;
  //   }
    
  //   // ini adalah private instance method
  //   #doGossip() {
  //     console.log(`My address will become viral ${this.address}`);
  //   }
    
  //   talk() {
  //     this.#doGossip();
  //   }
    
  //   // ini adalah private instance property
  //   static #isHidingArea = true;
  //   }
    
  //   let mj = new Human("Michael Jackson", "Isekai");
    
  //   // bisa berjalan, tidak menyebabkan error
  //   mj.talk();
    
  //   try {
  //    // tidak berjalan, menyebabkan error
  //    mj.#doGossip();
  //     // tidak berjalan, menyebabkan error
  //   //Human.#isHidingArea;
  //   } catch (err) {
  //    console.log(err);
  //   }
  // class Human {
  //   // menambahkan constructor
  //   constructor(name, address) {
  //     this.name = name;
  //     this.address = address;
  //   }
   
  //   // menambahkan static property
  //   static isLivingOnEarth = true
   
  //   // menambahkan instance method
  //   introduce() {
  //    // console.log(`Hi, my name is ${this.name}`);
  //   }
  //  }
   
  //  // output dari static property: true
  //  console.log(Human.isLivingOnEarth);
   