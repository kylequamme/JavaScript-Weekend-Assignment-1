var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var initialList = [claim1, claim2, claim3, claim4, claim5]

var claim6 = new Claim("Davey Allison", "Emergency", 11000);

var claim7 = new Claim("Joey Logano", "Primary Care", 550);

var claim8 = new Claim("Kevin Harvick", "Optical", 250)

var claim9 = new Claim("Tony Stewart", "Specialist", 25000)

var claim10 = new Claim("Kyle Busch", "Specialist", 50000)

var secondList = [claim6, claim7, claim8, claim9, claim10]

var claimsList = initialList.concat(secondList);

var totalPayedOut = 0;

for(var i = 0; i < claimsList.length; i++){
	totalPayedOut += amountCovered(claimsList[i]);
	var output = 'Paid out ' + amountCovered(claimsList[i]).toLocaleString('en-us', {style: 'currency', currency: 'USD'}) + ' for ' + claimsList[i].patientName;
	console.log(output);
}

console.log(Math.round(totalPayedOut).toLocaleString('en-us', {style: 'currency', currency: 'USD'}));


$( document ).ready(function() {
	for(var i = 0; i < claimsList.length; i++){
		$( ".mainOutput" ).append('<p>Paid out ' + amountCovered(claimsList[i]).toLocaleString('en-us', {style: 'currency', currency: 'USD'}) + ' for ' + claimsList[i].patientName);
	}
	$( ".mainOutput" ).append('<p> Total paid out: ' + Math.round(totalPayedOut).toLocaleString('en-us', {style: 'currency', currency: 'USD'}));
});

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
function percentCovered(c){
	if(c.visitType === 'Optical'){
		return 0;
	}else if (c.visitType === 'Specialist'){
		return .10;
	}else if (c.visitType === 'Emergency') {
		return 1;
	}else if (c.visitType === 'Primary Care') {
		return .50;
	}else{
		return 'Error! Unidentified care type'
	}
}

//function to determine amount covered
function amountCovered(c) {
	var costCovered = c.visitCost * percentCovered(c);
	return costCovered;
}
