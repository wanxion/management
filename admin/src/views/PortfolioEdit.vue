<template>
  <div>
    <h1>{{id ? '编辑' : '新增' }}案例</h1>
    <el-form @submit.native.prevent="save" label-width="80px">
      <el-form-item label="企业名称">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="企业logo">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="res => $set(model,'cover',res.url)"
        >
          <img v-if="model.cover" :src="`http://144.202.115.192:9881/${model.cover}`" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <span>*logo建议尺寸400*200</span>
      </el-form-item>
      <el-form-item label="企业描述">
        <vue-editor v-model="model.body" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  props: {
    id: ""
  },
  components: {
    VueEditor
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$axios.put(`rest/portfolios/${this.id}`, this.model);
      } else {
        await this.$axios.post("rest/portfolios", this.model);
      }
      this.$router.push("/portfolios/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const { data } = await this.$axios.get(`rest/portfolios/${this.id}`);
      this.model = data;
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$axios.post("upload", formData);
      const url = `http://144.202.115.192:9881/${res.data.url}`;
      Editor.insertEmbed(cursorLocation, "image", url);
      resetUploader();
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}
.avatar {
  width: 200px;
  height: 100px;
  display: block;
}
</style>
