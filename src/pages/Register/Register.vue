<template>
    <div class="register_container">
        <div class="register_box">
            <div class="avatar_box">
                <!-- 头像 -->
                <img src="../../assets/logo.png" alt />
            </div>
            <!-- 注册表单 -->
            <el-form :model="registerForm" label-width="0px" :rules="registerFormRules" class="register_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="registerForm.username" prefix-icon="el-icon-user-solid" />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input type="password" v-model="registerForm.password" prefix-icon="el-icon-s-goods" />
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="register">注册</el-button>
                    <el-button type="info" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                registerForm: {
                    username: "",
                    password: ""
                },
                registerFormRules: {
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
            async register() {
                const {data: res} = await this.$http.post('/auth/register', this.registerForm);
                console.log(res);
                if (res.code !== 200) return this.$message.error('注册失败');
                this.$message.success('注册成功');
                // window.sessionStorage.setItem('token', res.data.token);
                await this.$router.push('/login');
            },
            login() {
                this.$router.push('/login');
            }
        }
    };
</script>

<style lang="less" scoped>
    .register_container {
        background-color: #2b4b6b;
        height: 100%;
    }
    .register_box {
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
        .register_form {
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
        }
    }
</style>
