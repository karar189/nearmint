/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

import { Buffer } from 'buffer';

window.Buffer = Buffer;

const THIRTY_TGAS = '30000000000000';
const ONEF_TGAS = '150000000000000';

export class Mint {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse
  }

  async tokens_left() {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: "tokens_left", args: {} })
  }

  async nft_metadata() {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: "nft_metadata", args: {} })
  }

  async nft_tokens_for_owner() {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: "nft_tokens_for_owner", args: { account_id : this.wallet.accountId } })
  }

  async nft_mint_one() {
    const deposit = '6700000000000000000000';
    return await this.wallet.callMethod({ contractId: this.contractId, method: "nft_mint_one", args: {}, ONEF_TGAS, deposit });
  }

}