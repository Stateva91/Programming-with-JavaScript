function journey(input){

    let budget = Number(input[0]);
    let season = input[1];
    
    let vacationPrice = 0;
    let destination = '';
    let placeInfo = '';
    
     
    
    if (budget <= 100){

    if (destination ='Bulgaria'){
    
    if(season == 'summer'){
    vacationPrice = budget * 0.30;
    
    placeInfo = "Camp - " + vacationPrice.toFixed(2);
    }else {
    
    vacationPrice = budget * 0.70;
    
    placeInfo = "Hotel - " + vacationPrice.toFixed(2);
    
    }
}
}
else if(budget <= 1000){
    
    destination = 'Balkans';
    
    if(season == 'summer'){
    
    vacationPrice = budget * 0.40;
    
    placeInfo = "Camp - " + vacationPrice.toFixed(2);
    
    }else{
    
    vacationPrice = budget * 0.80;
    
    placeInfo = "Hotel - " + vacationPrice.toFixed(2);
    
    } 
    }
    else if (budget> 1000){
    
    destination = 'Europe';
    vacationPrice = budget * 0.90;
    placeInfo = "Hotel - " + vacationPrice.toFixed(2);
    
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${placeInfo}`);
    
    }