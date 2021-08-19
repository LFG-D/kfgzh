<template>
    <div class="aa">
      <hea/>
      <Coo/>
      <Tip/>
      <Butt/>
      <Foot/>
      <router-view/>
    </div>
</template>

<script>
    import Hea from "./Hea";
    import Coo from "./Coo";
    import Tip from "./Tip";
    import Butt from "./Butt";
    import Foot from "./Foot";
    export default {
        name: "AA",
        components: {Foot, Butt, Coo, Hea,Tip}
    }
</script>

<style scoped>
.aa{
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}
</style>
