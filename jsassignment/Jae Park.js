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

//INSERT YOUR CODE HERE
	return Math.max(x,y);
};

maxOfThree = function(x, y, z) {
/*	
	maxOfThree(x, y, z) is a funtion  that returns the larger of the two
	numbers that it is given.
*/

//INSERT YOUR CODE HERE
	return Math.max(x, y, z);

};

isVowel = function(char) {
/*
	isVowel(char) takes in a character and returns 
	true is the character is a vowel and false 
	if the character is not.
*/

//INSERT CODE HERE
	array = ['a', 'e', 'i', 'o', 'u'];
	for (i = 0; i < arr.length; i++) {
		if (array[i] == char) {
			return true;
		}
	}
	return false;

};

sum = function(intArray) {
/*
	sum(intArray) takes in an int array and returns
	the sum of all of the numbers in the array
*/

//INSERT CODE HERE
	total = 0;
	for (i = 0; i < intArray.length; i++) {
		total += intArray[i];
	}
	return total;


};

filterLongWords = function(stringArray, i) {

	array = [];
	for (j = 0; j < stringArray.length; j++) {
		if (stringArray[j].length > i) {
			array.push(stringArray[j]);
		}
	}

	return array;


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
	dict = {}
	for (i = 0; i < word.length; i++) {
		if (dict[word[i]] == undefined) {
			dict[word] = 1; 
		}
		else {
			dict[word] += 1;
		} 
	return dict;
}

};