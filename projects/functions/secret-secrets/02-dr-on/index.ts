// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

export type Func = (p: string) => string;

export function createAdvancedCipher(
	onVowel: Func,
	onConsonant: Func,
	onPunctuation: Func
) {
	return (text: string) => {
		let answer: string = "";
		const Vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],
			Consonant = [
				"b",
				"B",
				"c",
				"C",
				"d",
				"D",
				"f",
				"F",
				"g",
				"G",
				"h",
				"H",
				"j",
				"J",
				"k",
				"K",
				"l",
				"L",
				"m",
				"M",
				"n",
				"N",
				"p",
				"P",
				"q",
				"Q",
				"r",
				"R",
				"s",
				"S",
				"t",
				"T",
				"v",
				"V",
				"w",
				"W",
				"x",
				"X",
				"y",
				"Y",
				"z",
				"Z",
			];
		for (let character of text) {
			if (Vowel.includes(character)) {
				answer += onVowel(character);
			} else if (Consonant.includes(character)) {
				answer += onConsonant(character);
			} else {
				answer += onPunctuation(character);
			}
		}
		return answer;
	};
}
