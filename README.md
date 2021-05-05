# Storing a Web3 Contract in a Vuex Store

- Install MetaMask: https://metamask.io/
- Web3 Contract docs: https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html

### So...

Why does this:

https://github.com/mktcode/web3-vuex-test/blob/c12fb4411ec25d4376502f80a72c3a540af541d9/store/index.js#L21-L28

cause this:

![ezgif-1-1abe774e0c61](https://user-images.githubusercontent.com/6792578/117126505-2196d000-ad9b-11eb-9142-8872a1d3b7dd.gif)

`[vuex] do not mutate vuex store state outside mutation handlers.`

?

First initialization works but second one causes multiple such errors.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
