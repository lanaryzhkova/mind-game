<template>
  <div class="wrapper">
      <div class="levelList">
        <div v-for="level in allLevels">
          <level-button v-if="account.number===level.number"
                        backgLButton="#CEC8F9"
                        borderStyle="5px solid rgba(139, 84, 255, 0.45)"
                        :level=level>
            <p>{{level.number}}</p>
          </level-button>
          <level-button v-if="account.number > level.number"
                        backgLButton="rgba(170, 219, 152, 0.59)"
                        borderStyle="none"
                        :level=level
          >
            <img src="../assets/images/comleted.svg" alt="">
          </level-button>
          <level-button v-if="account.number < level.number"
                        backgLButton="#CEC8F9"
                        borderStyle="none"
                        :level=level
                        isDisabled="true">
            <p>{{level.number}}</p>
          </level-button>
      </div>
    </div>
    <div class="sideButtons">
      <button class="accountButton" @click="$router.push('/account')">
        <img :src=imageCharacter alt="">
      </button>
      <img src="/src/assets/images/theory.svg" alt="" @click="$router.push('/theory')">
    </div>
      <div class="slider">
        {{ this.quote }}
      </div>
  </div>

</template>

<script>
import LevelButton from "../components/UI/LevelButton.vue";
import MyButton from "../components/UI/Button.vue";
import {mapState} from "vuex";

export default {
  name: "LevelMap",
  components: {LevelButton, MyButton},
  data(){
    return{
      quote: 'Великие дела совершаются серией маленьких вещей, собранных вместе'
    }

  },

  async mounted(){
    await this.$store.dispatch('getLevel');
    setInterval(()=> this.quote = "Настоящие знания мы получаем, когда ищем ответ на вопрос, а не когда узнаем сам ответ.", 10000)
    setInterval(()=>this.quote = 'Секрета успеха нет. Это результат подготовки, тяжелой работы и обучения на неудаче.', 20000)
    setInterval(()=>this.quote = 'Великие дела совершаются серией маленьких вещей, собранных вместе.', 40000)
    setInterval(()=>this.quote = 'Что бы вы ни делали и не мечтали, вы можете начать. Гений обладает смелостью, силой и магией. Начните действовать сейчас.', 80000)
    setInterval(()=>this.quote = 'Учение — только свет, по народной пословице, — оно также и свобода. Ничто так не освобождает человека, как знание.', 160000)

  },
  computed: {
    ...mapState({
      allLevels: state => state.get.levels,
      imageCharacter: state => state.auth.imageCharacter,
      account: state => state.auth.account,
    }),
  },

}
</script>

<style scoped lang="scss">
  .wrapper{
    display: grid;
    grid-auto-columns: 2fr 0.5fr;
    grid-template-columns: 2fr 120px;
    grid-template-rows: 2fr 0.7fr;
    margin:0 200px;

  }
  .levelList{
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
    grid-column: 1/2;
    padding: 100px 0;

    img {
      align-items: center;
    }
  }

  .sideButtons{
    grid-column: 2/-1;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    gap: 80px;

    img{
      width: 120px;
      height: 120px;
      cursor: pointer;
    }

    .accountButton{
      width: 120px;
      height: 120px;
      border: none;
      border-radius: 100px;
      cursor: pointer;
      background: transparent;
    }
  }

  .slider{
    margin: 0 auto;
    padding: 64px;
    grid-row: 2/3;
    grid-column: 1/3;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 30px;
    align-items: center;
    text-align: center;
    background: rgba(255, 246, 166, 0.87);
    border-radius: 100px 0;
    width: 85%;
    height: 40%;
  }

</style>
