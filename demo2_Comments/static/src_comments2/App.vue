<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- *3* 使用组件标签 -->
      <add :addComment="addComment "/>
      <list :comments="comments" :deleteComment="deleteComment" />
    </div>
  </div>
</template>

<script>
    // *1* 引入组件
import Add from './components/Add'
import List from './components/List'

  export default {
    data(){
      return {
        comments: [ //数据在哪个组件，更新数据的行为（方法）就定义在哪个组件
          {
            name:'Bob',
            content: 'Vue so easy.'
          },
          {
            name: 'Cat',
            content: 'Vue so so.'
          }
        ]
      }
    },
    methods:{
      // 添加评论
      addComment(comment){
        this.comments.unshift(comment);
      },
      deleteComment(index){
        this.comments.splice(index, 1);
      }
    },

    // *2* 映射组件标签
    components: {
      Add,
      List
    }
  }
</script>

<style>

</style>


