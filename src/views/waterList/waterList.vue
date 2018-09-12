<template>
<div class="water-list">
    <div class="add-wrapper">
        总金额：<span class="number">10000元</span> 剩余金额：<span class="number">1000元</span>
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
    <el-dialog title="添加" :visible.sync="dialogVisible">
        <el-form :model="infoForm" :rules="rules" ref="infoForm" label-width="60px">
            <el-form-item label="姓名" prop='buyer'>
                <el-select class="input-box" v-model="infoForm.buyer" placeholder="请选择">
                    <el-option v-for="item in userNames" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="时间" prop='buyDate'>
                <el-date-picker class="input-box" v-model="infoForm.buyDate" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="价格" prop='price'>
                <el-input v-model.number="infoForm.price" class="input-box" placeholder="请输入价格"></el-input>
            </el-form-item>
            <el-form-item label="材料" prop='itemsName'>
                <el-input type="textarea" class="input-box" :rows="2" placeholder="请输入内容" v-model="infoForm.itemsName"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </el-dialog>
</div>
</template>

<style lang="less" src='./waterList.less'></style>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'


interface iListForm {
    buyer: string;
    buyDate: string;
    price: number;
    itemsName: string;
    addUser?: string;
    remarks?: string;
}

@Component
export default class WaterList extends Vue {

    infoForm: iListForm = {
        buyer: '',
        buyDate: '',
        price: 0,
        itemsName: ''
    }

    tableData: iListForm[] = [
      {
        buyDate: '2016-05-02',
        buyer: '邹立杰',
        itemsName: '胡萝卜,白萝卜,南瓜,冬瓜,西瓜',
        price: 18,
      }
    ]

    rules = {
        buyer: [{
            required: true,
            trigger: 'blur',
            message: '请输入购买人'
        }, ],
        buyDate: [{
            required: true,
            trigger: 'blur',
            message: '请输入时间'
        }, ],
        price: [{
            required: true,
            trigger: 'blur',
            message: '请输入价格'
        }, {
          type: 'number',
          message: '价格必须为数字值'
        }],
        itemsName: [{
            required: true,
            trigger: 'blur',
            message: '请输入购买类目'
        }],
    }

    dialogVisible: boolean = false

    userNames = [{
        value: '1',
        label: '邹立杰'
    }, {
        value: '2',
        label: '邹大佬'
    }]

}
</script>
