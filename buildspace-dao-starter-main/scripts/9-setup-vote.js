/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-13 15:57:29
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-13 17:44:26
 * @FilePath: \buildspace-dao-starter-main\scripts\9-setup-vote.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import sdk from "./1-initialize-sdk.js";

// This is our governance contract.
const vote = sdk.getVote("0x389A9ccF40aFBEe655E26ada3B6eE5004C49adE9");

// This is our ERC-20 contract.
const token = sdk.getToken("0xbaaB5daa671439058F3264272b6b656c10d63d2a");

(async () => {
    try {
        // Give our treasury the power to mint additional token if needed.
        await token.roles.grant("minter", vote.getAddress());

        console.log(
        "Successfully gave vote contract permissions to act on token contract"
        );
    } catch (error) {
        console.error(
        "failed to grant vote contract permissions on token contract",
        error
        );
        process.exit(1);
    }

    try {
        // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
        // 获取我们钱包中的总代币数量
        const ownedTokenBalance = await token.balanceOf(
        process.env.WALLET_ADDRESS
        );

        // Grab 90% of the supply that we hold.
        const ownedAmount = ownedTokenBalance.displayValue;
        const percent90 = Number(ownedAmount) / 100 * 90;

        // Transfer 90% of the supply to our voting contract.
        // 我们拿出我们拥有的总供应量，获得其中的 90%，然后使用 . 将这 90% 转移到投票模块
        await token.transfer(
        vote.getAddress(),
        percent90
        );

        console.log("✅ Successfully transferred " + percent90 + " tokens to vote contract");
    } catch (err) {
        console.error("failed to transfer tokens to vote contract", err);
    }
})();