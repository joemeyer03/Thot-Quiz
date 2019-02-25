function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var level = 0;


	if (question1 == "Yes") {
		level += 35;
}
	if (question2 == "Yes") {
		level += 85;
}	
	if (question2 == "No" || question2 == "Of course not") {
		level += 35;
}	
	if (question3 == "Yes") {
		level += 65;
}
	if (question4 == "Yes") {
		level += 75;
}
	if (question5 == "Yes") {
		level += 95;
}
	if (question6 == "2") {
		level += 5;
}
	if (question6 == "3") {
		level += 15;
}
	if (question6 == "4") {
		level += 45;
}
	if (question6 == "5+") {
		level += 55;
}
	if (question7 == "Bruno Mars") {
		level += 45;
}
	if (question7 == "Post Malone") {
		level += 75;
}
	if (question7 == "Drake") {
		level += 75;
}
	if (question7 == "Travis Scott") {
		level += 75;
}
	if (question7 == "Khalid") {
		level += 45;
}
	if (question8 == "Yes") {
		level += 65;
}
	if (question9 == "White slip on vans") {
		level += 75;
}
	if (question9 == "Birkenstocks") {
		level += 65;
}
	if (question9 == "Slip on uggs") {
		level += 45;
}
	if (question9 == "All of the above") {
		level += 95;
}
	if (question10 == "Nike") {
		level += 45;
}
	if (question10 == "Adidas") {
		level += 15;
}
	if (question10 == "Calvin Klein") {
		level += 85;
}
	if (question10 == "Supreme") {
		level += 85;
}
	if (question10 == "Lululemon") {
		level += 85;
}
	if (question10 == "American Eagle") {
		level += 65;
}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("number_correct").innerHTML = "You are " + Math.round(level/730*100) + "% thot";
	}
