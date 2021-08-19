<template>
  <el-container>
    <div class="fir">
      <p align="left" class="b2">1、申请人身份证明（身份证，户口本，或护照）根据申请人身份，上传相应材料！！！</p>

<!--      <img src="./add.jpg" style="width: 70px;height:70px;margin-top: 2px">-->
      <el-upload
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


    </el-container>
</template>

<script>
    export default {
        name: "Fir",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>
.fir{
  margin-top: 0px;
  font-size: 9px;
  text-align: left;
}
</style>
