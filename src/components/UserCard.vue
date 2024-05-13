<template>
<div class="wrapper">
  <div class="user">
    <img :src=imageCharacter alt="">
    <p style="text-align: center"><strong>{{account.name}} ({{ (account.wallet || '').slice(0, 6) }}...{{(account.wallet || '').slice(-3)}})</strong></p>
    <p>Уровень {{ account.number }}/10</p>
  </div>
  <button @click="logout">
    <div class="logout">
      <p>выйти <br> из аккаунта</p>
      <img src="/src/assets/images/logout.svg" alt="">
    </div>
  </button>
</div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "UserCard",
  props: {
    name: '',
    level: '',
  },
  data(){
    return{
    }
  },
  methods: {
    ...mapActions({
      logout: "logout",
    }),
  },
  computed: {
    ...mapState({
      connected: state => state.metamask.connected,
      wallet: state => state.metamask.wallet,
      account: state => state.auth.account,
      imageCharacter: state => state.auth.imageCharacter
    })
  },
}
</script>

<style scoped lang="scss">
  .wrapper{
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%;
    justify-content: center;
    padding: 42px 0 42px 0;
    button{
      padding: 0;
      border: none;
      background: transparent;
      height: fit-content;
    }
    .user{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      grid-column: 2/3;

      img{
        width: 150px;
        height: 150px;
      }

      p{
        font-size: 25px;
      }
    }

    .logout{
      display: flex;
      justify-content: right;
      align-items: center;
      height: fit-content;
      gap: 16px;
      cursor: pointer;

      img{
        width: 34px;
        height: 34px;
      }

      p {
        width: fit-content;
        font-size: 20px;
      }
    }
  }

</style>