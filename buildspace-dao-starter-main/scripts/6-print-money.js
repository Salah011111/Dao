/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-13 15:57:29
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-13 17:10:54
 * @FilePath: \buildspace-dao-starter-main\scripts\6-print-money.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 创建你的代币供应
import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0xbaaB5daa671439058F3264272b6b656c10d63d2a");

(async () => {
    try {
        // What's the max supply you want to set? 1,000,000 is a nice number!
        const amount = 1_000_000;
        // Interact with your deployed ERC-20 contract and mint the tokens!
        await token.mintToSelf(amount);
        const totalSupply = await token.totalSupply();

        // Print out how many of our token's are out there now!
        console.log("✅ There now is", totalSupply.displayValue, "$HOKAGE in circulation");
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();