<template xmlns="http://www.w3.org/1999/html">
  <div class="wrapper">
    <div class="levelTopic" @click="$router.push('/levels')">
      <p>←</p>
      Уровень {{ this.numberLevel + 1 }}.
      <p>
        {{ this.allLevels[this.numberLevel].topic }}.
      </p>
    </div>
    <div class="levelTask" v-html="this.allLevels[this.numberLevel].task"></div>
    <div class="levelAnswer">
      <p>
        Ответ:
      </p>
      <input type="text" v-model=this.answer>
      <answer-button @click="sendAnswer()"/>
    </div>
    <level-result v-model:show="result" :reward=reward :error=error></level-result>
  </div>
</template>

<script>
import AnswerButton from "../components/UI/AnswerButton.vue";
import {mapState} from "vuex";
import LevelResult from "../components/LevelResult.vue";

export default {
  name: "LevelPage",
  components: {AnswerButton, LevelResult},
  data() {
    return {
      levelTopic: 'Системы счисления',
      answer: '',
      exampleTask: "<p>Как вы знаете, существуют позиционные и непозиционные системы счисления.</p><p>Самой известной позиционной системой является римская.</p><p>В информатике основными являются: двоичная, восьмеричная, десятичная и шестнадцатиричная.</p><p>Посчитайте значение десятичного числа 8934 в римской, двоичной, восьмеричной и шестнадцатиричной системах.Значения запишите через запятую.</p>",
      numberLevel: 0,
      result: false,

    }
  },
  methods: {
    sendAnswer() {
      let data = {
        'answer': this.answer,
        'wallet': this.account.wallet
      }
      this.$store.dispatch('sendAnswer', data);
      this.result = true;
      this.showAuthDialog()
    },
    showAuthDialog(){
      this.result = true;
    },
  },
  async mounted() {
    await this.$store.dispatch('getLevel');
    this.numberLevel = parseInt(this.$route.params.id) - 1
  },

  computed: {
    ...mapState({
      allLevels: state => state.get.levels,
      account: state => state.auth.account,
      reward: state => state.get.reward,
      error: state => state.get.error,
    }),
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;

  .levelTopic {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    gap: 10px;
    border: 5px solid #C9C0FF;
    border-radius: 50px;
    font-weight: 700;
    font-size: 30px;
    margin: 40px 0 0 0;
    width: fit-content;
    cursor: pointer;
  }

  .levelTask {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    align-items: center;
    padding: 48px;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    background: #FFF6A6;
    border-radius: 50px;

  }

  .levelAnswer {
    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr;

    p {
      font-weight: 700;
      font-size: 30px;
      text-align: center;
      margin: auto 0;
    }

    input {
      border: 5px solid #CEC8F9;
      border-radius: 55px;
      height: 70px;
      margin: auto 0;
      font-weight: 500;
      font-size: 30px;
      padding: 0 24px;
    }
  }


}

</style>