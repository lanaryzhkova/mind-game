<template>
  <div class="wrapperr" v-if="show">
    <div class="inside" v-if="!error">
      <p>Ура!</p>
      <p>{{ this.result }}</p>
   <div class="reward">
     <img src="../assets/images/comleted.svg" alt="">
     <div class="bonus-theory" v-if="reward.topic!=='none'">
       <p>+</p>
       <img src="/src/assets/images/theory.svg" alt="">
     </div>
   </div>
    <my-button fontSize="20px" backgButton="white" @click="claimReward"><p>Получить награду!</p></my-button>
  </div>
    <div class="inside" v-if="error">
      <p>К сожалению,</p>
      <p>этот ответ неправильный:(</p>
      <div class="reward">
        <img src="" alt="">
<!--        <img src="D:\WS\mind-game\src\assets\images\png-transparent-face-sadness-smiley-emoticon-sad-emoji-people-desktop-wallpaper-smile 1.png" alt="">-->
      </div>
      <my-button fontSize="20px" backgButton="white" @click="tryAgain"><p>Попробовать ещё раз</p></my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/Button.vue";
import {awardItem, getItemsByOwner} from "/src/contracts/deploy.js";
import {mapState} from "vuex";

export default {
  name: "LevelResult",
  components: {MyButton},
  data(){
    return{
      result: '',
    }
  },
  props: {
    reward: {},
    error: Boolean,
    show:{
      type: Boolean,
      default: false
    },
  },
  methods: {
    hideDialog(){
      this.$emit('update:show', false)
    },

    claimReward(){
      if((parseInt(this.$route.params.id))=== this.levels.length){
        this.result = 'Поздравляем, вы прошли игру!'
        awardItem(this.hash)
        this.$router.push('/levels')
      } else{
        this.result = 'Вы хорошо поработали!'
        if(this.hash!=='NoReward'){
          awardItem(this.hash)
        }
      }
      this.hideDialog();
    },

    tryAgain(){
      this.hideDialog();
    }
  },
  computed: {
    ...mapState({
      levels: state => state.get.levels,
      hash: state => state.get.reward.hash,
    })
  }
}
</script>

<style scoped lang="scss">
  .wrapperr{
    position: fixed; /* фиксированное положение */
    top: 25%;
    left: 33%;
    width: 500px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #CEC8F9;
    border-radius: 50px;
    padding: 30px 10px;
    z-index: 10000;
    gap: 40px;
    box-shadow: 10px 5px 5px gray;

    .inside{
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
    }

    p{
      font-weight: 700;
      font-size: 30px;
    }

    .reward{
      display: flex;
      gap: 24px;

      .bonus-theory{
        display: flex;
        align-items: center;
        gap: 24px;
      }

      img{
        width: 100px;
        height: 100px;
        margin: 0 auto;
      }
    }
  }
</style>
