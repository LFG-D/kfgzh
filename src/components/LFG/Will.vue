<template>
  <el-container>
    <el-header style="height: 40px">
      <div class="header">
        <span style="margin-top: auto;">上传材料</span>
      </div>
    </el-header>
    <el-main>
      <div class="B1">
        <p align="left" class="b1">温馨提示！</p>
        <p align="left" class="b2">所有上传材料最好为原图且内容清晰，手机拍摄最好将文件置于A4白色纸背景上</p>
      </div>
      <el-divider></el-divider>
      <div class="B2">
        <p align="left" class="b3">立遗嘱人的身份证（正反面）</p>
        <el-upload
          align="left"
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
      <el-divider></el-divider>
      <div class="B3">
        <p align="left" class="b3">立遗嘱人的户口簿</p>
        <el-upload
          align="left"
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
      <el-divider></el-divider>
      <div class="B4">
        <p align="left" class="b3">立遗嘱人的婚姻状况证明</p>
        <el-upload
          align="left"
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
      <el-divider></el-divider>
      <div class="B5">
        <p align="left" class="b3">立遗嘱人的财产凭证</p>
        <el-upload
          align="left"
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
      <el-divider></el-divider>
      <div class="B6">
        <p align="left" class="b3">其他证件或材料</p>
        <el-upload
          align="left"
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
      <el-divider></el-divider>

      <el-row>
        <el-button type="primary" style="width: 130px" v-on:click="up">上一步</el-button>
        <el-button type="primary" style="width: 130px">下一步</el-button>
      </el-row>
    </el-main>
    <el-footer>
      <div class="y4">
        <p>本服务由广西桂林市桂林公证处提供</p>
        <p>桂林市骏泰有限公司提供技术支持</p>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "Will",

        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false
            };
        },

        methods: {
            goBack() {
                console.log('go back');
            }
        },

        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        },

        methods:{
            up(){
                // this.$router.push({path: "../Register"})
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

  .header{
    width: 100%;
    background-color: #02A7F0;
    height: 40px;
    color: white;
    font-size: 20px;
  }
</style>
