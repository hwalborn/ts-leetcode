import { ISolution } from "../../utils/ISolution";

export default class ReverseVowels implements ISolution {

    reverseVowels(s: string): string {
        const arr = s.split('');
        let i = 0;
        let j = arr.length - 1;
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        while (i <= j) {
            let leftVowel = vowels.includes(arr[i].toLowerCase());
            let rightVowel = vowels.includes(arr[j].toLowerCase());
            if (leftVowel && rightVowel) {
                const placeholder = arr[i];
                arr[i] = arr[j];
                arr[j] = placeholder;
                leftVowel = false;
                rightVowel = false;
            }
            if (!leftVowel) {
                i++;
            }
            if (!rightVowel) {
                j--;
            }
        }
        return arr.join('');
    }

    solve() {
        console.log(this.reverseVowels('leetcode'));
    }
}