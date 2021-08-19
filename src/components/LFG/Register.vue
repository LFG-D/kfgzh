<template>
  <el-container>
    <el-header style="height: 40px">
      <div class="header">
        <span style="margin-top: auto;">在线办理</span>
      </div>
    </el-header>
    <el-main>
      <div class="y1">
        <div class="y2">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px" :label-position="labelPosition">
            <el-form-item label="证件类型" prop="region" style="font-weight:bold ">
              <el-button @click="drawer1 = true" type="primary" style="width: 100%;height: 100%;background-color:#FFFFFF;color: #C0C4CC;font-size: 14px;">
                <i class="el-icon-arrow-right" style="float: right;"></i>
                <span style="display: inline-block;float: left;">{{ checkedNames1 }}</span>
              </el-button>
              <el-drawer
                title="请选择证件类型"
                :visible.sync="drawer1"
                :direction="direction">
                <input type="radio" id="x1" value="身份证" v-model="checkedNames1" v-show="false">
                <label for="x1">身份证</label><br>
                <input type="radio" id="x2" value="护照" v-model="checkedNames1" v-show="false">
                <label for="x2">护照</label><br>
                <input type="radio" id="x3" value="军官证" v-model="checkedNames1" v-show="false">
                <label for="x3">军官证</label><br>
                <input type="radio" id="x4" value="警官证" v-model="checkedNames1" v-show="false">
                <label for="x4">警官证</label><br>
                <input type="radio" id="x5" value="台胞证" v-model="checkedNames1" v-show="false">
                <label for="x5">台胞证</label><br>
                <input type="radio" id="x6" value="其他证件" v-model="checkedNames1" v-show="false">
                <label for="x6">其他证件</label><br>
              </el-drawer>
            </el-form-item>

            <el-form-item label="证件号码" prop="number" style="font-weight:bold ">
              <el-input v-model="ruleForm.number" placeholder="请输入证件号码"></el-input>
            </el-form-item>

            <el-form-item label="真实姓名" prop="name" style="font-weight:bold ">
              <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
            </el-form-item>

            <el-form-item label="手机号码" prop="phonenumber" style="font-weight:bold ">
              <el-input placeholder="请输入11位手机号码" v-model="ruleForm.phonenumber" class="input-with-select">
                <el-button slot="append" style="background-color: #FA883B; color: aliceblue;font-size: small">获取验证码
                </el-button>
              </el-input>
            </el-form-item>

            <el-form-item label="验证码" prop="provenumber" style="font-weight:bold ">
              <el-input v-model="ruleForm.provenumber" placeholder="请输入我们发送至您手机的验证码"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <el-row>
          <el-button type="primary" class="next" v-on:click="nx">下一步</el-button>
        </el-row>

        <div class="y3">
          <p align="left" class="a1">操作说明</p>
          <ul>
            <li align="left">1、输入手机号码后点击“获取验证码”，将所收到6位验证码输入即可。</li>
            <li align="left">2、以上填写的信息将会应用于您的在线办理，确定填写信息的真实性，有效性。</li>
          </ul>
        </div>
      </div>
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
        name: "Register",
        data() {
            return {
                labelPosition: 'left',
                drawer1: false,
                checkedNames1: '请选择证件类型',
                direction: 'btt',

                ruleForm: {
                    name: '',
                    region: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },

                rules: {
                    number: [
                        {required: true, message: '证件号码不能为空哦', trigger: 'blur'},
                        {max: 18, message: '长度在18个字符内哦', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '真实姓名不能为空哦', trigger: 'blur'}
                    ],
                    phonenumber: [
                        {required: true, message: '手机号码不能为空哦', trigger: 'blur'},
                        {min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur'}
                    ],
                    provenumber: [
                        {required: true, message: '验证码不能为空哦', trigger: 'blur'},
                        {min: 6, max: 6, message: '请输入正确的验证码', trigger: 'blur'}
                    ],
                    region: [
                        {required: true, message: '请选择证件类型', trigger: 'change'}
                    ],
                }
            };
        },

        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },

        methods:{
            nx(){
                this.$router.push({path: "../Will"})
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
