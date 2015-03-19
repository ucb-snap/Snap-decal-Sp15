/*

	Homework 2

	Five Simple JavaScript Exercises: a basic warmup to 
	JavaScript. 

	Written by Kyle Hotchkiss, with questions found on Google


	In this homework, we are going to have you write some simple 
	functions in JavaScript. We will provide this base code, 
	howvever, it is up to you to test your code and make sure that
	the functions work correctly. We highly urge that you do you
	do your best to complete these practice problems.

*/

max = function(x, y) {
/*	
	max(x, y) is a funtion  that returns the larger of the two
	numbers that it is given.
*/
	return x > y ? x : y;

};

maxOfThree = function(x, y, z) {
/*	
	maxOfThree(x, y, z) is a funtion  that returns the larger of the two
	numbers that it is given.
*/
	var temp = x > y ? x : y;
	return temp > z ? temp : z;

};

isVowel = function(c) {
/*
	isVowel(char) takes in a character and returns 
	true is the character is a vowel and false 
	if the character is not.
*/

	return c=='a' || c=='e' || c=='i' || c=='o' || c=='u'
//INSERT CODE HERE

};

sum = function(intArray) {
/*
	sum(intArray) takes in an int array and returns
	the sum of all of the numbers in the array
*/
	var sum = 0;
	for (var i=0; i<intArray.length;i++){
		sum += intArray[i];
	}
	return sum;
//INSERT CODE HERE

};

filterLongWords = function(stringArray, i) {
/* 
	filterLongWords(stringArray, i) takes in an
	Array of strings, and returns an array of strings
	that are longer than i characters
*/
	var check = function(value, index, array){
		return value.length > i;
	}
	return stringArray.filter(check);
//INSERT CODE HERE

};

//BONUS QUESTION FOR FUN

charFreq = function(word) {
/* 
	charFreq(word) takes in a word and returns the letters 
	that make up the word, as well as how many times the
	letter occured in the word.
	For example, the word 'heeeeeeyy' has as character
	frequency of h: 1; e: 6; y: 2.
	It is up to you how the character frequencies is represented.
*/

//INSERT CODE HERE
	dict = {};
	for (var i = 0; i < word.length; i++) {
		var c = word[i];
		if (dict[c]) {
			dict[c]++;
		}
		else {
			dict[c] = 1;
		}
	}
	return dict;
};
// console.log(max(2,3));
// console.log(maxOfThree(4,5,6));
// console.log(isVowel('a'));
// console.log(isVowel('c'));
// console.log(sum([1,2,3]));
// console.log(filterLongWords(["bbbbb", "cccccc", "dd"], 3));
// console.log(charFreq("heeey"));