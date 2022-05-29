<template>
  <div class="header-area">
    <div class="content-area">
        <h1 class="title">My To Do List</h1>
      <div class="input-area">
        <input class="input" type="text"
        placeholder="Tell me what to do..."
        v-model = "todo" @keyup.enter = "clickBtnAdd">
        <button class="button" @click = "clickBtnAdd">Add</button>
        <button class="button" @click = "clickBtnDelete">Finish</button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'TaskHeader', // 注意，起名不要用header之类template已定义的标签名
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    clickBtnAdd () {
      if (this.todo) {
        this.list.push(this.todo)
        this.$emit('change', this.list)
        this.todo = ''
      }
    },
    clickBtnDelete () {
      if (this.list) {
        this.list.shift()
        this.$emit('change', this.list)
      }
    }
  },
  computed: {
    list () {
      let list = []
      try {
        if (localStorage.list) {
          list = localStorage.list
        }
      } catch (e) {}
      return list
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header-area
    background-color:red
    height: 2rem
    .content-area
      text-align: center
      .title
        color: #fff
        line-height: 1rem
        font-size:.4rem
        font-weight:700
      .input
        width: 4rem
        height: 0.5rem
        padding-left:0.3rem
      .button
        width: 1rem
        height: 0.5rem
        background-color: #eee  
</style>
