<template>
    <div class="bb">
    <Heed/>
    <Tis/>
      <Tis1/>
      <el-divider></el-divider>
<!--      <linee/>-->
      <Fir/>
      <el-divider></el-divider>

      <!--      <Linee/>-->
      <SS/>
      <el-divider></el-divider>

      <!--      <Linee/>-->
      <Tr/>
      <el-divider></el-divider>

      <!--      <Linee/>-->
      <Lk/>
      <el-divider></el-divider>

      <!--      <Linee/>-->
      <Butt/>
      <Bu/>
      <Foot/>
      <router-view/>
    </div>
</template>

<script>
  import Heed from "./Heed";
    import Tis from "./Tis";
  import Tis1 from "./Tis1";
  import Fir from "./Fir";
  import SS from "./SS";
  import Tr from "./Tr";
  import Lk from "./Lk";
  import Foot from "../xuzhi/Foot";
  import Butt from "../ziliao/Butt";
  import Bu from "./Bu";
    export default {
        name: "BB",
        components: {Bu, Butt, Foot, Lk, Tr, SS, Fir, Tis1, Tis, Heed}
    }
</script>

<style scoped>
.bb{
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}
</style>
