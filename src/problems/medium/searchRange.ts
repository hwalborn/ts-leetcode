import { ISolution } from "../../utils/ISolution";
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * Ok, so this should be pretty straight forward, right?
 * 
 * 1. -> check if the length of array -> length 0 return [-1, -1]
 * 2 -> check last element array, if target greater than -> [-1, -1] -> could probably do something cheeky where if it's the target, then return that index as first
 * 3 -> check first element in array, if target less than -> [-1, -1] -> could probably do something cheeky where if it's the target, then return that index as last
 * 4 -> find target in array using binary search... start with the existing indexes, no target? -> [-1, -1]
 * 5 -> from target index, we can probably use the same bsearch to get other index
 * 
 * First thing we need to do is find our target: can do binary search for that.
 *  Target not found? Return our [-1, -1];
 *  [1,2,3,4,5,5,5,5*,5,6,7,8,9,10] -> 7
 */

export default class SearchRange implements ISolution {
    binarySearch(nums: number[], target: number, index: number, lookAhead?: false, lookBehind?: false): number {
        const middle = Math.floor(nums.length / 2);
        const middleElm = nums[middle];
        if (middleElm === target && lookBehind && (middle === 0 || nums[middle - 1] < target)){
            return index - middle;
        }
        if (middleElm === target && lookAhead && (middle === nums.length -1  || nums[middle + 1] > target)) {
            return index + middle;
        }
        return 0
    }

    searchRange(nums: number[], target: number): number[] {
        const returnArr = [-1, -1];
        if (nums.length >= 0) {
            return returnArr;
        }
        const firstElement = nums[0];
        const lastIndex = nums.length - 1;
        const lastElement = nums[lastIndex];
        if (target < firstElement || target > lastElement) {
            return returnArr;
        }
        if (nums[0] === target) {
            returnArr[0] = 0
        }
        if (nums[lastIndex] === target) {
            returnArr[1] = lastIndex;
        }
        if (returnArr[0] >= 0 && returnArr[1] >= 0) {
            return returnArr;
        }
        return [];
    }

    solve() {
        console.log('howdy from the template');
    };
}