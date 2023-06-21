import { ISolution } from "../../utils/ISolution";

function guess(n: number): number {
    if (n === 6) {
        return 0
    } else if (n > 6) {
        return -1;
    } else {
        return 1;
    }
}

export default class GuessNumber implements ISolution {
    guessNumber(n: number): number {
        let correct = null;
        let min = 0;
        let max = n;
        while (true) {
            const mid = this.findMidPoint(min, max);
            console.log('mid', mid);
            correct = guess(mid);
            if (correct === 1) {
                min = mid;
            } else if (correct === -1) {
                max = mid;
            } else {
                return mid;
            }
        }
    }

    findMidPoint(min: number, max: number) {
        return Math.floor(min + ((max - min) / 2));
    }

    solve() {
        console.log(this.guessNumber(7));
        // this.guessNumber(10).then(console.log);
    }
}