
function distanceFromHqInBlocks(start) {
    if (start > 42){
    return start - 42;
     } else {
        return 42 - start
    }
}

console.log(distanceFromHqInBlocks(43)) 

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264
}

console.log(distanceFromHqInFeet(43)) 

function distanceTravelledInFeet (pickUp, dropOff) {
    if (pickUp > dropOff) 
     return (pickUp - dropOff) * 264
        else {
            return (dropOff - pickUp) * 264
        }
}

console.log(distanceTravelledInFeet(43, 48)) 

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination)
    if (dist < 400)
        return dist * 0;
    else if (dist < 2000)
        return (dist - 400) * .02;
    else if (dist < 2500)
        return 25;
    else if (dist > 2500)
        return "cannot travel that far";
}

console.log(calculatesFarePrice(43, 48)) 