/*
     JavaScript Assignment 2
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

let house = {
        areas: {
            livingRoom: {
                items: ['tv','sofa']
            },
            bedroomOne: {
                items: ['bed','washing machine'],
                windows: 3
            },
            bedroomTwo:{
                items: ['bed','bed','desk'],
                windows: 4
            },
            kitchen:{
                items: ['fridge','broken chair','microwave']
            }
        },
        garden: [true, 'Red Rose'],
        garage: {
                car: {
                    color: 'red',
                    wheels: 4,
                    honk: ()=>{alert("Beep")}
                }
        }
}


//house["areas"]["kitchen"]["items"]
/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.
house["areas"]["livingRoom"]["items"].push("dining table");
console.log("Part I (1) : "+house["areas"]["livingRoom"]["items"]); 

// (2) Add a stove to the kitchen.
house["areas"]["kitchen"]["items"].push("stove");
console.log("Part I (2) : "+house["areas"]["kitchen"]["items"]);
   
// (3) Remove the washing machine from bedroomOne.
const idx=house["areas"]["bedroomOne"]["items"].indexOf("washing machine");
house["areas"]["bedroomOne"]["items"].splice(idx,1);
console.log("Part I (3) : "+house["areas"]["bedroomOne"]["items"])

// (4) Change the color of the car to blue.
house["garage"]["car"]["color"]="blue"
console.log("Part I (4) : "+house["garage"]["car"]["color"])

// (5) Add a another car to the garage with a honk function.

const car2={
    color: 'black',
    wheels: 4,
    honk: ()=>{alert("Beep")}
}
house["garage"]["car2"]=car2;
console.log("Part I (5) : ");
console.log(house["garage"]);

// (6) Make the new car honk.
house["garage"]["car2"]["honk"]();

// (7) If the house has a garden, console.log the name of the flower.

if((house["garden"][0])===true){
    console.log("Part I (7) : "+house["garden"][1]);
}
else{
    console.log("Part I (7) : "+"No Flower Found")
}

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function

const temp=house["areas"]["kitchen"]["items"].indexOf("broken chair")
house["areas"]["kitchen"]["items"][temp]=house["areas"]["kitchen"]["items"][temp].replace("broken chair","new chair")
console.log("Part II (8) : "+house["areas"]["kitchen"]["items"])

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.

let count=Object.keys(house["areas"]).length;
console.log("Part II (9) : "+count);

// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.

let countBed=0; 
 for(let i=0;i<Object.values(house["areas"]).length;i++){
    Object.values(house["areas"])[i]["items"].forEach(str=>str==="bed"?countBed++:countBed)
 }
 console.log("Part II (10) : "+countBed);
 
    


