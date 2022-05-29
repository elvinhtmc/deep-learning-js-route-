<template>
  <div class="container">
    <ul>
      <li :class="classList[index % 2]"
      v-for = "(item, index) of todolist"
      :key = "index">
      {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'List',
  props: {
    todolist: Array
  },
  data () {
    return {
      classList: [
        'item-odd',
        'item-even'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    width: 100%
    .item
      line-height: 0.7rem
      padding-left: 10%
      font-size:.3rem
    .item-odd
      line-height: 0.7rem
      padding-left: 10%
      background-color: #eee
      font-size:.3rem
    .item-even
      line-height: 0.7rem
      padding-left: 10%
      font-size:.3rem
      background-color: #f9f9f9
</style>
