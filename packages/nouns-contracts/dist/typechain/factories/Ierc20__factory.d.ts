import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Ierc20 } from "../Ierc20";
export declare class Ierc20__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): Ierc20;
}
