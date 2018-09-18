<template>
  <div class="water-list">
    <div class="add-wrapper">
      总金额：<span class="number">10000元</span> 剩余金额：<span class="number">1000元</span>
      <el-button type="primary" class="add" @click="addTable">添加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="buyDate" label="日期" width="180"></el-table-column>
      <el-table-column prop="buyer" label="姓名" width="180"></el-table-column>
      <el-table-column prop="itemsName" label="材料"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="changeTable(scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next, jumper"
      :total="pageCount">
    </el-pagination>
    <el-dialog title="添加" :visible.sync="dialogVisible" width="50%">
      <el-form :model="infoForm" :rules="rules" ref="infoForm" label-width="50px">
        <el-form-item label="姓名">
          <el-select class="input-box" v-model="infoForm.buyer" placeholder="请选择">
            <el-option v-for="item in userNames" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker class="input-box" v-model="infoForm.buyDate" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="价格" prop='price'>
          <el-input v-model.number="infoForm.price" class="input-box" placeholder="请输入价格"></el-input>
        </el-form-item>
        <el-form-item label="材料" prop="itemsName">
          <el-input type="textarea" class="input-box" :rows="2" placeholder="请输入内容" v-model="infoForm.itemsName"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading" @click="operateOrder(orderType)">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style lang="less" src='./waterList.less'></style>
<script>
export default {
  data () {
    let chackPrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('价格不能为空'))
      }
    }
    return {
      infoForm: {
        buyer: '',
        buyDate: '',
        price: 0,
        itemsName: ''
      },
      rules: {
        price: [
          {validator: chackPrice, trigger: 'blur'},
          {type: 'number', message: '价格必须为数字值'}
        ]
      },
      tableData: [],
      dialogVisible: false,
      userNames: [],
      currentPage: 1,
      pageCount: 0,
      pageSize: 15,
      paginationData: {
        startPage: 1,
        pageSize: 15
      },
      fullscreenLoading: false,
      orderType: '',
      userId: 0
    }
  },
  mounted: function () {
    this.getTable()
    this.getNickNames()
  },
  methods: {
    getTable: function () {
      let params = {
        params: this.paginationData
      }
      this.$api.tableOrder(params).then((res) => {
        let data = res.data.orderDtos
        for (let i in data) {
          data[i].buyDate = (data[i].buyDate.split('T')[0])
        }
        this.tableData = data
        this.pageCount = res.data.pageCount
      })
    },
    changeTable: function (index) {
      this.dialogVisible = true
      this.orderType = 'edit'
      this.userId = this.tableData[index].id
      console.log(this.userId)
      this.infoForm = JSON.parse(JSON.stringify(this.tableData[index]))
    },
    addTable: function (index) {
      this.dialogVisible = true
      this.orderType = 'add'
      this.infoForm = {
        buyer: '',
        buyDate: '',
        price: 0,
        itemsName: ''
      }
    },
    getNickNames: function () {
      this.$api.nickNames().then((res) => {
        let data = res.data
        for (let i in data) {
          let oName = {
            value: data[i],
            label: data[i]
          }
          this.userNames.push(oName)
        }
      })
    },
    handleCurrentChange: function (val) {
      this.getTable()
      console.log(`当前页: ${val}`)
    },
    operateOrder: function (type) {
      let params = {}
      this.fullscreenLoading = true
      if (type === 'add') {
        params = {
          buyer: this.infoForm.buyer,
          buyDate: this.infoForm.buyDate,
          price: this.infoForm.price,
          itemsName: this.infoForm.itemsName
        }
        this.$api.addOrder(params).then((res) => {
          this.fullscreenLoading = false
          this.dialogVisible = false
          this.getTable()
        })
      } else if (type === 'edit') {
        params = {
          id: this.userId,
          buyer: this.infoForm.buyer,
          buyDate: this.infoForm.buyDate,
          price: this.infoForm.price,
          itemsName: this.infoForm.itemsName
        }
        this.$api.editOrder(params).then((res) => {
          this.fullscreenLoading = false
          this.dialogVisible = false
          this.getTable()
        })
      }
    }
  }
}
</script>
