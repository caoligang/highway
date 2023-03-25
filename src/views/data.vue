<template>
  <div>
    <el-row class="mb-4">
      <el-button type="primary">添加</el-button>
      <el-button type="success">删除</el-button>
      <el-button type="info">保存</el-button>
      <el-button type="warning">展开压缩包并导入</el-button>
      <el-button type="danger">删除已展开文件</el-button>
      <el-button type="primary">开始智能检测</el-button>
      <el-button type="success">导出检测结果包</el-button>
      <el-button type="info">导出EXCEL报表</el-button>
    </el-row>
  </div>
<div>
  <el-table class="table" :data="tableData" height="250" width=auto style="width: 100%">
    <el-table-column type="selection" width="30"/>
    <el-table-column type="index" label="ID" width="100"/>
    <el-table-column prop="dataname" label="数据名称" width="100"/>
    <el-table-column prop="machine" label="设备" width="100"/>
    <el-table-column prop="project" label="项目" width="100"/>
    <el-table-column prop="model" label="检测模型" width="100"/>
    <el-table-column prop="length" label="检测里程(米)" width="130"/>
    <el-table-column prop="datanum" label="已展开文件数" width="120"/>
    <el-table-column prop="completedata" label="已检测文件数" width="120"/>
    <el-table-column prop="package" label="数据压缩包" width="100"/>
    <el-table-column prop="info" label="备注" width="100"/>
  </el-table>
</div>
</template>

<script>
const tableData = [
  {
    ID: '01',
    dataname:'成渝高速',
    machine:'RSS',
    project:'成渝高速检测',
    model:'yoloV5',
    length:'200000',
    datanum:'300',
    completedata:'300',
    package:'1',
    info:'已检测完成',
  }
]
export default {
  name: "data",
  data(){
    return{
      tableData
    }
  }
}
</script>

<style scoped>
.table {
  margin: 0;
  padding: 0;
  color: #1c64e7;
}
</style>
