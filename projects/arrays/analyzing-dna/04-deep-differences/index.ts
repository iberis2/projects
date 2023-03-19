export function deepDifferences(a: string[][], b: string[][]) {
	if (a.length !== b.length) {
		return undefined;
	}

	let answer: (undefined | (string | undefined)[])[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			answer.push(undefined);
			continue;
		}

		let innerAnswer: (string | undefined)[] = [];
		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] !== b[i][j]) {
				innerAnswer.push(undefined);
			} else {
				innerAnswer.push(a[i][j]);
			}
		}
		answer.push(innerAnswer);
	}
	return answer;
}
