// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){

    const hqLocation=42;
    const distance=Math.abs(pickupLocation-hqLocation)
    
    return distance;
}
function distanceFromHqInFeet(pickupLocation){
    const distanceInBlocks=distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock=264;
    const distanceInFeet=distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}
function distanceTravelledInFeet(startBlock,destinationBlock){
    const distanceInBlocks=Math.abs(destinationBlock-startBlock);
    const feetPerBlock=264;
    const distanceInFeet=distanceInBlocks * feetPerBlock;
    return distanceInFeet;

}






function calculatesFarePrice(start,destination){
    const distanceInFeet=distanceTravelledInFeet(start,destination);
    if(distanceInFeet<=400){
        // free sample for short distance
        return 0;
    } else if(distanceInFeet>400 && distanceInFeet<=2000){
        const distanceWithoutFree=distanceInFeet-400;
        const fare=distanceWithoutFree * 0.02;
        return fare;
    } else if(distanceInFeet>2000 && distanceInFeet<=2500){
        return 25;
    } else{
        return 'cannot travel that far'
    }
}