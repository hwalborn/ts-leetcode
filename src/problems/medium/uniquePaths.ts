import { ISolution } from "../../utils/ISolution";

/**
 * I definitely think this is a time to use graphs
 * Throw the numbers into an array
 * while the numbers are > 0 count
 * decrease each one
 * Or like hmmm
 * Path right and path left
 * I think we would use recursion
 * Base case is that both numbers are 0 -> what do we return?
 */

export default class UniquePaths implements ISolution {
    uniquePaths(m: number, n: number): number {
        const right = m - 1;
        const down = n - 1;
        return this.factorial(right + down) / (this.factorial(down) * this.factorial(right));
        // This would've worked if I had memoized!
        // if(m <= 1 && n <= 1) {
        //     return 1;
        // } else if (m <= 1) {
        //     return this.uniquePaths(m, n -1);
        // } else if (n <= 1) {
        //     return this.uniquePaths(m - 1, n);
        // }
        // const totalNumber = this.uniquePaths(m - 1, n) + this.uniquePaths(m, n - 1);
        // return totalNumber;
    }

    factorial(n: number): number {
        if (n <= 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }
    

    solve() {
        // console.log(this.uniquePaths(7, 3));
        console.log(this.uniquePaths(1, 2));
        // console.log(this.factorial(2));
    }
}