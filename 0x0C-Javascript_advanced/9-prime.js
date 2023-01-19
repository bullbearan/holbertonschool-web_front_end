function countPrimeNumbers() {
	let count = 0;
	for (let i = 2; i <= 100; i++) {
		let flag = true;
		for(let j = 2; j <= i; j++) {
			if (i % j == 0)
				flag = false;
		}
		if (flag)
			count +=1;
	}
	return count;
}
const a = performance.now();
countPrimeNumbers();
const b = performance.now();
const result = b - a;
console.log(`Execution time of printing countPrimeNumbers was ${result} milliseconds.`);
