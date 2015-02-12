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
	if(x>y){
		return x;
	}
	return y;

};

maxOfThree = function(x, y, z) {
/*	
	maxOfThree(x, y, z) is a funtion  that returns the larger of the two
	numbers that it is given.
*/
	return max(max(x,y), z);

};

isVowel = function(char) {
/*
	isVowel(char) takes in a character and returns 
	true is the character is a vowel and false 
	if the character is not.
*/
	var vowels = "aeiou"
	if(vowels.search(char) >= 0){
		return true;
	}
	return false;

};

sum = function(intArray) {
/*
	sum(intArray) takes in an int array and returns
	the sum of all of the numbers in the array
*/

//INSERT CODE HERE
	var sum = 0;
	for(var i = 0; i < intArray.length; i++){
		sum += intArray[i];
	}
	return sum;
};


filterLongWords = function(stringArray, i) {
/* 
	filterLongWords(stringArray, i) takes in an
	Array of strings, and returns an array of strings
	that are longer than i characters
*/

	var a = [];
	var count = 0;
	for(var b = 0; b < stringArray.length; b++){
		if(stringArray[b].length > i){
			a[count] = stringArray[b];
			count += 1;
		}
	}
	return a;
};


charFreq = function(word) {
/* 
	charFreq(word) takes in a word and returns the letters 
	that make up the word, as well as how many times the
	letter occured in the word.
	For example, the word 'heeeeeeyy' has as character
	frequency of h: 1; e: 6; y: 2.
	It is up to you how the character frequencies is represented.
*/

	var map = {};
	for(var i = 0; i < word.length;  i++){
		if(word[i] in map){
			map[word[i]] += 1;
		}
		else{
			map[word[i]] = 1;
		}
	}
	return map;
};