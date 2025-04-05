function getmaxAmount(budget,keyboardPrices,mousePrices){
	let maxAmount = -1
	
	for(let x of keyboardPrices){
		for(let y of mousePrices){
			let tot= x+y
			if(tot <= budget && tot > maxAmount)
			{
				maxAmount = tot;
			}
		}
	}
	return maxAmount;
	
}

console.log(getmaxAmount(60,[40,50,60],[5,8,12]));
console.log(getmaxAmount(10,[3,1],[5,2,8]));
console.log(getmaxAmount(20,[30,15],[8,10,6]));
