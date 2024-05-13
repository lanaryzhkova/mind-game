import {ethers} from "ethers";


export const metamaskModule = {
    state: () => ({
        connected: false,
        wallet: '',
        signer: ''
    }),

    getters: {

    },

    mutations: {
        setConnected (state, bool){
            state.connected = bool;
        },
        setWallet (state, wallet){
            state.wallet = wallet;
        },
        setSigner (state, signer){
            state.signer = signer;
        }
    },

    actions: {
        async connectMeta({commit}){
            try{
                let provider = new ethers.BrowserProvider(window.ethereum);
                let accounts = await provider.send("eth_requestAccounts", []);
                commit('setWallet', accounts[0]);
                commit('setSigner', provider.getSigner());
                commit('setConnected', true)
            }
            catch (e) {
                console.log(e)
            }
        }
    },
    namespace: true
}