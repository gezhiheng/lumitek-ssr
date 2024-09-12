<template>
    <div class="menu">
      <img src="~/assets/lumitek.jpg" alt="lumitek">
      <h2>UDP報表</h2>
    </div>

    <div class="main">
      <el-button 
        type="primary" 
        :icon="DocumentAdd" 
        plain
      >
        資料匯入
      </el-button>
      <input
        type="file"
        ref="selectFile"
        style="display: none"
        webkitdirectory
      />
      <el-button type="primary" :icon="Search" plain>查詢資料</el-button>
      <el-button type="success" :icon="Plus" plain>新增一行</el-button>
      <el-button type="danger" :icon="Delete" plain>刪除所選</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="30"/>
        <el-table-column type="index" align="center" width="50"/>
        <el-table-column
          v-for="item in tableColumns"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          show-overflow-tooltip
        />
        <el-table-column fixed="right" label="操作" min-width="120">
          <template #default>
            <el-button type="primary" :icon="Edit" circle plain/>
            <el-button type="danger" :icon="Delete" circle plain/>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script lang="ts" setup>
import { Delete, Edit, Search, DocumentAdd, Plus } from '@element-plus/icons-vue'
import { tableColumns } from './constants'
import EPB21Request from '../service/epb21'

const request = new EPB21Request()
onMounted(async () => {
  let doubleArray = await request.get({})
  console.log('🚀 ~ onMounted ~ data:', doubleArray)
})

const selectFile = ref(null)

const tableData = [
  {
    type: 'KE08D',
  },
]
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 72px;
  padding: 0 2%;
  margin-bottom: 20px;
  background-color: white;

  img {
    margin-top: -10px;
    height: 50px;
    margin-right: 20px;
  }

  h2 {
    font-size: 35px;
    font-weight: 900;
  }
}

.main {
  background-color: white;
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;

}

.main > .el-button:nth-child(1) {
  margin-right: 12px;
}

.el-table {
  margin-top: 20px;
}
</style>