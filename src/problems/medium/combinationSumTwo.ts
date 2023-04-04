import { ISolution } from "../../utils/ISolution";

/**
 * I really want to do this using like a tree, but I dunno, seems like it could be tough.
 * We could do this using recursion I think!
 * Base case:
 *  The total === target -> return the array || total > target -> return null
 */

export default class CombinationSumTwo implements ISolution {
    combinationSum2(candidates: number[], target: number): number[][] {
        const allSums = [];
        for(let i = 0; i < candidates.length; i++) {
            const validSum = this.findValidSum(candidates, target, i);
            if (validSum) {
                allSums.push(validSum);
            }
        }
        return allSums;
    }

    findValidSum(allCandidates: number[], target: number, index: number, currentElms: number[] = []): number[] | undefined {
        const sum = currentElms.reduce((sum, num) => (sum + num), 0);
        // not a valid sum
        if (sum > target) {
            return;
        // we found one!
        } else if (sum === target) {
            return currentElms;
        }
        // we are at the end:(
        if (index >= allCandidates.length) {
            return;
        }
        const checkElm = allCandidates[index];
        index++;
        const validSum = this.findValidSum(allCandidates, target, index, [...currentElms, checkElm]);
        if (validSum) {
            return validSum;
        }
        index++;
        return this.findValidSum(allCandidates, target, index, [...currentElms, checkElm]);
    }

    solve() {
        console.log(this.combinationSum2([10,1,2,7,6,1,5], 8));
    }
}