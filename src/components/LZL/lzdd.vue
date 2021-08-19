<template>
  <div>
    <div>
      <p style="display: inline-block;margin: 1px">领证地点</p>
      <span style="display: inline-block;margin-left: 50px;margin-top: 1px">{{ checkedNames }}</span>
      <i class="el-icon-arrow-right" @click="drawer = true"></i>
    </div><hr />

    <!--    <div >您选择了菜单{{msg}}</div>-->


    <el-drawer
      title="请选择"
      :visible.sync="drawer"
      :direction="direction"
      :wrapperClosable="false">
      <input type="radio" id="dd1" value="兴业综合部" v-model="checkedNames" v-show="false">
      <label for="dd1">兴业综合部</label><br>
      <input type="radio" id="dd2" value="国投综合部" v-model="checkedNames" v-show="false">
      <label for="dd2">国投综合部</label><br>
      <input type="radio" id="dd3" value="天平综合部" v-model="checkedNames" v-show="false">
      <label for="dd3">天平综合部</label><br>
      <input type="radio" id="dd4" value="海岸综合部" v-model="checkedNames" v-show="false">
      <label for="dd4">海岸综合部</label>
      <!--      <div @click="m1">A</div>-->
      <!--      <div>b</div>-->
      <!--      <div>c</div>-->
      <!--      <ul class="nav">-->
      <!--        <li v-for="nav in navs">{{nav.li}}</li>-->
      <!--      </ul>-->
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
                checkedNames:'请选择领证地点'
            };
        },
        created(){
            localStorage.setItem('lz',this.checkedNames)//一加载界面就执行
        },
        computed: {
            checkedName() {
                return this.checkedNames
            }
        },
        watch: {//实时监听
            checkedName(newV) {
                console.log(newV)
                localStorage.setItem('lz',newV)
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
</style>
