// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.

export type Cipher = (a: string) => string;

export function createCipher(cipher: Cipher) {
	return (text: string) => {
		let answer: string = "";

		for (let character of text) {
			answer += cipher(character);
		}

		return answer;
	};
}
