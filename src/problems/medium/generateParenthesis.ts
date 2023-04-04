import { ISolution } from "../../utils/ISolution";

/**
 * Ok, so this one we'll be given a number. I think that we should start with one parenthesis
 * And branch out. We keep opening/closing until it's impossible to close. What makes it impossible to
 * close? We've run out of the number of parenthesis to use and we can't close it. Once we get
 * to a valid set that's n*2 length, we're set... Push it into a return array
 * 
 * UPDATE -> I looked at the comments/discussion because I needed some juice
 * 
 * Looks like we want to use recursion, I mean I feel like it's similar to what I was thinking.
 * We branch out for each way and add parenthesis... We keep a count of the parenthesis that we've added
 * For instance if we add a left parenthesis, we'll need to add a right one and remove a left one
 * 
 * The break is once we have gone through all the parenthesis.
 */

export default class GenerateParenthesis implements ISolution {
    generateParenthesis(n: number): string[] {
        const list: string[] = [];
        if (n <= 0) {
            return list;
        }
        this.buildParenthesis(n, 0, '', list);
        return list;
    }

    buildParenthesis(left: number, right: number, result: string, list: string[]): void {
        if ( left === 0 && right === 0) {
            list.push(result);
            return;
        }
        if (left > 0) {
            this.buildParenthesis(left -1, right + 1, result + '(', list);
        }
        if (right > 0) {
            this.buildParenthesis(left, right -1, result + ')', list);
        }
    }

    solve() {
        console.log(this.generateParenthesis(3));
    };
}