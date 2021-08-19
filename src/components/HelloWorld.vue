<template>
  <div class="hello">
    {{openid}}
    这次的项目是桂林公众号的开发!!!
    <el-divider></el-divider>

    <el-button id="R1" class="R1" @click="reverseMessage1">跳转到LDM</el-button>

    <el-divider></el-divider>

    <el-button id="R2" class="R2" @click="reverseMessage2">跳转到LFG</el-button>

    <el-divider></el-divider>

    <el-button id="R3" class="R3" @click="reverseMessage3">跳转到LXT</el-button>

    <el-divider></el-divider>

    <el-button id="R4" class="R4" @click="reverseMessage4">跳转到LZL</el-button>

    <el-divider></el-divider>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                code: '',
                openid: ''
            }
        },
        methods: {
            getQueryVariable(variable) {
                var query = window.location.search.substring(1);
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == variable) {
                        return pair[1];
                    }
                }
                return (false);
            }
        },
        mounted() {
            console.log('code: ' + this.getQueryVariable("code"));
            this.code = this.getQueryVariable("code");
            this.$axios.get('https:/www.juntaitec.cn/api/auth?code=' + this.code).then(res => {
                console.log(res);
                this.openid=res.data.openid;
            });
        },

        methods:{
            reverseMessage1(){
                this.$router.push({path: "../ccgz"})

            },
            reverseMessage2(){
                this.$router.push({path: "../Register"})

            },
            reverseMessage3(){
                this.$router.push({path: "../AA"})

            },
            reverseMessage4(){
                this.$router.push({path: "../gzsx"})

            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
