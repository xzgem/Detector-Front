<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <!-- 头像 -->
                <img src="../../assets/logo.png" alt />
            </div>
            <!-- 登陆表单 -->
            <el-form :model="loginForm" label-width="0px" :rules="loginFormRules" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid" />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-s-goods" />
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登陆</el-button>
                    <el-button type="info" @click="register">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginForm: {
                    username: "",
                    password: ""
                },
                loginFormRules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                }
            };
        },
        methods: {
             login() {
                this.$http.post('/login', this.loginForm).then((res) => {
                    console.log(res);
                    if (res.data.code !== 200) return this.$message.error('登陆失败');
                    this.$message.success('登陆成功');
                    window.localStorage.setItem('token', res.data.data.token);
                    window.localStorage.setItem('level', res.data.data.level);
                    window.localStorage.setItem('username', this.loginForm.username);
                    this.$router.push('/index');
                    location.reload();
                });
            },
            register() {
                this.$router.push('/register');
            }
        }
    };
</script>

<style lang="less" scoped>
    .login_container {
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box {
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .avatar_box {
            height: 130px;
            width: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .btns {
            display: flex;
            justify-content: flex-end;
        }
        .login_form {
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
        }
    }
</style>
