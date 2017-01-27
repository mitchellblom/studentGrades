// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// Use console.log to output the following criteria:

// How many of each grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var scores = scores.sort(function(a, b){return a - b ;});

var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;

var grade = [ ];

	for (var i=0; i<scores.length; i++) {
		if (scores[i] >= 50 && scores[i] <= 60 ) {
		grade.push ("F");
		gradeF ++;
	}	else if (scores[i] >=61 && scores[i] <= 70 ) {
		grade.push ("D");
		gradeD ++;
	}	else if (scores[i] >=71 && scores[i] <= 80 ) {
		grade.push ("C");
		gradeC ++;		
	}	else if (scores[i] >=81 && scores[i] <= 90 ) {
		grade.push ("B");
		gradeB ++;
	}	else if (scores[i] >=91 && scores[i] <= 100 ) {
		grade.push ("A");
		gradeA ++;
	}
		else {
		alert("You must not have done the assignment");
	}
}

console.log("grade letter", grade);
console.log("Number of As:", gradeA);
console.log("Number of Bs:", gradeB);
console.log("Number of Cs:", gradeC);
console.log("Number of Ds:", gradeD);
console.log("Number of Fs:", gradeF);

// What is the lowest grade?

scores.min = function(scores) {
	return Math.min.apply( Math, scores)
}
var lowGrade = scores.min(scores)
console.log("Lowest Grade: ", lowGrade)

// What is the highest grade?

scores.max = function(scores) {
	return Math.max.apply( Math, scores)
}
var hiGrade = scores.max(scores)
console.log("Highest Grade: ", hiGrade)

