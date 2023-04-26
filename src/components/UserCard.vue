<template>
<div class="wrapper">
  <div class="user">
    <img :src=img alt="">
    <p><strong>{{name}} ({{ wallet.slice(0, 6) }}...{{wallet.slice(-3)}})</strong></p>
    <p>Уровень {{ level }}/10</p>
  </div>
  <div class="logout">
    <p>выйти <br> из аккаунта</p>
    <img src="/src/assets/images/logout.svg" alt="">
  </div>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "UserCard",
  props: {
    img: '',
    name: '',
    level: '',
  },

  computed: {
    ...mapState({
      connected: state => state.metamask.connected,
      wallet: state => state.metamask.wallet,
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