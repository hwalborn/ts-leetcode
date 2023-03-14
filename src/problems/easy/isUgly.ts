import { ISolution } from "../../utils/ISolution";

export default class IsUgly implements ISolution {
    isUgly(n: number): boolean {
        if (n <= 0) {
            return false;
        } else if (n === 1) {
            return true;
        }
        while(n > 1) {
            if (n % 5 === 0) {
                n = n / 5;
            } else if (n % 3 === 0) {
                n = n / 3;
            } else if (n % 2 === 0) {
                n = n /2;
            } else {
                return false;
            }
        }
        return true;
    }
    solve() {
        console.log(this.isUgly(18));
    };
}