<template>
  <user-card
      img="https://gas-kvas.com/uploads/posts/2023-02/1675495562_gas-kvas-com-p-luchshie-kartinki-dlya-fonovogo-risunka-ra-18.jpg"
      wallet="0x86287aC98Eb221912fF27d0d80730f84566CFCAA"
      name="Пока котёнок"
      level="3"/>
  <reward-list/>
  <div class="theory">
    <img src="/src/assets/images/theory.svg" alt="">
    <p @click="$router.push('/theory')">Смотреть теоретические материалы</p>
  </div>
  <div class="play">
    <my-button @click="$router.push('/levels')" fontSize="30px" backgButton="#B7AEF2">
      Начать игру!
    </my-button>
  </div>

</template>

<script>
import MyButton from "../components/UI/Button.vue";
import RewardCard from "../components/UI/RewardCard.vue";
import UserCard from "../components/UserCard.vue";
import RewardList from "../components/RewardList.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "AccountView",
  components: {UserCard, MyButton, RewardCard, RewardList},
  data() {
    return {
    }
  },
  methods: {
    ...mapActions({
      connectMetamask: "connectMeta",
    })
  },
  computed: {
    ...mapState({
      connected: state => state.metamask.connected,
    })
  },
}
</script>

<style scoped lang="scss">
  .theory{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 42px auto 0 auto;
    font-weight: 500;
    font-size: 30px;
    gap: 20px;
    cursor: pointer;
  }
  .play{
    margin: 42px 0 0 0;
    display: flex;
    justify-content: center;
  }
</style>