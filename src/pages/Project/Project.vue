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
                        prop="maxNumber"
                        label="报名限额"
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
                                size="small" v-if="scope.row.show === 1">报名
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
