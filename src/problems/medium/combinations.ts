import { ISolution } from "../../utils/ISolution";
/**
 * n = 4, k = 3 -> is this right?
 * [[1,2,3], [1,2,4], [1,3,4], [2,3,4]]
 * n = 5, k = 2 -> is this right?
 * [[1,2], [1,3], [1,4], [1,5], [2,3], [2,4], [2,5], [3,4], [3,5], [4,5]]
 * 
 * So what do we do? 
 * I really think we need some sort of branching... Like a recursion thing (yay)
 * 
 */

export default class Combinations implements ISolution {
    combine(n: number, k: number): number[][] {
        let i = 1;
        const combos = [];
        while (i < n) {
            combos.push(...this.buildCombination([i], k, n));
            i++;
        }
        return combos;
    }

    /**
     * @param currentCombinations -> list of combos as it's running
     * @param length -> the target length (k from the above)
     * @param maxNum -> the max num that can be in array (n from above)
     * @returns 
     */
    buildCombination(currentCombinations: number[], length: number, maxNum: number): number[][] {
        const comboLength = currentCombinations.length;
        if (comboLength === length) {
            return [currentCombinations];
        }
        const combos = [];
        let nextElement = currentCombinations[comboLength - 1] + 1;
        while(nextElement <= maxNum) {
            const combo = this.buildCombination([...currentCombinations, nextElement], length, maxNum);
            combos.push(...combo);
        }
        return combos;
        // like a while loop... While combo.length 
        // return this.buildCombination([...currentCombinations, currentCombinations[comboLength - 1] + 1], length, maxNum);
    }

    solve() {
        console.log(this.combine(4, 2));
    }
}