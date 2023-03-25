<template>
  <div>
    <el-row class="mb-4">
      <el-button type="primary">编辑</el-button>
      <el-button type="success">删除</el-button>
      <el-button type="info">保存</el-button>
      <el-button type="warning">导出人工标注结果</el-button>
    </el-row>
     </div>
  <div>
    <el-select v-model="value" class="m-2" placeholder="选择项目" size="small">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select v-model="value" class="m-2" placeholder="选择项目数据" size="small">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  <el-table class="table" :data="tableData" height="250" width=auto style="width: 100%">
    <el-table-column type="selection" width="30"/>
    <el-table-column type="index" label="ID" width="100"/>
    <el-table-column prop="projecttype" label="项目名称" width="100"/>
    <el-table-column prop="projectname" label="数据名称" width="100"/>
    <el-table-column prop="remarks" label="AI结果" width="100"/>
    <el-table-column prop="projectdate" label="人工调整" width="100"/>
    <el-table-column prop="projectdate" label="图片名" width="100"/>
    <el-table-column prop="projectdate" label="图片宽" width="100"/>
    <el-table-column prop="projectdate" label="图片高" width="100"/>
    <el-table-column prop="projectdate" label="备注" width="100"/>

  </el-table>
  <div>

  </div>
</template>

<script>
import { ref } from 'vue'
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
export default {
  name: "completedata",
    data(){
    return{
    options,
    }
    }
    }
</script>

<style scoped>

</style>
