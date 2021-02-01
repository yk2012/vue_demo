<template>
    <div class="todo-container">
    <div class="todo-wrap">
        <todo-header :addTodo="addTodo" />
        <todo-list :todos="todos" :deleteTodo="deleteTodo" />
        <todo-footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos" />
    </div>
  </div>
</template>

<script>
  import TodoFooter from './components/TodoFooter.vue'
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'

  export default {
    data(){
      return {
        // 从localStorage读取todos
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')

        // todos: [
        //   {title: '吃饭', complete: false},
        //   {title: '睡觉', complete: true},
        //   {title: '敲代码', complete: false}
        // ]
      }
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo);
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      },
      deleteCompleteTodos() {
        //过滤todos留下false的
        this.todos = this.todos.filter(todo => !todo.complete);
        
      },
      selectAllTodos(check) {
        this.todos.forEach(todo => todo.complete = check);
      }
    },

    watch: { //监视
      todos:{
        deep: true, // 深度监视
        handler: function(value){
          // 将todos最新的值的json数据，保存到localStorage
          window.localStorage.setItem('todos_key', JSON.stringify(value))
        }
      }
    },

    components: {
      TodoHeader, 
      TodoFooter, 
      TodoList 
    },    
  }
</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>