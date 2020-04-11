<template>
    <div class="select-table">
        <basic-container>
            <el-row :gutter="10">
            </el-row>

            <!-- Form -->
            <el-button type="message" @click="dialogFormVisible = true" v-if="addShow === 2">新增</el-button>

            <el-dialog title="项目" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="项目名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="项目金额" :label-width="formLabelWidth">
                        <el-input v-model="form.money" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="截至日期" :label-width="formLabelWidth">
                        <el-date-picker
                                v-model="form.deadline"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="允许投递的人数" :label-width="formLabelWidth">
                        <el-input v-model="form.maxNumber" autocomplete="off"></el-input>
                    </el-form-item>

<!--                    <el-form-item label="活动区域" :label-width="formLabelWidth">-->
<!--                        <el-select v-model="form.region" placeholder="请选择活动区域">-->
<!--                            <el-option label="区域一" value="shanghai"></el-option>-->
<!--                            <el-option label="区域二" value="beijing"></el-option>-->
<!--                        </el-select>-->
<!--                    </el-form-item>-->
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false, addProject(form)">确 定</el-button>
                </div>
            </el-dialog>

            <el-table
                    :data="tableData"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="id"
                        width="40">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="项目名称"
                >
                </el-table-column>
                <el-table-column
                        prop="creater"
                        label="发起人"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="contracter"
                        label="承接人"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="deadline"
                        label="截止日期"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="createTime"
                        label="创建日期 "
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="money"
                        label="金额"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="signUpNumber"
                        label="已报名人数"
                        width="100">
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="操作"
                        width="300">
                    <template slot-scope="scope">
                        <el-button
                                @click="viewProjectNumber(scope.row)"
                                type="primary"
                                size="small" v-if="scope.row.show === 1">查看已报名
                        </el-button>
                        <el-button
                                @click="deleteProject(scope.row)"
                                type="primary"
                                size="small"
                        v-if="scope.row.show === 2 && scope.row.show === 2">删除
                        </el-button>
                        <el-button
                                @click="passProject(scope.row)"
                                type="success"
                                size="small"
                                v-if="scope.row.status === 1 && scope.row.show === 1">通过
                        </el-button>
                        <el-button
                                @click="unPassProject(scope.row)"
                                type="danger"
                                size="small"
                                v-if="scope.row.status === 1 && scope.row.show === 1">不通过
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </basic-container>
    </div>
</template>
<script>
    import BasicContainer from '@vue-materials/basic-container';

    export default {
        components: {BasicContainer},
        name: 'ProjectManager',

        data() {
            return {
                addShow: parseInt(localStorage.getItem('level')),
                tableData: null,
                selections: [],
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    money: '',
                    deadline: '',
                    maxNumber: '',
                },
                formLabelWidth: '120px'
            };
        },

        created() {
            const _this = this;
            this.$http({
                method: 'get',
                url: '/getAllProject',
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                }
            }).then(
                function (response) {
                    console.log(response.data.data);
                    _this.tableData = response.data.data;
                    console.log(_this.tableData);
                }
            );
        },

        methods: {
            handleSelectionChange(val) {
                this.selections = val;
            },

            passProject(row) {
                console.log(row);
                this.$http({
                    method: 'post',
                    url: '/pass/' + row.id + '/' + 2,
                    headers: {
                        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                    }
                }).then((response) => {
                    location.reload();
                    alert(response.data.message);
                });
            },

            addProject(form) {
                this.$http({
                    method: 'post',
                    url: '/addProject',
                    data: form,
                    headers: {
                        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                    }
                }).then((response) => {
                    alert(response.data.message);
                });
            },

            viewProjectNumber(row) {
                console.log(row);
                window.localStorage.setItem("projectId", row.id);
                window.location.href = '/SignUpManager';
            },

            unPassProject(row) {
                console.log(row);
                this.$http({
                    method: 'post',
                    url: '/pass/' + row.id + '/' + 3,
                    headers: {
                        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                    }
                }).then((response) => {
                    location.reload();
                    alert(response.data.message);
                });
            },
        },
    };
</script>

<style>
    .select-table {
    }
</style>
