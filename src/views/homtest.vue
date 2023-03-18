<template>
  <!--  <div class="hometest">-->
  <!--    <title>待办任务列表</title>-->
  <!--    <form @submit.prevent="addTask">-->
  <!--      <span>新建任务</span>-->
  <!--      <input v-model="taskText" placeholder="请输入任务……"/>-->
  <!--      <button>添加</button>-->
  <!--    </form>-->
  <!--    <ol>-->
  <!--      <li v-for="(item,index) in todos">-->
  <!--        {{item}}-->
  <!--        <button @click="remove(index)">删除任务</button>-->
  <!--        <hr/>-->
  <!--      </li>-->
  <!--    </ol>-->
  <div class="hometest">
<!--    <div class="container" @mousemove.stop="move">-->
<!--      <div class="ball" :style="{left:offsetX+'px',top:offsetY+'px'}">-->
<!--      </div>-->
<!--    </div>-->
    <el-button>测试</el-button>
    <el-input-number :min="1" :max="10" :step="1" v-model="num"></el-input-number>
  </div>
</template>

<script>
export default {
  name: "hometest",
  data() {
    return {
      todos: [],
      taskText: "",
      offsetX: 0,
      offsetY: 0
    }
  },
  // methods:{
  //   addTask(){
  //     if (this.taskText.length == 0){
  //       alert("请输入任务")
  //       return
  //     }
  //     this.todos.push(this.taskText)
  //     this.taskText=""
  //   },
  //   remove(index){
  //     this.todos.splice(index,1)
  //   }
  // }
  methods: {
    move(event) {
      if (event.clientX+30  > 1440) {
        this.offsetX = 1440-60
      } else if (event.clientX-30  < 0) {
        this.offsetX = 0
      } else {
        this.offsetX = event.clientX-10
      }
      if (event.clientY+30  > 1440) {
        this.offsetY = 1440-60
      } else if (event.clientY-30  < 0) {
        this.offsetY = 0
      } else {
        this.offsetY = event.clientY-10
      }
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.container {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 1440px;
  height: 1440px;
  background-color: blanchedalmond;
  display: inline;
}
.ball {
  position: absolute;
  width: 60px;
  height: 60px;
  left: 10px;
  top: 10px;
  background-color: red;
  border-radius: 30px;
  z-index: 100;
}
</style>