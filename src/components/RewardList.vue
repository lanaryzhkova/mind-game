<template>
<div class="wrapper">
  <div class="cup">
    <img src="/src/assets/images/cup.svg" alt="">
  </div>
  <div class="rewards">
    <reward-card v-for="val in jsons"
        :caption=val.NFTName :img=image+val.base64 />
  </div>
</div>
</template>

<script>

import RewardCard from "./UI/RewardCard.vue";
import {getItemsByOwner} from "/src/contracts/deploy.js";
import {mapState} from "vuex";
import axios from "axios";


export default {
  name: "RewardList",
  components: {
    RewardCard
  },
  data(){
    return{
      rewards: [],
      hash:'',
      jsons: [],
      json: Object,
      image: 'data:image/png;base64,'
    }
  },
  computed: {
    ...mapState({
      isExist: state => state.auth.isExist,
    })
  },
  async mounted() {
    if(!this.$store.state.isExist){
      this.rewards = await getItemsByOwner();
      for(let i=0; i<this.rewards.length; i++){
        this.hash = this.rewards[i][2];
        await this.getJson(this.hash)
        console.log(this.hash)
      }
    }
  },
  methods: {
    async getJson(ipfsHash){
      let response = await axios.post(`http://127.0.0.1:8000/get-json/`, {
        'hash': ipfsHash,
      }).then(response=>{

        this.jsons.push(response.data)
      }).catch(err=>{
      })
    },
  }
}
</script>

<style scoped lang="scss">
  .wrapper{
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
    border: 5px solid #2BD999;
    border-radius: 30px;
    flex-wrap: wrap;

      .cup{
        width: 103px;
        height: 103px;
      }

      .rewards{
        padding: 10px;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }
  }
</style>