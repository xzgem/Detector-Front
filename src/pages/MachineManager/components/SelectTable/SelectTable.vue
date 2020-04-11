<template>
  <div class="select-table">
    <basic-container>
      <el-row  :gutter="10">
        <el-col :span="2">
          <el-button v-show="true"
            :disabled="selections.length !== 0"
            @click="addMachine(selections[0])"
            type="primary"
            size="small">新增</el-button>
        </el-col>

        <el-col :span="2" v-show="selections.length > 0">
          <el-button
            @click="deleteMachine(selections.map(i => i.id))"
            type="danger"
            size="small">删除</el-button>
        </el-col>

      </el-row>
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="服务器名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="ip"
          label="IP地址"
          width="200">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="250">
          <template slot-scope="scope">
            <el-button
              @click="viewMachine(scope.row)"
              type="primary"
              size="small">查看</el-button>
            <el-button
                    @click="modifyMachine(scope.row)"
                    type="success"
                    size="small">修改</el-button>
            <el-button
              @click="deleteMachine([scope.row].map(i => i.id))"
              type="danger"
              size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </basic-container>
  </div>
</template>
<script>
import BasicContainer from '@vue-materials/basic-container';


export default {
  components: { BasicContainer },
  name: 'SelectTable',



  data() {

    // const  a = this.$http.get('/system/machine/getAll');

    const res = [{
        id: 0,
        name: '徐炳华',
        ip: '127.0.0.1',
        create_time: '2018-05-02',
      }, {
        id: 1,
        name: '张端峰',
        ip: '127.0.0.2',
        create_time: '2018-05-04',
      },
        {
          id: 2,
          name: '张端峰',
          ip: '127.0.0.2',
          create_time: '2018-05-04',
        },
        {
          id: 3,
          name: '张端峰',
          ip: '127.0.0.2',
          create_time: '2018-05-04',
        }];

    // window.sessionStorage.setItem('allMachine', res.data);


    // if (res.code !== 200) return this.$message.error('获取失败');

    return {
      tableData: res,
      selections: [],
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.selections = val;
    },
    deleteMachine(idArray) {
      this.tableData = this.tableData.filter(i => !idArray.includes(i.id));
      this.$http.post("/system/machine/delete", idArray);
    },

    modifyMachine(row) {{
        this.$prompt('服务器名称', '服务器修改', {
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    },

    viewMachine(row) {
      console.log(row);
    },

    addMachine() {
      console.log(1);
    }




    // handleView(row) {
    //   const content = `
    //     <div>商品名称：${row.name}</div>
    //     <div>商品单价：¥ ${row.price}</div>
    //     <div>入库日期：${row.date}</div>
    //   `;
    //   const title = '商品详情';
    //   this.$alert(
    //     content,
    //     title,
    //     {
    //       dangerouslyUseHTMLString: true,
    //       callback: () => {
    //         // TODO: MessageBox callback;
    //       },
    //     },
    //   );
    // },
  },
};
</script>

<style>
.select-table {
}
</style>
