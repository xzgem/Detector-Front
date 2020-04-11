<template>
    <div class="select-table">
        <basic-container>
            <el-row :gutter="10">
            </el-row>
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="id">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                >
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="300">
                    <template slot-scope="scope">
                        <el-button
                                @click="viewPerson(scope.row)"
                                type="primary"
                                size="small">查看个人信息
                        </el-button>
                        <el-button
                                @click="chooseContracter(scope.row)"
                                type="success"
                                size="small">选取该人承接任务
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
                tableData: null,
                selections: [],
            };
        },

        created() {
            const _this = this;
            this.$http({
                method: 'get',
                url: '/getAllSignUp' + '/' + window.localStorage.getItem("projectId"),
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

            chooseContracter(row) {
                console.log(row);
                this.$http({
                    method: 'post',
                    url: '/choose/contracter/' + row.pid + '/' + row.name,
                    headers: {
                        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                    }
                }).then(() => {
                    window.location.href = '/ProjectManager';
                });
            },

            viewPerson(row) {
                window.location.href = '/getAllSignUp' + '/' + row.id;
            },
        },
    };
</script>

<style>
    .select-table {
    }
</style>
