<template>
  <div class="auth" v-if="!isExist">
    <p>
      Добро пожаловать в Игру Разума!
    </p>
    <my-button fontSize="20px" backgButton="white" @click="connect">Войти!</my-button>
  </div>
  <div class="auth" v-if="!reg">
    <p>
     Вы у нас первый раз! Выберите кота:
    </p>
    <div class="buttons">
      <button class="accountButton" @click="setCharacter('Пока котёнок')">
        <img :src=this.first alt="">
        <p>Пока котёнок <br>^-^</p>
      </button>
      <button class="accountButton" @click="setCharacter('Уже серьёзный кот')">
        <img :src=this.second alt="">
        <p>Уже серьёзный кот!</p>
      </button>
    </div>
    <my-button fontSize="20px" backgButton="white" @click="register">Зарегистрироваться!</my-button>
  </div>
</template>

<script>
import MyButton from "./UI/Button.vue";
import {mapState} from "vuex";
import {first, second} from "/src/stores/characters.js";

export default {
  name: "AuthDialog",
  components: {MyButton},
  data(){
    return{
      first: 'data:image/png;base64,' + first,
      second: 'data:image/png;base64,' + second,
      character: ''
    }
  },
  methods: {
    async connect(){
      await this.$store.dispatch('auth')
      console.log('auth')
    },

    async register(){
      if(this.character !== ''){
        await this.$store.dispatch('register', this.character)
      }

    },

    setCharacter(id){
      this.character = id;
    }
  },
  computed: {
    ...mapState({
      connected: state => state.metamask.connected,
      isExist: state => state.auth.isExist,
      reg: state => state.auth.reg,
      imageCharacter: state => state.auth.imageCharacter,
    })
  }
}
</script>

<style scoped lang="scss">
  .auth{
    position: fixed; /* фиксированное положение */
    top: 30%;
    width: 600px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #52DFAB;
    border-radius: 50px;
    padding: 45px 76px;
    gap: 30px;
    z-index: 10000;
    p{
      font-weight: 700;
      font-size: 30px;
    }
  }

  img{
    width: 120px;
    height: 120px;
    cursor: pointer;
  }

  .accountButton{
    width: 150px;
    height: fit-content;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    background: transparent;

      p{
        font-size: 18px;
      }
  }

  .buttons{
    display: flex;
    gap: 24px;
  }
</style>