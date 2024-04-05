function indexOfIgnoreCase(s1, s2) {
	let s1Lower = s1.toLowerCase();
	let s2Lower = s2.toLowerCase();

	let res = s1Lower.indexOf(s2Lower)
	return res;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));