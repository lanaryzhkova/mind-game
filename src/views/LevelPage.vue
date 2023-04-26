<template xmlns="http://www.w3.org/1999/html">
  <div class="wrapper">
    <div class="levelTopic">
      Уровень {{$route.params.id}}.
      <p>
        {{this.levelTopic}}.
      </p>
    </div>
    <div class="levelTask" v-html="exampleTask"></div>
    <div class="levelAnswer">
      <p>
        Ответ:
      </p>
      <input type="text" v-model=this.answer>
      <answer-button :isDisabled="this.answer!=='no'"/>
    </div>
  </div>
</template>

<script>
import AnswerButton from "../components/UI/AnswerButton.vue";
export default {
  name: "LevelPage",
  components: {AnswerButton},
  data(){
    return{
      levelTopic: 'Системы счисления',
      answer: '',
      exampleTask: "<p>Как вы знаете, существуют позиционные и непозиционные системы счисления.</p><p>Самой известной позиционной системой является римская.</p><p>В информатике основными являются: двоичная, восьмеричная, десятичная и шестнадцатиричная.</p><p>Посчитайте значение десятичного числа 8934 в римской, двоичной, восьмеричной и шестнадцатиричной системах.Значения запишите через запятую.</p>"
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .wrapper{
    display: flex;
    flex-direction: column;
    gap: 40px;

    .levelTopic{
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
    }

    .levelTask{
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

    .levelAnswer{
      display: grid;
      grid-template-columns: 0.5fr 2fr 0.5fr;
    }
  }

</style>