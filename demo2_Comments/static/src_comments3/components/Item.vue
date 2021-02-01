<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
export default {
  props: {
    comment: Object,
    index: Number,
    deleteComment: Function
  },
  methods:{
    deleteItem(){
      const {comment, index, deleteComment}= this;
      if(window.confirm(`确定删除${comment.name}的内容？`)){
        deleteComment(index);
      }
      
    }
  }
}
</script>

<style>

</style>