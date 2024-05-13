import axios from "axios";
import {metamaskModule} from "./metamaskModule";

export const authModule = {
    state: () => ({
        account: {
            wallet: '',
            contract: '',
            sublevel: 1,
            number: 1,
            name: ''
        },
        isExist: false,
        imageCharacter: '',
        reg: Boolean,
    }),
    getters: {

    },

    mutations: {
        setAccount(state, account){
            state.account = account;
        },
        setIsExist(state, isExist){
            state.isExist = isExist;
        },
    },

    actions: {
        async auth({state, commit}){
            await this.dispatch('connectMeta')
            let wallet =this.state.metamask.wallet
            await axios.post('http://127.0.0.1:8000/login/', {
                'wallet': wallet
            }).then(async response => {
                commit('setIsExist', true)
                state.account.wallet = wallet
                state.account.number = response.data.number
                state.account.name = response.data.name
                state.imageCharacter = 'data:image/png;base64,' + response.data.image
            }).catch(()=>{
                state.reg = true
            })
        },

        async register({state, commit}, character){
            await this.dispatch('connectMeta')
            let wallet =this.state.metamask.wallet
            axios.post('http://127.0.0.1:8000/register/', {
                'wallet': wallet,
                'contract': 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
                'character': character
            }).then(async response => {
                commit('setIsExist', true)
                state.account.wallet = wallet
                state.account.name = character
                state.reg = false
                console.log(state.reg)
                console.log('click')
            }).catch(err=>{
                console.log(err)
            })
        },

        logout({state, commit}){
            commit('setIsExist', false)
            for (let member in state.account) delete state.account[member];
            delete state.imageCharacter
        }


    },
    namespace: true

}