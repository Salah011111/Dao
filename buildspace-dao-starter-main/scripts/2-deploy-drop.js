// 创建一个ERC-1155 集合
// 通过向rinkeby测试网部署合约可得到 部署的合约地址
import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
    try {
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            // The collection's name, ex. CryptoPunks
            name: "NarutoDAO Membership",
            // A description for the collection.
            description: "A DAO for fans of Naruto.",
            // The image that will be held on our NFT! The fun part :).
            image: readFileSync("scripts/assets/naruto.jpg"),
            // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the contract.
            // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
            // you can set this to your own wallet address if you want to charge for the drop.
            primary_sale_recipient: AddressZero,
        });

        // this initialization returns the address of our contract
        // we use this to initialize the contract on the thirdweb sdk
        const editionDrop = sdk.getEditionDrop(editionDropAddress);

        // with this, we can get the metadata of our contract
        const metadata = await editionDrop.metadata.get();

        console.log(
        "✅ Successfully deployed editionDrop contract, address:",
        editionDropAddress,
        );
        console.log("✅ editionDrop metadata:", metadata);
    } catch (error) {
        console.log("failed to deploy editionDrop contract", error);
    }
})();