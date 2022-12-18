const net = new brain.NeuralNetwork();



const TrainingData = [ 
	
	{ input: [0/1 , 0/1, 0/1, 0/1, 0/1, 0/1 , 0/1, 0/1, 0/1 , 0/1], output: { notbuy: 1 } }, //lakier,przebieg,tapicerka,jazda,uszkodzony,VIN,polisa,umowa,błędy,kraj
	{ input: [1/1 , 1/1, 1/1, 1/1, 1/1, 1/1, 1/1, 1/1, 1/1, 1/1], output: { buy: 1 } }
	
];

net.train(TrainingData);



const car_paint = document.getElementById("car_paint");
const mileage = document.getElementById("mileage");
const upholstery = document.getElementById("upholstery");
const test_drive = document.getElementById("test_drive");
const damage = document.getElementById("damage");
const VIN = document.getElementById("VIN");
const OC = document.getElementById("OC");
const purchase_agreement = document.getElementById("purchase_agreement");
const errors = document.getElementById("errors");
const country = document.getElementById("country");


const showBtn = document.querySelector(".show");
const answer = document.querySelector(".answer");


function incorrectdata() {
	if (car_paint.value === "" ||  car_paint.value > 1) return false;
	if (mileage.value === "" || mileage.value > 1) return false;
	if (upholstery.value === "" || upholstery.value > 1) return false;
	if (test_drive.value === "" ||  test_drive.value > 1) return false;
	if (damage.value === "" || damage.value > 1) return false;
	if (VIN.value === "" ||  VIN.value > 1) return false;
	if (OC.value === "" ||  OC.value > 1) return false;
	if (purchase_agreement.value === "" || purchase_agreement.value > 1) return false;
	if (country.value === "" || country.value > 1) return false;
	

	return true;
}

showBtn.addEventListener("click", () => {
	if (!incorrectdata()) {
		answer.textContent = "Czego nie rozumiesz w poleceniu:Wstaw 1 lub 0?! ";
		return false;
	}

	
	let result = net.run([
		car_paint.value / 1,
		mileage.value / 1,
		upholstery.value / 1,
		test_drive.value / 1,
		damage.value / 1,
		VIN.value / 1,
		OC.value / 1,
		purchase_agreement.value / 1,
		errors.value / 1,
		country.value / 1
	]);
	console.log(result);


	if (result["notbuy"] > 0.7) {
		answer.textContent = "Nie warto kupować tego samochodu.Nia martw się,napewno znajdziesz lepszy model!";
		
	} else {
		answer.textContent = "Masz szczęście.Ten samochód jest warty kupienia.Oto twoja szansa!";
		
	}
});
