<template>
  <div class="container">
    <operation-tc></operation-tc>
    <div class="number-show">
      <el-row type="flex" justify="space-around">
        <el-col>
          <div class="user-number"><p>新增用户注册量</p>
            <div>432269<img src="./img/green_up.png"></div>
          </div>
        </el-col>
        <el-col>
          <div class="user-number"><p>实名认证用户数</p>
            <div>432269<img src="./img/green_up.png"></div>
          </div>
        </el-col>
        <el-col>
          <div class="user-number">
            <p>运营商认证用户数</p>
            <div>432269<img src="./img/green_up.png"></div>
          </div>
        </el-col>
        <el-col>
          <div class="user-number"><p>芝麻信用认证用户数</p>
            <div>432269<img src="./img/green_up.png"></div>
          </div>
        </el-col>
        <el-col>
          <div class="user-number"><p>四项认证通过用户数</p>
            <div>432269<img src="./img/green_up.png"></div>
          </div>
        </el-col>
        <el-col>
          <div class="user-number"><p>申请客户数</p>
            <div>432269<img src="./img/green_up.png"></div>
          </div>
        </el-col>
        <el-col>
          <div class="user-number"><p>放款客户数</p>
            <div>432269<img src="./img/green_up.png"></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="dashboard">
      <el-row type="flex">
        <el-col :span="8">
        <p class="slice-title">注册用户数量前三地区</p>
        <iframe
          width="330"
          height="350"
          seamless
          frameBorder="0"
          scrolling="no"
          src="http://118.31.130.38:5055/superset/explore/table/38/?form_data=%7B%22datasource%22%3A%2238__table%22%2C%22viz_type%22%3A%22pie%22%2C%22slice_id%22%3A78%2C%22granularity_sqla%22%3Anull%2C%22time_grain_sqla%22%3A%22Time+Column%22%2C%22since%22%3A%22100+years+ago%22%2C%22until%22%3A%22now%22%2C%22metrics%22%3A%5B%22sum__num%22%5D%2C%22groupby%22%3A%5B%22diqu%22%5D%2C%22limit%22%3A%220%22%2C%22pie_label_type%22%3A%22key_percent%22%2C%22donut%22%3Atrue%2C%22show_legend%22%3Atrue%2C%22labels_outside%22%3Afalse%2C%22color_scheme%22%3A%22d3Category20%22%2C%22where%22%3A%22%22%2C%22having%22%3A%22%22%2C%22filters%22%3A%5B%5D%7D&standalone=true&height=350"
        >
        </iframe>
        </el-col>
        <el-col :offset="1" :span="15">
          <p class="slice-title">用户每日注册及认证数</p>
          
          
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col>
          <p class="slice-title">总注册用户量</p>
        </el-col>
        <el-col :offset="1">
          <p class="slice-title">累计四项认证通过用户数</p>
        </el-col>
        <el-col :offset="1">
          <p class="slice-title">累计申请客户数</p>
        </el-col>
        <el-col :offset="1">
          <p class="slice-title">累计放款客户数</p>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="16">
          <p class="slice-title">运营数量总分析图</p>
        </el-col>
        <el-col :offset="1" :span="8">
          <p class="slice-title">你好</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import operationTc from '@/components/reportForm/operationTC.vue'
  export default {
    components: {
      operationTc
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.container {
  margin: 30px;
}
.number-show{
  height:104px;
  background-color:white;
  border-radius:6px;
  box-shadow: 0px 0px 10px 0px #aab5bc;
  padding:0 36px;
  text-align: center;
}
.user-number{
  font-size: 14px;
  color: #8B93A6;
  >p{
    margin-top: 15px;
    margin-bottom:12px;
  }
  >div{
    display: flex;
    align-items: center;
    justify-content: center;
    width:117px;
    height:30px;
    line-height: 27px;
    border: solid 2px #e4e6e8;
    border-radius:15px;
    margin: 0 auto;
    >img{
      margin-left:5px;
      width:18px;
      height: 16px;
    }
  }
}
.dashboard{
  margin-top: 20px;
  >.el-row{
    &:nth-child(1){
      height: 437px;
    }
    &:nth-child(2){
      height: 240px;
      margin-top: 20px;
      .el-col{
        padding:5px 15px;
      }
      .slice-title{
        font-size: 14px;
        color: #bfbfbf;
        margin-left: 6px;
      }
    }
    &:nth-child(3){
      height: 240px;
      margin-top: 20px;
      .el-col{
        padding:5px 15px;
      }
    }
    .el-col{
      padding: 20px;
      background-color:#ffffff;
      border-radius: 8px;
      box-shadow: 0px 0px 10px 0px #aab5bc;
    }
    .slice-title{
      font-size: 16px;
      color: #515151;
      margin-left: 8px;
    }
  }
}
</style>
