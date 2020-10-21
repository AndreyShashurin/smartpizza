<template>
  <div class="home">
    <main>
      <CartComponent/>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import CartComponent from '@/components/CartComponent.vue'

export default {
  name: 'Cart',
  components: {
    CartComponent
  }
}
</script>
<style scoped lang="scss">
@media only screen and (max-width: 1439px) {
  main {
      width: 1024px;
  }
}

main{
    flex: 1 0 auto;
    width: 614px;
    margin: 0px auto;
}
</style>