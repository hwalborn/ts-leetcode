import { ISolution } from "../../utils/ISolution";
// 1211
// one 1 + one 2 + two 1 -> 111221
// 111221
// three 1 + two 2 + one 1 -> 312211

/**
 * we need a counter that starts at 1, and say that while it is less than or equal to n
 * We should build a string.
 * We pass in '1' as the first part of the string,
 * then 
 * So this build string function... takes a string as a param
 * 1.) I think we have a count variable set to 0
 * 2.) split on ('');
 * 3.) loop over the array
 * 4.) check if i === 0 or arr[i] === previous num
 * 5.) if so? increment count
 * 6.) else ? add the count to a building string and set count to 0;
 */

export default class CountAndSay implements ISolution {
    countAndSay(n: number): string {
        let i = 2;
        let builtString = '1';
        while (i <= n) {
            builtString = this.buildString(builtString);
            i++;
        }
        return builtString;
    }

    buildString(str: string): string {
        if (str.length === 1) {
            return str + str;
        }
        let builder = '';
        let count = 0;
        for(let i = 0; i < str.length; i++) {
            if (i === 0 || str[i] === str[i-1]) {
                count++;
            } else {
                builder += `${count}${str[i - 1]}`;
                count = 1;
            }
        }
        if (count > 0) {
            builder += `${count}${str[str.length-1]}`;
        }
        return builder;
    }

    solve() {
        console.log(this.countAndSay(6));
    };
}