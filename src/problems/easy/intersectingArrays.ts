import { ISolution } from "../../utils/ISolution";

/**
 * I'm obviously getting tired ¯\_(ツ)_/¯
 * I think we iterate over the first one
 */

export default class IntersectingArrays implements ISolution {

    newIntersection(nums1: number[], nums2: number[]): number[] {
        const intersecting: number[] = [];
        let i = 0;
        
        while (i < nums1.length) {
            let j = 0;
            if (nums2.length <= 0) {
                break;
            }
            while ( j < nums2.length) {
                if (nums1[i] === nums2[j]) {
                    intersecting.push(...nums2.splice(j, 1));
                    break;
                }
                j++;
            }
            i++;
        }
        return intersecting
    }

    solve() {
        console.log(this.newIntersection([1,2,2,1], [2,2]));
        console.log(this.newIntersection([4,9,5], [9,4,9,8,4]));
        console.log(this.newIntersection([1,2,2,1], [1,2]));
        console.log(this.newIntersection([2,1], [1,2]));
    }
}