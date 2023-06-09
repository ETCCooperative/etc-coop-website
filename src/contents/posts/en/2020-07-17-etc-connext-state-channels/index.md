---
id: "2020-07-17-etc-connext-state-channels"
title: "Connext State Channels on ETC"
author: Yaz Khoury
featuredImage: etc_connext.png
tags: [layer2]
---

We are pleased to announce that Connext State Channels smart contracts have been deployed on the Ethereum Classic mainnet chain and that our API is currently available to be used by the public!

You can get started on integrating the ETC Connext endpoint as a state channel for your ETC dApp.

State channels allow for a host of layer-2 solutions that can perform transaction-heavy operations that settle later on the main chain. They allow for blockchain scalability by absorbing the bulk of transactions so the state of the blockchain doesn’t grow as fast as it currently is.

You can get started with the ETC Connext node by using the following endpoint in your dApp: “https://indra.etcstatechannel.com/api”

## State Channels

State Channels are essentially like the Lightning Network of EVM-based chains and networks. A state channel allows for multiple transactions off-chain that have final settlement on chain after. This allows for much faster transaction that is normally allowed on-chain. For example, let’s say you’re buying coffee. You only own gold bars which you want to use for transacting. It’ll take the cafe a long time to weigh the gold and convert its weigh to equivalent USD price in order to properly value how much its worth for the transaction. A cafe would certainly prefer a credit card transaction or cash. The gold in this example is basically you using on-chain payments like say Bitcoin or ETC. You want faster payments for quick transactions like a cup of coffee than using an on-chain solution.

You need a payment network like the Lightning Network.

Connext State Channel is a fast payment network that now works with Ethereum Classic.

## Making a Connection

We must first ensure we have Node installed and that the connext client is installed with:

```
npm install @connext/client
```

Then, we make a javascript file that contains our logic for instantiating a channel

```
const connext = require('@connext/client');
const eth = require('ethers')

var channel;
const getChannel = async () => {
  if (channel) {return channel}
  channel = await connext.connect({
    ethProviderUrl: "https://www.ethercluster.com/etc",
    signer: eth.Wallet.createRandom().privateKey,
    nodeUrl: "https://indra.etcstatechannel.com/api",
  });

  console.log(`Client created successfully!`);
  console.log(` - Public Identifier: ${channel.publicIdentifier}`);

  return channel;
}

module.exports = { getChannel }
```

Here, we are using the Connext Client to create a channel that connects to the Connext ETC node.

Our const `getChannel` creates a Connext channel with the properties of the ETC endpoint provided `https://indra.etcstatechannel.com/api` as well as our ETHProvider being the Ethercluster ETC endpoint: `https://www.ethercluster.com/etc`

For the purposes of this demo, we create a random wallet as our signer.

We then log the public identifier of the created channel of that client.

In another file for our main logic, we create a simple Express.js server that instantiates the client.

```
const { getChannel } = require('./channel')
const express = require('express')

const app = express()

const port = process.env.PORT || '8080'

app.all('*', (req, res) => {
  res.status(200).send('OK')
})

app.listen(port, async () => {
  await getChannel()
})
```

Here, we are importing our previous file `channel.js` and importing Express.js to serve on port 8080.

When we run it, we get the following output:

```
$ node index.js
2020-07-14T21:14:27.642Z [ConnextConnect] Called connect with {
  "nodeUrl": "https://indra.etcstatechannel.com/api",
  "ethProviderUrl": "https://www.ethercluster.com/etc"
}, and signer using private key
2020-07-14T21:14:27.645Z [ConnextConnect] Using local store containing 0 channels
2020-07-14T21:14:28.159Z [NodeApiClient] No messagingUrl provided, using nats://indra.etcstatechannel.com:4222 derived from nodeUrl https://indra.etcstatechannel.com/api
2020-07-14T21:14:28.465Z [CFCore] Signer address: 0xFA0de1C81598a2321CD83C28A8e1d91c67934d27 | public id: indra66CbS48Fp1mnnaRdbpcgwwdYJsNBUgxt6Jigy3GLrsNLAMSu4d
2020-07-14T21:14:28.466Z [CFCore] Given store contains 0 channels: []
2020-07-14T21:14:28.530Z [NodeApiClient] Node responded to indra66CbS48Fp1mnnaRdbpcgwwdYJsNBUgxt6Jigy3GLrsNLAMSu4d.indra6pW5E6Av2DZaWBBHjYUM3oFTFF3kSRMpYWeeUxeSUJr2BLc8UB.channel.get request in 62 ms
2020-07-14T21:14:28.624Z [CF-SetupProtocol] [0x460918329C71bf1b2831BA01c9f3115829BeD1cE] Response started
2020-07-14T21:14:28.663Z [CF-SetupProtocol] [0x460918329C71bf1b2831BA01c9f3115829BeD1cE] Verified initator's sig in 24 ms
2020-07-14T21:14:28.771Z [CF-SetupProtocol] [0x460918329C71bf1b2831BA01c9f3115829BeD1cE] Response finished in 147 ms
2020-07-14T21:14:28.772Z [CF-RequestHandler] Event for setup protocol was processed in 150 ms
2020-07-14T21:14:28.887Z [NodeApiClient] Node responded to indra66CbS48Fp1mnnaRdbpcgwwdYJsNBUgxt6Jigy3GLrsNLAMSu4d.indra6pW5E6Av2DZaWBBHjYUM3oFTFF3kSRMpYWeeUxeSUJr2BLc8UB.channel.create request in 356 ms
2020-07-14T21:14:29.301Z [ConnextConnect] Done creating connext client
2020-07-14T21:14:29.327Z [NodeApiClient] Node responded to indra66CbS48Fp1mnnaRdbpcgwwdYJsNBUgxt6Jigy3GLrsNLAMSu4d.indra6pW5E6Av2DZaWBBHjYUM3oFTFF3kSRMpYWeeUxeSUJr2BLc8UB.channel.get request in 25 ms
2020-07-14T21:14:29.327Z [ConnextConnect] Channel is available with multisig address: 0x460918329C71bf1b2831BA01c9f3115829BeD1cE
2020-07-14T21:14:29.329Z [CF-GetFreeBalanceState] Executing with params: {"multisigAddress":"0x4609..D1cE","assetId":"0x0000..0000"}
2020-07-14T21:14:29.331Z [CF-RpcRouter] Processed chan_getFreeBalanceState method in 3 ms
2020-07-14T21:14:29.332Z [CF-GetStateChannel] Executing with params: {"multisigAddress":"0x4609..D1cE"}
2020-07-14T21:14:29.335Z [ConnextConnect] Cleaning up registry apps
2020-07-14T21:14:29.335Z [ConnextClient] removeHangingProposalsByDefinition starting...: 0x1EaAfCcC1D9A5f0018eB5953007A35F149d0d761,0x708DC1570F7063DE105285765B811ab501542e75,0x7e6c3dbBC01d5f7045D5a8325Abfd985616E696c,
2020-07-14T21:14:29.335Z [CF-GetProposedAppInstances] Executing with params: {"multisigAddress":"0x4609..D1cE"}
2020-07-14T21:14:29.336Z [ConnextClient] removeHangingProposalsByDefinition complete!
2020-07-14T21:14:29.336Z [ConnextClient] uninstallAllAppsByDefintion starting...: 0x1EaAfCcC1D9A5f0018eB5953007A35F149d0d761,0x7e6c3dbBC01d5f7045D5a8325Abfd985616E696c
2020-07-14T21:14:29.336Z [CF-GetAppInstances] Executing with params: {"multisigAddress":"0x4609..D1cE"}
2020-07-14T21:14:29.337Z [ConnextClient] uninstallAllAppsByDefintion complete!
2020-07-14T21:14:29.337Z [ConnextClient] uninstallFinalizedApps starting...
2020-07-14T21:14:29.338Z [CF-GetAppInstances] Executing with params: {"multisigAddress":"0x4609..D1cE"}
2020-07-14T21:14:29.338Z [ConnextClient] uninstallFinalizedApps complete!
2020-07-14T21:14:29.338Z [ConnextClient] uninstallExpiredApps starting...
2020-07-14T21:14:29.589Z [CF-GetAppInstances] Executing with params: {"multisigAddress":"0x4609..D1cE"}
2020-07-14T21:14:29.591Z [CF-RpcRouter] Processed chan_getAppInstances method in 2 ms
2020-07-14T21:14:29.591Z [ConnextClient] uninstallExpiredApps complete!
2020-07-14T21:14:29.592Z [CF-GetAppInstances] Executing with params: {"multisigAddress":"0x4609..D1cE"}
2020-07-14T21:14:29.594Z [CF-GetAppInstances] Executing with params: {"multisigAddress":"0x4609..D1cE"}
2020-07-14T21:14:29.595Z [ConnextConnect] Cleaned up registry apps
2020-07-14T21:14:29.595Z [ConnextConnect] Reclaiming pending async transfers
2020-07-14T21:14:29.595Z [ConnextClient] Attempting to install pending transfers
2020-07-14T21:14:29.619Z [NodeApiClient] Node responded to indra66CbS48Fp1mnnaRdbpcgwwdYJsNBUgxt6Jigy3GLrsNLAMSu4d.indra6pW5E6Av2DZaWBBHjYUM3oFTFF3kSRMpYWeeUxeSUJr2BLc8UB.transfer.install-pending request in 24 ms
2020-07-14T21:14:29.619Z [ConnextClient] Installed 0 transfers, should unlock automatically
2020-07-14T21:14:29.620Z [ConnextConnect] Reclaimed pending async transfers
2020-07-14T21:14:29.620Z [ConnextConnect] Checking in with node
2020-07-14T21:14:29.644Z [NodeApiClient] Node responded to indra66CbS48Fp1mnnaRdbpcgwwdYJsNBUgxt6Jigy3GLrsNLAMSu4d.indra6pW5E6Av2DZaWBBHjYUM3oFTFF3kSRMpYWeeUxeSUJr2BLc8UB.client.check-in request in 24 ms
2020-07-14T21:14:29.645Z [ConnextConnect] Checked in with node
2020-07-14T21:14:29.646Z [ConnextConnect] Client successfully connected in 2004 ms
Client created successfully!
 - Public Identifier: indra66CbS48Fp1mnnaRdbpcgwwdYJsNBUgxt6Jigy3GLrsNLAMSu4d
```

The final outputs showed that a client connection was successfully created!

## Next Steps

The Connext team has included a wealth of examples and applications to inspire you.

There’s a [DaiCard](https://github.com/connext/indra/tree/staging/modules/daicard) example, which is also live for now on our website but will need to be removed soon to avoid confusion.

There’s also an example of a [Twitter Tipping bot](https://gitlab.com/bohendo/tipdai/-/tree/master/src) with Dai that you can refer to for building state channels for ETC dapps now.

You can do a lot of things with the Connext client connection you established. You can deposit into the Connext client instance. You can transfer ETC to a different Connext client channel.

To find those, you can reference the client’s public identifier as shown in the logs above and the code via `channel.publicIdentifier`.

For more examples and what you can do with the API, please checkout the [Connext documentations](https://docs.connext.network/en/latest/).
