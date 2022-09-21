// 设置 NFT 数据
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x2966cE4608208e7a55F64EcC479244207f0C965a");

(async () => {
    try {
        await editionDrop.createBatch([
        {
            name: "Man City 10",
            description: "This NFT will give you access to NarutoDAO!",
            image: readFileSync("scripts/assets/grealish.jpg"),
        },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();