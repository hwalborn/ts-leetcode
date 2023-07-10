import { ISolution } from "../../utils/ISolution";

export default class IsPerfectSquare implements ISolution {
    isPerfectSquare(num: number): boolean {
        let difference = num;
        let subtractor = 1;
        while (difference > 0)  {
            difference -= subtractor;
            subtractor += 2;
        }
        return difference >= 0;
    }

    solve() {
        console.log(this.isPerfectSquare(14));
        console.log(this.isPerfectSquare(16));
        console.log(this.isPerfectSquare(1));
        console.log(this.isPerfectSquare(123));
    };
}