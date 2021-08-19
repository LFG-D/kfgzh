<template>
  <div>
  <div >
    <p style="display: inline-block;margin-top: 1px">公证书译文</p>
    <span style="display: inline-block;;margin-top: 1px;margin-left: 50px">{{ checkedNames }}</span>
    <i class="el-icon-arrow-right" @click="drawer = true"></i>
  </div>
  <el-drawer
    title="请选择"
    :visible.sync="drawer"
    :direction="direction"
    :wrapperClosable="false">
    <input type="radio" id="yw1" value="英文" v-model="checkedNames" v-show="false">
    <label for="yw1">英文</label><br>
    <input type="radio" id="yw2" value="法文" v-model="checkedNames" v-show="false">
    <label for="yw2">法文</label><br>
    <input type="radio" id="yw3" value="德文" v-model="checkedNames" v-show="false">
    <label for="yw3">德文</label><br>
    <input type="radio" id="yw4" value="西班牙文" v-model="checkedNames" v-show="false">
    <label for="yw4">西班牙文</label>
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
            localStorage.setItem('Click',this.checkedNames)//一加载界面就执行
        },
        computed: {
            checkedName() {
                return this.checkedNames
            }
        },
        watch: {//实时监听
            checkedName(newV) {
                console.log(newV)
                localStorage.setItem('Click',newV)
                 //sessionStorage.setItem('aa', newV)

            }
        }

    }
</script>

<style>
  /*尖角*/
  .el-icon-arrow-right{
    display: inline-block;
  }
</style>
