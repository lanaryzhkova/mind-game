import axios from "axios";
import {getItemsByOwner} from "/src/contracts/deploy.js";


export const getModule = {
    state: () => ({
        jsons: [],
        theorys: [],
        levels: [],
        characters: [],
        reward: {
            hash: ''
        },
        error: false
    }),

    getters: {

    },

    mutations: {
        setTheory(state, theorys){
            state.theorys = theorys;
        },
        setLevels(state, levels){
            state.levels = levels;
        },
        setCharacters(state, characters){
            state.characters = characters;
        },
        setReward(state, reward){
            state.reward = reward;
        },
        setError(state, error){
            state.error = error;
        }
    },

    actions: {
        async getTheory({state, commit}){
            let temp = []
            let response = await axios.get(`http://127.0.0.1:8000/get-theory/`).then(response => {
                commit('setTheory', response.data)
            })
            return state.theorys
        },

        async getLevel({state, commit}){
            let temp = []
            let response = await axios.post(`http://127.0.0.1:8000/get-level/`, {
                'sublevel': this.state.auth.account.sublevel
                }).then(response => {
                commit('setLevels', response.data)
            }).catch(()=>{
                console.log(this.state.auth.account.sublevel)
            })

            return state.levels
        },

        async sendAnswer({state, commit}, data){
            let response = await axios.post(`http://127.0.0.1:8000/check-answer/`, {
                'answer': data.answer,
                'wallet': data.wallet
            }).then(response=>{
                // this.state.auth.account.number = response.data.number;
                // commit('setReward', response.data)
                state.reward.hash = response.data.ipfsHash

            }).catch(err=>{
                commit('setError', true)
            })
        },

        async getRewards({state, commit}){
            state.rewards = await getItemsByOwner();
            for(let i=0; i<state.rewards.length; i++){
                let hash = state.rewards[i][2];
                let response = await axios.post(`http://127.0.0.1:8000/get-json/`, {
                    'hash': hash,
                }).then(response=> {
                    state.jsons.push(response.data)
                    return state.jsons;
                })
        }
        }
    },

    async getJson(ipfsHash){
        let response = await axios.post(`http://127.0.0.1:8000/get-json/`, {
            'hash': ipfsHash,
        }).then(response=>{
            this.jsons.push(response.data)
            return this.jsons;
        }).catch(err=>{
            console.log('error')
        })
    },

    namespace: true,
}