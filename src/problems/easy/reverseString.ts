import { ISolution } from "../../utils/ISolution";

export default class ReverseString implements ISolution {

    reverseString(s: string[]): void {
        let i = 0;
        let j = s.length - 1;
        while (i <= j) {
            const k = s[i];
            s[i] = s[j];
            s[j] = k; 
            i++;
            j--;
        }
    }

    solve() {
        const bah = ["h","e","l","l","o"];
        this.reverseString(bah);
        console.log(bah);
    }
}