/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-13 15:57:29
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-13 17:04:55
 * @FilePath: \buildspace-dao-starter-main\scripts\5-deploy-token.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 部署erc20 标准代币
import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
    try {
        // Deploy a standard ERC-20 contract.
        const tokenAddress = await sdk.deployer.deployToken({
            // What's your token's name? Ex. "Ethereum"
            name: "NarutoDAO Governance Token",
            // What's your token's symbol? Ex. "ETH"
            symbol: "HOKAGE",
            // This will be in case we want to sell our token,
            // because we don't, we set it to AddressZero again.
            primary_sale_recipient: AddressZero,
        });

        console.log(
        "✅ Successfully deployed token module, address:",
        tokenAddress,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();