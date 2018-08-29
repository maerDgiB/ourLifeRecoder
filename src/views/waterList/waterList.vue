<template>
  <div class="water-list">
    <div class="add-wrapper">
      <el-button type="primary" class="add" @click="dialogVisible = true">添加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="kind" label="材料"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加" :visible.sync="dialogVisible" width="30%">
      <div>
        姓名
        <el-select v-model="userName" placeholder="请选择">
          <el-option v-for="item in userNames" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        时间
        <el-date-picker
          v-model="dataTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div>
        价格
        <el-input v-model="price" placeholder="请输入价格"></el-input>
      </div>
      <div>
        材料
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="kind">
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style lang="less" src='./waterList.less'></style>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '邹立杰',
        kind: '胡萝卜，白萝卜，南瓜，冬瓜，西瓜',
        price: '18'
      }],
      dialogVisible: false,
      userNames: [{
        value: '1',
        label: '邹立杰'
      }, {
        value: '2',
        label: '邹大佬'
      }],
      userName: '',
      dataTime: '',
      price: '',
      kind: ''
    }
  }
}
</script>
