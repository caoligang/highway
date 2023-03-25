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
      <el-table-column prop="projecttype" label="项目类型" width="100"/>
      <el-table-column prop="projectname" label="项目名称" width="100"/>
      <el-table-column prop="remarks" label="备注" width="100"/>
      <el-table-column prop="projectdate" label="创建时间" width="100"/>
    </el-table>

    </div>
</template>

<script>
const tableData = [
  {
    ID: '01',
    projecttype: '高速公路',
    projectname: '成渝高速',
    remarks: '测试',
    projectdate: '2023-05-03'
  },
  {
    ID: '02',
    projecttype: '高速公路',
    projectname: '成昆高速',
    remarks: '成都到昆明',
    projectdate: '2023-05-05'
  },
]
export default {
  name: "projectdata",
  data() {
    return {
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
