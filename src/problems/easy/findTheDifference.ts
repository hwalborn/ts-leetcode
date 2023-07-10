import { ISolution } from "../../utils/ISolution";

/**
 * I think what we can do is maybe make a dictionary? -> we have a string and a count
 *  - this dictionary is made from s
 *  - then we go into t and iterate over the string
 *  - for each letter we find the corresponding count and subtract it
 *  - if the letter doesn't exist in the dictionary or the count for the letter is 0, return the letter
 */

export default class FindTheDifference implements ISolution {
    findTheDifference(s: string, t: string): string | void {
        const countDict = s.split('').reduce((acc: Record<string, number>, letter: string) => {
            if (acc[letter]) {
                acc[letter]++
            } else {
                acc[letter] = 1;
            }
            return acc;
        }, {})
        for (let i = 0; i < t.length; i++) {
            const currentLetter = t[i];
            const count = countDict[currentLetter];
            if (!count) {
                return currentLetter;
            }
            countDict[currentLetter]--;
        }
    }

    solve() {
        console.log(this.findTheDifference('a', 'aa'));
    };
}