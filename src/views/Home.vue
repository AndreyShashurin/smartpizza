<template>
  <div class="home">
    <main>
      <div class="filter">
        <div><input type="text" v-model="searchPizza" /></div>
        <div @click="sortPrice()">Цена</div>
      </div>
      <IndexComponent :search="searchPizza"/>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import IndexComponent from '@/components/IndexComponent.vue'

export default {
  name: 'Home',
  components: {
    IndexComponent
  },
  data: function () {
     return {
      searchPizza: '',
      searchType: ''
     }
  },
  methods: {
    sortPrice() {
      this.$store.commit('sortPrice');
    }
  }
}
</script>
<style scoped lang="scss">
@media only screen and (max-width: 1439px) {
  main {
      width: 1024px;
  }
}
.filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  input {
    height: 20px;
  }
}
.home {
    min-height: 100%;
    display: flex;
    flex-flow: column;
}
main{
    flex: 1 0 auto;
    width: 614px;
    margin: 0px auto;
}
</style>