var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;

console.log(amountCovered(claim1));

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
function percentCovered(c){
	 var percent = 0;
	if(c[1] === 'Optical'){
		return 0;
	}else if (c.visitType === 'Specialist'){
		return 10;
	}else if (c.visitType === 'Emergency') {
		return 100;
	}else if (c.visitType === 'Primary Care') {
		return 50;
	}else{
		return 'Error! Unidentified care type'
	}
}
//function to determine amount covered
function amountCovered(c) {
	return c.visitCost * (percentCovered(c) / 100)
}
