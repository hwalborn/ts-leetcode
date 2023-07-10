import { ISolution } from "../../utils/ISolution";

/**
 * Ok, so I feel like we need to make a dictionary, but nah
 * [7,1,5,3,6,4] -> their option, buy on 1, sell on 5
 * [7,3,15,1,6,3] -> we would want 1, 2 because that profit is 12
 * So maybe we could iterate over
 *   holding the current lowest value
 *   hold the highest profit
 *   update the lowest value accordingly
 * 
 */

export default class buyAndSell implements ISolution {
    maxProfit(prices: number[]): number {
        let highestProfit = 0;
        let lowestValue;
        for(let i = 0; i < prices.length; i++) {
            const currentPrice = prices[i];
            if (lowestValue === undefined || currentPrice < lowestValue) {
                lowestValue = currentPrice;
            }
            const currentProfit = currentPrice - lowestValue;
            if (currentProfit > highestProfit) {
                highestProfit = currentProfit;
            }
        }
        return highestProfit;
    }
    solve() {
        // console.log(this.maxProfit([7,1,5,3,6,4]));
        // console.log(this.maxProfit([7,3,15,1,6,3]));
        // console.log(this.maxProfit([7,6,4,3,1]));
        console.log(this.maxProfit([2,1,2,1,0,1,2]));
    };
}