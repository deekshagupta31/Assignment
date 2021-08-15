/*
     JavaScript Assignment 1
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

const cities = [
    'Abu Dhabi',
    'Abuja',
    'Cairo',
    '???',
    'Amman',
    'Islamabad',
    'Tokyo',
    'Beirut',
    '???',
    'Ottowa',
    'New Delhi',
    'BrasÃ­lia',    
];

const countries = [
    'UAE',
    'Nigeria',
    'Egypt',
    '???',
    'Jordan',
    'Pakistan',
    'Japan',
    'Lebanon',
    '???',
    'Canada',
    'India',
    'Brazil',    
];
/******** Answers Section ********/
// 1. Create a for loop to iterate over 'cities'
// 2. Inside the for loop, console.log() the country for that city (e.g, "Abu Dhabi, UAE")
// NOTE: For 2 and 3, use if/else. There should be no '???' in the console!
// 3. If the name of a city is missing (i.e there is '???'), use console.log("Oops!")
// Hint: use a counter variable to access both 'cities' and 'countries'
function citiesAndCountries(){
    let finalValue="";
    for(let i=0;i<cities.length;i++){        
        finalValue=cities[i]==="???"?"Oops!":cities[i]+" : ";
        finalValue=cities[i]==="???"?finalValue+" ":countries[i]==="???"?"Oops!":finalValue+countries[i];        
        console.log(finalValue);
    }
}
citiesAndCountries();