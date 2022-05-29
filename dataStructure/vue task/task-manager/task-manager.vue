<template>
  <div>
    <task-header @change = "dataChange"></task-header>
    <list :todolist="todolist"></list>
  </div>
</template>

<script>
import TaskHeader from './components/Header'
import List from './components/List'
export default{
  name: 'Task',
  components: {
    TaskHeader,
    List
  },
  data () {
    return {
      todolist: []
    }
  },
  methods: {
    dataChange (list) {
      this.todolist = list
    }
  }
}
</script>

<style></style>
