// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const hqLocale = 42;
    if(someValue < hqLocale){
        return hqLocale - someValue
    }else {
        return someValue - hqLocale
    }

  }
  console.log(distanceFromHqInBlocks(43));
  console.log(distanceFromHqInBlocks(50));


//Question 2
 
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);

    return ((distanceFromHqInBlocks(someValue)) * 264);
  }
console.log (distanceFromHqInFeet(43));

//distanceTravelledInFeet()

function distanceTravelledInFeet(start, destination){
    {if(start < destination){
        return (destination - start) * 264
    }else {
        return (start - destination) * 264
    }

    }
}
distanceTravelledInFeet(43, 80);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
   
    { if (distanceTravelledInFeet(start, destination) < 400){
        return (distanceFromHqInFeet(start, destination) * 0)
    } else if  ((distanceTravelledInFeet(start, destination) > 400) && (distanceTravelledInFeet(start, destination) <= 2000)){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
     } else if ((distanceTravelledInFeet(start, destination) > 2001) && (distanceFromHqInFeet(start, destination) < 2500)) {
        return 25;
     } else if ((distanceFromHqInFeet(start, destination) > 2500)){
                return 'cannot travel that far'
            }
    }
    
}
  calculatesFarePrice()


console.log (calculatesFarePrice (34, 32));
console.log (calculatesFarePrice(50, 58));
console.log (calculatesFarePrice(10, 24));


















