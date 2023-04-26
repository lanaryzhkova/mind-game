<template>
  <div class="wrapper">
      <div class="levelList">
        <div v-for="level in levels">
          <level-button v-if="this.userLevel===level"
                        backgLButton="#CEC8F9"
                        borderStyle="5px solid rgba(139, 84, 255, 0.45)"
                        :level=level>
            <p>{{level}}</p>
          </level-button>
          <level-button v-if="this.userLevel > level"
                        backgLButton="rgba(170, 219, 152, 0.59)"
                        borderStyle="none"
                        :level=level>
            <img src="src/assets/images/comleted.svg" alt="">
          </level-button>
          <level-button v-if="this.userLevel < level"
                        backgLButton="#CEC8F9"
                        borderStyle="none"
                        :level=level
                        isDisabled="true">
            <p>{{level}}</p>
          </level-button>
      </div>
    </div>
    <div class="sideButtons">
      <button class="accountButton" @click="$router.push('/account')">
        картинка
      </button>
      <img src="/src/assets/images/theory.svg" alt="" @click="$router.push('/theory')">
    </div>
    <div class="footer">
      Тут будут мотивационные цитатки
    </div>
  </div>

</template>

<script>
import LevelButton from "../components/UI/LevelButton.vue";
import MyButton from "../components/UI/Button.vue";

export default {
  name: "LevelMap",
  components: {LevelButton, MyButton},
  data(){
    return{
      levels: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ],
      userLevel: 3,
    }

  }

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
    }
  }

  .footer{
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
  }

</style>