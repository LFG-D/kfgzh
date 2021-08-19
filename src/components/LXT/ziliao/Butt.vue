<template>
    <Button class="bbt" @click="xxz">上一步</Button>
</template>

<script>
    export default {
        name: "Butt",
        methods:{
            xxz(){
                this.$router.go(-1)
            }
    }
    }

</script>

<style scoped>
.bbt{
  height: 25px;
  width: 30%;
  float: left;
  margin-left: 15%;
  border:2px solid #b8bde3;
  font-size: 10px;
  text-align: center;
  margin-top: 25px;
  /*margin-bottom: 20px;*/
  background-color: #5583ff;
}
</style>
