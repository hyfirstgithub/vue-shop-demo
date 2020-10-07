<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <!--搜索与 添加区域 -->

      <el-row :gutter="20">
        <el-col :span="10">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary"> 添加用户</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      select: '',
      input3: ''
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    getUserList () {

    }
  }
}
</script>
