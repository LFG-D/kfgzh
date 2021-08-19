<template>
  <div class="hello">
    {{openid}}
    <div class="header">
      <span style="margin-top: auto;">在线办理</span>
    </div>
    <div class="bbody">
      <div class="y1">
        <el-button @click="drawer1 = true" type="primary" style="width: 100%;height: 100%;background-color: transparent;border: transparent;color: #2c3e50;font-size: 16px;margin-top: 10px;">
          <span style="float: left;">公证类型</span>
          <i class="el-icon-arrow-right" style="float: right;"></i>
          <span style="display: inline-block;float: right;">{{ checkedNames1 }}</span>
        </el-button>
        <el-drawer
          title="请选择公证类型"
          :visible.sync="drawer1"
          :direction="direction">
          <input type="radio" id="lh" value="离婚财产公证" v-model="checkedNames1" v-show="false">
          <label for="lh">离婚财产公证</label><br>
          <input type="radio" id="fq" value="夫妻财产公证" v-model="checkedNames1" v-show="false">
          <label for="fq">夫妻财产公证</label><br>
          <input type="radio" id="hq" value="婚前财产公证" v-model="checkedNames1" v-show="false">
          <label for="hq">婚前财产公证</label><br>
        </el-drawer>
        <span id="a1"></span>
      </div>

      <hr>

      <div class="y2">
        <span style="float: left;margin-left: 20px;color: #2c3e50;font-size: 16px;margin-top: 5px;">真实姓名</span>
        <input type="text" style="width: 200px;height: 30px;border: transparent;"/>
      </div>

      <hr>

      <div class="y3">
        <el-button @click="drawer2 = true" type="primary" style="width: 100%;height: 100%;background-color: transparent;border: transparent;color: #2c3e50;font-size: 16px;">
          <span style="float: left;">人员类型</span>
          <i class="el-icon-arrow-right" style="float: right;"></i>
          <span style="display: inline-block;float: right;">{{ checkedNames2 }}</span>
        </el-button>
        <el-drawer
          title="请选择人员类型"
          :visible.sync="drawer2"
          :direction="direction">
          <input type="radio" id="zg" value="中国籍人员" v-model="checkedNames2" v-show="false">
          <label for="zg">中国籍人员</label><br>
          <input type="radio" id="gat" value="境外港澳台人员" v-model="checkedNames2" v-show="false">
          <label for="gat">境外港澳台人员</label><br>
          <input type="radio" id="jw" value="境外人员" v-model="checkedNames2" v-show="false">
          <label for="jw">境外人员</label><br>
        </el-drawer>
      </div>

      <hr>

      <div class="y4">
        <el-button @click="drawer3 = true" type="primary" style="width: 100%;height: 100%;background-color: transparent;border: transparent;color: #2c3e50;font-size: 16px;">
          <span style="float: left;">证件类型</span>
          <i class="el-icon-arrow-right" style="float: right;"></i>
          <span style="display: inline-block;float: right;">{{ checkedNames3 }}</span>
        </el-button>
        <el-drawer
          title="请选择证件类型"
          :visible.sync="drawer3"
          :direction="direction">
          <input type="radio" id="sfz" value="身份证" v-model="checkedNames3" v-show="false">
          <label for="sfz">身份证</label><br>
          <input type="radio" id="hkb" value="户口本" v-model="checkedNames3" v-show="false">
          <label for="hkb">户口本</label><br>
        </el-drawer>
      </div>

      <hr>

      <div class="y5">
        <el-button @click="drawer4 = true" type="primary" style="width: 100%;height: 100%;background-color: transparent;border: transparent;color: #2c3e50;font-size: 16px;">
          <span style="float: left;">婚姻状况</span>
          <i class="el-icon-arrow-right" style="float: right;"></i>
          <span style="display: inline-block;float: right;">{{ checkedNames4 }}</span>
        </el-button>
        <el-drawer
          title="请选择婚姻状况"
          :visible.sync="drawer4"
          :direction="direction">
          <input type="radio" id="wzh" value="离婚后未再婚" v-model="checkedNames4" v-show="false">
          <label for="wzh">离婚后未再婚</label><br>
          <input type="radio" id="zh" value="离婚后再婚" v-model="checkedNames4" v-show="false">
          <label for="zh">离婚后再婚</label><br>
          <input type="radio" id="yh" value="已婚" v-model="checkedNames4" v-show="false">
          <label for="yh">已婚</label><br>
          <input type="radio" id="so" value="丧偶" v-model="checkedNames4" v-show="false">
          <label for="so">丧偶</label><br>
        </el-drawer>
      </div>

      <hr>

      <div class="y6">
        <span  style="float: left;margin-left: 20px;margin-top: 60px;color: #2c3e50;font-size: 16px;">婚姻状况证明</span>

        <div class="n">
          <el-upload
            style="float: none;"
            class="uload"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
      </div>

      <hr>

      <div class="y7">
        <el-button @click="drawer5 = true" type="primary" style="width: 100%;height: 100%;background-color: transparent;border: transparent;color: #2c3e50;font-size: 16px;">
          <span style="float: left;">财产凭证类型</span>
          <i class="el-icon-arrow-right" style="float: right;"></i>
          <span style="display: inline-block;float: right;">{{ checkedNames5 }}</span>
        </el-button>
        <el-drawer
          title="请选择财产凭证类型"
          :visible.sync="drawer5"
          :direction="direction">
          <input type="radio" id="cqz" value="产权证" v-model="checkedNames5" v-show="false">
          <label for="cqz">产权证</label><br>
          <input type="radio" id="gfht" value="购房合同" v-model="checkedNames5" v-show="false">
          <label for="gfht">购房合同</label><br>
          <input type="radio" id="jkfp" value="缴款发票" v-model="checkedNames5" v-show="false">
          <label for="jkfp">缴款发票</label><br>
          <input type="radio" id="ckpz" value="存款凭证" v-model="checkedNames5" v-show="false">
          <label for="ckpz">存款凭证</label><br>
          <input type="radio" id="gqzm" value="股权证明" v-model="checkedNames5" v-show="false">
          <label for="gqzm">股权证明</label><br>
        </el-drawer>
      </div>

      <hr>

      <div class="y8">
        <span style="float: left;margin-left: 20px;margin-top: 60px;color: #2c3e50;font-size: 16px;">财产凭证</span>
        <div class="n">
          <el-upload
            class="uload"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
      </div>
    </div>

    <hr>
    <br>

    <el-button type="primary" style="width: 80%;height: 80%;text-align: center;">提交</el-button>

    <br>

    <div class="y9">
      <div class="wxts">
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="x1"><strong>温馨提示:</strong></span>本处尽可能的向您列明办理此项公证所需证明资料，但不排除承办公证员根据此公证事项的具体情况要求提供的其他证明材料，不明之处请向承办公证员咨询，并以承办公证员要求提供的为准。</p>
      </div>
      <br>
      <div class="footer">
        <p>本服务由桂林市桂林公证处提供</p>
        <p class="x3">桂林骏泰信息科技有限公司提供技术支持</p>
      </div>
    </div>
  </div>
</template>



<script>
    export default {
        name: 'ccgz',
        data() {
            return {
                drawer1: false,
                drawer2: false,
                drawer3: false,
                drawer4: false,
                drawer5: false,
                direction: 'btt',
                msg:'',
                checkedNames1: '请选择',
                checkedNames2: '请选择',
                checkedNames3: '请选择',
                checkedNames4: '请选择',
                checkedNames5: '请选择',
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },

            change(event){
                const _this = this;
                console.log(_this.value)
                if(_this.label == "离婚财产公证"){
                    this.value = event.target.value; //获取option对应的value值
                    console.log("你的选择是"+this.value);
                    document.getElementById("a1").innerText="注：离婚协议写子女抚养权的需提供子女出生证。";
                }
            }
        }
    }
</script>
<style>
  /*.n{*/
  /*  width: 50px;*/
  /*  height: 50px;*/
  /*}*/
  .header{
    width: 100%;
    background-color: #02A7F0;
    height: 40px;
    color: white;
    font-size: 20px;
  }
  .wxts{
    font-size: 14px;
    background-color: #F5CDCD;
    text-align: left;
  }
  .x1{
    color: #E92D93;
  }
  .footer{
    font-size: 12px;
  }
  .x3{
    color: #999999;
  }
</style>

