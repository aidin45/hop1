import Transaction from 'src/models/Transaction'

export function createTransaction(tx: Transaction | any, sourceNetwork, destNetwork, sourceToken) {
  return new Transaction({
    hash: tx?.hash,
    networkName: sourceNetwork?.slug || sourceNetwork,
    destNetworkName: destNetwork?.slug || destNetwork,
    token: sourceToken,
  })
}
