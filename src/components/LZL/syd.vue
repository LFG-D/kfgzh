<template>
  <div>
    <div  >
      <p style="display: inline-block;margin-top: 1px">公证书使用地</p>
      <span class="syd">{{ checkedNames }}</span>
      <i class="el-icon-arrow-right" @click="drawer = true"></i>
    </div>
    <el-drawer
      title="请选择"
      :visible.sync="drawer"
      :direction="direction"
      :wrapperClosable="false">
      <input type="radio" id="syd1" value="阿根廷" v-model="checkedNames" v-show="false">
      <label for="syd1">阿根廷</label><br>
      <input type="radio" id="syd2" value="奥地利" v-model="checkedNames" v-show="false">
      <label for="syd2">奥地利</label><br>
    </el-drawer>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                direction: 'btt',
                msg:'',
                checkedNames: '请选择'
            };
        },
        created(){
            localStorage.setItem('gzs',this.checkedNames)//一加载界面就执行
        },
        computed: {
            checkedName() {
                return this.checkedNames
            }
        },
        watch: {//实时监听
            checkedName(newV) {
                console.log(newV)
                localStorage.setItem('gzs',newV)
                //sessionStorage.setItem('aa', newV)

            }
        }

    }
</script>

<style>
  /*尖角*/
  .el-icon-arrow-right{
    display: inline-block;
    float: right;
  }
  /*选择*/
  .syd{
    display: inline-block;
    margin-left: 40px;
    margin-top: 1px;
  }

</style>
