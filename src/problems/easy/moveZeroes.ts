import { ISolution } from "../../utils/ISolution";

/**
 * I feel like this should be easy, right? just iterate over the array
 * and then push the zero to the end if it's a zero.... There's probs a better way to do this
 * Ah ha! If we get to the end, then the zeroes will keep going... Need to keep track of the index;
 *      -- Not a thing
 * Hmmmm... so we have to move. I feel like what we could do is iterate over the array, if we have a zero,
 * kick off a new iteration until we find the next non-zero number. Once we find that, switch the numbers
 * and update the index to be where the zero was moved. If we get to the end of the array, move the zero to the end...
 *      -- this doesn't work either
 *      -- maybe we could do the opposite of that
 * Ok, lets have a boolean `firstZero`, where we initialize to false. Once we find the first zero,
 * we move the next nonzero in front of it.
 *  - I don't think we need that variable
 *  - Lets have an index to keep track of the first zero
 *  - loop over the nums
 *  - if we get to a non zero number and first zero > -1, switch the numbers, update zero index to be +1
 */

export default class MoveZeroes implements ISolution {
    moveZeroes(nums: number[]): void {
        let firstZero = -1;
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if (element !== 0 && firstZero >= 0) {
                nums[firstZero] = element;
                nums[i] = 0;
                firstZero++;
            } else if (element === 0 && firstZero < 0) {
                firstZero = i;
            }
        }
    }
    solve() {
        const nums = [45192,0,-659,-52359,-99225,-75991,0,-15155,27382,59818,0,-30645,-17025,81209,887,64648];
        this.moveZeroes(nums);
        console.log(nums);
    };
}