// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

export type Parameter = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: Parameter) {
	return (text: string): string | undefined => {
		for (let i = 0; i < attempts; i++) {
			const guess = makeGuess(text, 1);
			if (validateGuess(guess)) {
				return guess;
			}
		}

		return undefined;
	};
}
