import { ISolution } from "../../utils/ISolution";

/**
 * Ok, so we have this ransom note and a magazine.
 * 1. My hunch is that we want to make an array.
 * 2. iterate over the ransom note
 *      - for each letter, we want to check the magazine (could use findIndex, seems like cheating)
 *          * what could be fun is some memoization... have a dictionary that keeps track of letters and indexes, could speed up by adding array of indexes
 *          * whomp whomp, doing the index list didn't really help:(
 *      - if it's not there, return false for the whole damn thing
 *      - if it is there, remove the string at the index of the magazine and keep iterating
 * 3. Once we've iterated, return true
 */

export default class RansomNote implements ISolution {

    canConstruct(ransomNote: string, magazine: string): boolean {
        const magazineDictionary: Record<string, number[]> = {};
        const magArray = magazine.split('');
        for (let i = 0; i < ransomNote.length; i++) {
            const currentLetter = ransomNote[i];
            const indexArr = magazineDictionary[currentLetter];
            if (indexArr && indexArr.length) {
                const index = indexArr.shift();
                if (index) {
                    magArray.splice(index, 1);
                }
                continue;
            }
            let foundMatch = false;
            for (let j = 0; j < magArray.length; j++) {
                const currentMagLetter = magArray[j];
                if (currentMagLetter === currentLetter) {
                    magArray.splice(j, 1);
                    foundMatch = true;
                    break;
                }
                if (!magazineDictionary[currentMagLetter]) {
                    magazineDictionary[currentMagLetter] = [j];
                } else {
                    magazineDictionary[currentMagLetter].push(j);
                }
            }
            if (!foundMatch) {
                return false;
            }
        }
        return true;
    }
    solve() {
        console.log(this.canConstruct('aa', 'ab'));
    };
}