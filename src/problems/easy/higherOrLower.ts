import { ISolution } from "../../utils/ISolution";

/**
 * I feel like this is just a binary search
 * start with low -> low = 0;
 * next we go high -> high = n;
 * find mid... if guess() returns -1, high = mid;
 * if guess() returns 0, low = mid + 1;
 * if guess() returns 0 -> return n;
 */

const guess = (num: number) => {
    const pick = 1;
    if (pick === num) {
        return 0;
    } else if (num > pick) {
        return -1;
    } else {
        return 1;
    }
}

export default class HigherOrLower implements ISolution {
    guessNumber(n: number): number {
        let high = n;
        let low = 0;
        if (guess(n) === 0) {
            return n;
        }
        while (high > low) {
            const mid = Math.floor((high + low) / 2);
            const results = guess(mid);
            if (results === 0) {
                return mid;
            } else if ( results === -1) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return 0;
    }

    solve() {
        console.log(this.guessNumber(1));
    };
}