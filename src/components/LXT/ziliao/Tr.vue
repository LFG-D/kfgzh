<template>
  <el-container>
  <div class="tr">
    *3、劳务合同或劳动手册等（外籍人员需提供）<br>
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
        name: "Tr"
    }
</script>

<style scoped>
  .tr{
    margin-top: 0px;
    font-size: 9px;
    text-align: left;
  }
</style>
