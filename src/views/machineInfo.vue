<template>
  <div>
    <el-row class="mb-4">
      <el-button type="primary">添加</el-button>
      <el-button type="success">删除</el-button>
      <el-button type="info">保存</el-button>
      <el-button type="warning">导出</el-button>
    </el-row>
  </div>
  <div>
    <el-table class="table" :data="tableData" height="250" width=auto style="width: 100%">
      <el-table-column type="selection" width="30"/>
      <el-table-column type="index" label="ID" width="100"/>
      <el-table-column prop="machname" label="设备名称" width="100"/>
      <el-table-column prop="machtype" label="设备型号" width="100"/>
      <el-table-column prop="machantenna" label="天线频率" width="100"/>
      <el-table-column prop="machmakers" label="生产厂商" width="100"/>
      <el-table-column prop="machphoto" label="设备照片" width="100"/>
      <el-table-column prop="machdescribe" label="设备介绍" width="100"/>
      <el-table-column prop="machdate" label="创建时间" width="100"/>
    </el-table>
  </div>
</template>
<script>
const tableData = [
  {
    ID: '01',
    machname: 'rss',
    machtype: 'ssr',
    machantenna: '800Mhz',
    machmakers: '劳雷',
    machphoto: 'pic',
    machdescribe: '探地雷达',
    machdate: '2023-05-03',
  },
  {
    ID: '02',
    machname: 'ikeo',
    machtype: 'ssr',
    machantenna: '800Mhz',
    machmakers: '劳雷',
    machphoto: 'pic',
    machdescribe: '探地雷达',
    machdate: '2023-05-03',
  },
]

export default {
  name: "machineInfo",
  data() {
    return {
      tableData,
    }
  }
}
</script>


<!--<script>-->
<!--export default {-->
<!--  name: "machineInfo"-->
<!--}-->
<!--</script>-->

<style scoped>
.table {
  color: #1244b2;
}
</style>
