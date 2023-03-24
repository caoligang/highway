<script setup lang="ts">
// // import TheWelcome from '../components/TheWelcome.vue'
// import machineInfo from '@/views/machineInfo.vue'
</script>

<template>
  <div class="body">
  <el-container>
    <el-header height="80px" style="padding: 0" >
<div class="header" >高速公路智能检测系统</div>
</el-header>
<el-container>
<el-aside width="200px">
  <el-menu them='dark' class="aside" @select="handleSelect" default-active="this.$router.path" router>
    <el-sub-menu index="1">
      <template #title>
        <span>隐伏病害检测平台</span>
      </template>
      <el-menu-item index="/machineInfo">设备参数</el-menu-item>
      <el-menu-item index="/projectdata">项目库</el-menu-item>
      <el-menu-item index="/data">项目数据</el-menu-item>
      <el-menu-item index="/completedata">已检数据</el-menu-item>


<!--      <el-menu-item index="2">公司信息</el-menu-item>-->
<!--      <el-menu-item index="3">项目库</el-menu-item>-->
<!--      <el-menu-item index="4">项目数据</el-menu-item>-->
<!--      <el-menu-item index="5">已检数据</el-menu-item>-->
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <span>路面裂缝检测平台</span>
      </template>
      <el-menu-item index="/machineInfo">设备参数</el-menu-item>
<!--      <el-menu-item index="2">公司信息</el-menu-item>-->
<!--      <el-menu-item index="3">项目库</el-menu-item>-->
<!--      <el-menu-item index="4">项目数据</el-menu-item>-->
<!--      <el-menu-item index="5">已检数据</el-menu-item>-->
    </el-sub-menu>
<!--    <el-sub-menu index="3">-->
<!--      <template #title>-->
<!--        <span>雷达数据处理</span>-->
<!--      </template>-->
<!--      <el-menu-item index="1">1ban</el-menu-item>-->
<!--      <el-menu-item index="2">2ban</el-menu-item>-->
<!--      <el-menu-item index="3">3ban</el-menu-item>-->
<!--      <el-menu-item index="4">4ban</el-menu-item>-->
<!--    </el-sub-menu>-->
  </el-menu>
</el-aside>
<el-container>
  <el-header height="80px" style="padding: 0;margin:0">
    <el-container class="subHeader">
      <div class="desc">{{desc}}</div>
      <el-button style="width: 100px;height: 30px;margin: 20px">新增记录</el-button>
    </el-container>
  </el-header>
  <el-main style="margin: 0;padding: 0">
    <div class="content">
      <RouterView />
<!--      <el-table :data="stus">-->
<!--        <el-table-column prop="name" label="姓名"></el-table-column>-->
<!--        <el-table-column prop="age" label="年龄"></el-table-column>-->
<!--        <el-table-column prop="sex" label="性别"></el-table-column>-->
<!--        <el-table-column prop="date" label="录入日期"></el-table-column>-->
<!--      </el-table>-->

    </div>
  </el-main>
  <el-footer height="30px" class="footer">成都理工大学智能检测团队提供支持</el-footer>

</el-container>

</el-container>
</el-container>

</div>
</template>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
}
.header{
  font-size: 30px;
  line-height: 80px;
  background-color: #f1f1f1;
  text-align: center;
}
.aside{
  background-color: #7daede;
  height: 700px;
  color: white;
}
.subHeader{
  background-color: #1c64e7;
  height: 55px;
}
.desc{
  font-size: 25px;
  line-height: 80px;
  color:white;
  width:1000px;
}
.content{
  height: 510px;
}
.footer{
  background-color: dimgray;
  color:white;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
}
</style>
