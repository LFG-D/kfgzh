<template>
  <div>
    <div class="dingbu">
      <p class="gzsx">公证事项</p>
    </div>
    <div>
      <p style="display: inline-block">公证用途</p>
      <p class="wt1">委托公证</p>
    </div>
    <hr class="hr"/>
    <syd/>
    <hr class="hr"/>
    <gzsyw/>
    <hr class="hr"/>
    <lzdd/>
    <zjgzsx/>
    <hr class="hr"/>

    <div>
      <p style="display: inline-block;margin: 1px">公证申请人</p>
      <span style="display: inline-block;margin-left: 50px;margin-top: 1px">{{ checkedNames }}</span>
      <i class="el-icon-arrow-right" @click="drawer = true"></i>
    </div>
    <el-drawer
      title="请选择"
      :visible.sync="drawer"
      :direction="direction"
      :wrapperClosable="false">
      <input type="radio" id="sq1" value="个人办理" v-model="checkedNames" v-show="false">
      <label for="sq1">个人办理</label><br>
      <input type="radio" id="sq2" value="法人委托" v-model="checkedNames" v-show="false">
      <label for="sq2">法人委托</label><br>
    </el-drawer>

    <hr/>
    <el-button class="xyb" @click="xyb">下一步</el-button>
  </div>

</template>
<script>
    import gzsyw from './gzsyw'
    import syd from './syd'
    import zjgzsx from './zjgzsx'
    import lzdd from './lzdd'

    export default {
        components: {
            gzsyw, syd, zjgzsx, lzdd
        },
        data() {
            return {
                drawer: false,
                direction: 'btt',
                msg: '',
                checkedNames: '请选择申请人'
                // navs:[
                //     {li:'z'},
                //     {li:'x'},
                //     {li:'c'}
                // ]
            };
        },
        methods: {
            // m1(msg) {
            //      this.msg=msg
            //     console.log("__--"+this.msg)
            // },

            xyb() {
                //let aa = sessionStorage.getItem('aa')
                let aa = localStorage.getItem("Click")
                let ss = localStorage.getItem("gzs")
                let dd = localStorage.getItem("zjgz")
                let lz = localStorage.getItem("lz")
                // window.localStorage.removeItem('Click')
                console.log("===" + dd)
                if (ss == '请选择') {
                    this.open3()
                } else if (aa == '请选择') {
                    this.open2()
                } else if (lz == '请选择领证地点') {
                    this.open1()
                } else if (dd == '') {
                    this.open4()
                } else if (this.checkedNames == '请选择申请人') {
                    this.open5()
                } else {
                    if (this.checkedNames == '个人办理') {
                        this.$router.push('./grbl');
                    } else {
                        this.$router.push('./frwt');
                    }
                }
            },
            open1() {
                this.$alert('请选择领证地点', '提示', {
                    confirmButtonText: '确定',
                    customClass:'message_box_alert'
                }).catch(() => {
                });
            },
            open2() {
                this.$alert('请选择公证书译文', '提示', {
                    confirmButtonText: '确定',
                    customClass:'message_box_alert'

                }).catch(() => {
                });
            },
            open3() {
                this.$alert('请选择公证书使用地', '提示', {
                    confirmButtonText: '确定',
                    customClass:'message_box_alert'

                }).catch(() => {
                });
            },
            open4() {
                this.$alert('请选择公证事项', '提示', {
                    confirmButtonText: '确定',
                    customClass:'message_box_alert'

                }).catch(() => {
                });
            },
            open5() {
                this.$alert('请选择申请人', '提示', {
                    confirmButtonText: '确定',
                    customClass:'message_box_alert'

                }).catch(() => {
                });
            }
        }
    }
</script>
<style >
  /*顶部蓝条*/
  .dingbu {
    background-color: cornflowerblue;
    width: 100%;
    height: 40px;
  }

  /*公证事项*/
  .gzsx {
    text-align: center;
    height: 20px;
  }

  /*下一步*/
  .xyb {
    background-color: cornflowerblue;
    color: white;
  }

  /*尖角*/
  .el-icon-arrow-right {
    display: inline-block;
  }

  /*弹框*/
  .message_box_alert {
    width: 200px!important;
  }


  /*公证用途-委托公证*/
  .wt1 {
    display: inline-block;
    margin-left: 70px;
  }

  /*直线*/
  .hr {
    margin-top: 10px;
  }
</style>
