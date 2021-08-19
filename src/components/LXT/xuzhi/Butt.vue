<template>
    <Button class="bb" @click="xxa">下一步</Button>
</template>

<script>
    export default {
        name: "Butt",
        methods:{
            xxa() {
                this.$router.push({path: "/BB"})
            }
        }
    }
</script>

<style scoped>
.bb{
  height: 25px;
  width: 90%;
  float: left;
  margin-left: 5%;
  border:2px solid #b8bde3;
  font-size: 10px;
  text-align: center;
  margin-top: 25px;
  /*margin-bottom: 20px;*/
  background-color: #5583ff;
}
</style>
