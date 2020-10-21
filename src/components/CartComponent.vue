<template>
  <section>
    <h1 class="">Корзина</h1>
    <template v-if="sumOrders">
    <article class="card-box" v-for="(item, index) in getOrders" :key="index">
        <img :src="item.icon" class="image" alt="" title="" >
        <main  class="card-box-main">
          <h4 class="card-box-title">{{ item.message }}</h4>
          <div class="card-box-type">{{ item.type }}</div>
        </main>
        <div class="card-box-money">
          <span class="money ">
            <span class="money__value">{{ item.price }}</span>
            <span class="money__currency money__currency_on-the-right"> ₽</span></span>
          </div>
          <div class="money-cart">
            <button @click="deleteId(item.id)" class="card-box__delete">удалить</button>
          </div>
    </article>
  </template>
  <template v-else>
    Корзина пуста 
  </template>
    <section class="price-block">
      <div class="cart__total">
        <div class="cart__total-table">
          <div class="cart__total-tr">
            <div class="cart__total-td-label cart__total-td-label_total">Сумма заказа:</div>
            <div class="cart__total-td-value cart__total-td-value_total">
              <span class="money "><span class="money__value">{{sumOrders}}</span>
              <span class="money__currency money__currency_on-the-right"> ₽</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="cart-block">
      <button class="cart__button_prev">Вернуться в меню</button>
      <button class="cart__button_next">Оформить заказ</button>
    </section>
  </section>
</template>

<script>

export default {
  name: 'CartComponent',
  data: function () {
     return {
      orders: this.$store.getters.getOrders
     }
  },
  computed: {
    doneTodosCount () {
      return this.$store.getters.getOrderById(2)
    },
    getOrders() {
      return this.$store.getters.getOrders
    },
    sumOrders() {
      return this.$store.getters.getOrders.reduce(function(sum, current) {
        return sum + current.price;
      }, 0);
    }
  },
  methods: {
    deleteId(id) {
      this.$store.commit('deleteId', id);
      this.sumOrders
    }
  }
}
</script>
<style scoped lang="scss">
.card-box {
  position: relative;
  border-bottom: 1px solid rgb(226, 226, 233);
  padding: 16px 0px;
  display: flex;
  justify-content: space-between;
  &:first-of-type {
    border-top: 1px solid rgb(226, 226, 233);
  }
  &-main {
    text-align: left;
  }
  &-title {
    font-style: normal;
    color: rgb(0, 0, 0);
    margin: 0px 0px 4px;
  }
  &-type {
    color: rgb(115, 121, 140);
    font-size: 12px;
    line-height: 16px;
  }
  &__delete {
    width: 96px;
    height: 32px;
    flex: 0 0 auto;
    line-height: 32px;
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
  &-money {
    flex: 0 0 auto;
    width: 52px;
    min-height: 64px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: right;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    color: rgb(0, 0, 0);
    margin: 0px 16px auto;
  }
}
img {
    width: 64px;
    height: 64px;
    flex: 0 0 auto;
    margin: 0px 12px 0px 0px;
}
.price-block {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-bottom: 48px;
    margin-top: 48px;
}
.cart {
  &-block {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 128px;
  }
  &__button_next {
    outline: none;
    border: 1px solid rgb(255, 105, 0);
    font-weight: 500;
    padding: 0px 12px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background: rgb(255, 105, 0);
    color: rgb(255, 255, 255);
    width: 198px;
    height: 54px;
    font-size: 16px;
    line-height: 54px;
    border-radius: 12px;
  }
  &__button_prev {
    outline: none;
    font-weight: 500;
    padding: 0px 12px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border: 1px solid rgb(171, 173, 186);
    width: 198px;
    height: 54px;
    font-size: 16px;
    line-height: 54px;
    border-radius: 12px;
  }
}
.cart__total-table {
    display: table;
    float: right;
}
.cart__total-td-label_total {
    font-size: 21px;
    font-family: Dodo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 700;
}
.cart__total-td-label {
    text-align: right;
    padding: 0px 15px;
    display: table-cell;
}
.cart__total-tr {
    display: table-row;
}
.cart__total-td-value_total {
    font-size: 26px;
    color: rgb(255, 105, 0);
}
</style>
