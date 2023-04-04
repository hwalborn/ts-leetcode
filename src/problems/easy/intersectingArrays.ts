import { ISolution } from "../../utils/ISolution";

/**
 * I'm obviously getting tired ¯\_(ツ)_/¯
 * I think we iterate over the first one
 */

export default class IntersectingArrays implements ISolution {

    intersection(nums1: number[], nums2: number[]): number[] {
        const nums1Intersects = nums1.length < nums2.length;
        const shorterArr = nums1Intersects ? nums1 : nums2;
        const longerArr = nums1Intersects ? nums2 : nums1;
        const memo = shorterArr.reduce((mem: Record<number, boolean>, n) => {
            mem[n] = true;
            return mem;
        }, {});
        const intersections = longerArr.reduce((uniques: number[], n) => {
            if (memo[n] && !uniques.includes(n)) {
                uniques.push(n);
            }
            return uniques;
        }, []);
        return intersections;
    }

    areEqual(arr1: number[], arr2: number[]): boolean {
        for(let j = 0; j < arr1.length; j++) {
            if (arr2[j] !== arr1[j]) {
                return false;
            }
        }
        return true;
    }

    solve() {
        console.log(this.intersection([1, 2,2,1], [2,2]));
        // console.log(this.intersection([4,9,5], [9,4,9,8,4]));
    }
}