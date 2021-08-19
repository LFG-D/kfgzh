<template>
  <el-container>
  <div class="lk">
    *4、委托书和代理人身份证件（若非本人办理需提供）<br>
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
        name: "Lk"
    }
</script>

<style scoped>
.lk{
  margin-top: 0px;
  font-size: 9px;
  text-align: left;
}
</style>
