<template>
  <div>
    <div  >
      <p style="display: inline-block;margin-top: 1px">增加公证事项</p>
      <i class="el-icon-arrow-right" @click="drawer = true"></i>
      <p >已选事项：{{second.join('  ')}}</p>
    </div>
    <el-drawer
      title="请选择"
      :visible.sync="drawer"
      :direction="direction"
      :wrapperClosable="false">
        <input type="checkbox" v-model="second" value="Jack" />
        <label>Jack</label>
        <input type="checkbox"v-model="second" value="Bob" />
        <label>Bob</label>
        <input type="checkbox" v-model="second" value="Lily" />
        <label>Lily</label>
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
                second:[]
            };
        },
        created(){
            localStorage.setItem('zjgz',this.second.join('  '))//一加载界面就执行
        },
        computed: {
            checkedName() {
                return this.second.join('  ')
            }
        },
        watch: {//实时监听
            checkedName(newV) {
                console.log(newV)
                localStorage.setItem('zjgz',newV)
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
