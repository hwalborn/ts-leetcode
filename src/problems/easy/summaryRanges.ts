/**
 * Scenarios to end range:
 *  1. The next element is more than one greater than current
 *  2. We are at the end of the array
 * 
 * What do we do if we end the range?
 *  1. Check if there's a holder
 *      a. holder is not equal to current = then we push `${holder}->${currentElm}` into array
 *      b. holder equals current = then push currentElm.toString() into array;
 * 
 *  What we are going to do
 * Define a return array for our ranges
 * loop over the nums array
 * get current element
 * check if the next element is greater than one more of the current
 * check if we are on the last
 * either true? add to ranges
 */

import { ISolution } from "../../utils/ISolution";

export function summaryRanges(nums: number[]): string[] {
    if (!nums.length) {
        return [];
    }
    const ranges = [];
    const arrLength = nums.length;
    let currentBeg: number = nums[0];
    for(let i =0; i < arrLength; i++) {
        const currentElm = nums[i];
        const isLast = i === (arrLength - 1);
        let nextElm;
        if (!isLast) {
            nextElm = nums[i + 1];
        }
        const isEndOfRange = currentBeg !== null && nextElm !== undefined && (currentElm + 1 !== nextElm);
        if (!isEndOfRange && !isLast) {
            continue;
        }
        if (currentBeg === currentElm) {
            ranges.push(currentElm.toString());
        } else {
            ranges.push(`${currentBeg}->${currentElm}`);
        }
        if (!isLast && nextElm !== undefined) {
            currentBeg = nextElm;
        }
    }
    return ranges;
};

export default class SummaryRanges implements ISolution {
    solve() {
        console.log(summaryRanges([0,1,2,4,5,7]))
    }
}