<template>
  <div>
    <h1>案例列表</h1>
    <el-table :data="items">
      <el-table-column prop="title" label="企业名称"></el-table-column>
      <el-table-column label="企业logo">
        <template slot-scope="scope">
          <img :src="`http://144.202.115.192:9881/${scope.row.cover}`" style="height:5rem;" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/portfolios/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const { data } = await this.$axios.get("rest/portfolios");
      this.items = data;
    },
    async remove(row) {
      this.$confirm(`是否需要删除“${row.title}”`, "删除提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$axios.delete(`rest/portfolios/${row._id}`);
          this.$message({
            type: "success",
            message: "删除成功"
          });
          this.fetch();
        })
        .catch(() => {});
    }
  },
  created() {
    this.fetch();
  }
};
</script>