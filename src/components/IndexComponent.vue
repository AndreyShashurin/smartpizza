<template>
  <section>
    <article class="menu-product" v-for="(item, index) in array" :key="index">
      <main class="menu-product__main">
        <figure>
          <img :src="item.icon" class="image" alt="" title="" >
        </figure>
        <h2 class="menu-product-title"> {{ item.message }}</h2>
        {{ item.type }}
        <ul>
          <li v-for="(ingredient, index) in item.ingredients" :key="index">
            {{ingredient}}
          </li>
        </ul>
      </main>
        <footer class="money">
          <span class="money-block">
              <span class="money__value">{{ item.price }}</span>
              <span class="money__currency_on-the-right">₽</span>
          </span>
          <div class="money-cart">
            <button @click="openCart(item.id)" class="product-control">Выбрать</button>
          </div>
        </footer>
    </article>
  </section>
</template>

<script>
//import axios from 'axios';

export default {
  name: 'IndexComponent',
  props: {
    search: String
  },
  computed: {
    array() {
      return this.search ? this.$store.getters.filterPizza(this.search) :  this.$store.state.pizza
    }
  },
  methods: {
    openCart(id) {
      this.$store.commit('order', id);
      this.$router.push('/cart')
    }
  }

}
</script>
<style scoped lang="scss">
.menu {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin-bottom: 60px;
    width: 292px;
    margin-right: 37.3333px;
    &-product {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      margin-bottom: 60px;
      width: 292px;
      margin-right: 37.3333px;
      &__main {
        margin: 0px;
        width: 100%;
        font-size: 14px;
        line-height: 20px;
        color:#b5b5b5;
        font-weight: 400;
        ul {
          list-style: none;
          padding: 0;
          text-align: left;
          li {
            font-size: 11px;
            color: black;
            margin-bottom: 4px;
          }
        }
      }
      &-title {
        margin: 8px 0px;
        color: rgb(0, 0, 0);
        font-size:14px;
        line-height: 24px;
        font-weight: bold;
      }
    }
}

figure {
    margin: 0px;
    position: relative;
    width: 100%;
}
.image {
    width: 80%;
    position: relative;
    top: 0px;
    margin: 0px;
    border-radius: 12px;
    image-rendering: auto;
    cursor: pointer;
    transition: top 150ms ease-out 0s;
}
.enwcbf {
    width: 100%;
    position: relative;
    display: flex;
    user-select: none;
    image-rendering: auto;
    border-radius: 12px;
}
section {
    display: flex;
    flex-wrap: wrap;
}
@media only screen and (max-width: 1439px) {
  .menu-product {
      width: 174px;
      margin-right: 30.6666px;
  }
}
.money {
    display: flex;
    margin-top: 16px;
    flex: 1 1 auto;
    &-block {
      flex: 1 1 auto;
      text-align: left;
      padding-right: 4px;
      font-size: 16px;
      color: rgb(0, 0, 0);
      font-weight: 500;    
      white-space: nowrap;
    }
    &__value {
      font-size:16px;
      white-space:nowrap;
      line-height: 42px;
    }
    &-cart {
      width: 115px;
      height: 42px
    }
    &__currency_on-the-right {
        margin-left: 5px;
    }
}
.product-control {
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  padding: 0px 12px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: rgb(255, 255, 255);
  color: rgb(255, 105, 0);
  border: 1px solid rgb(255, 105, 0);
}
</style>
