<template>
  <div>
    <h1>{{id ? '编辑' : '新增' }}文章</h1>
    <el-form @submit.native.prevent="save" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="model.describe"></el-input>
      </el-form-item>
      <el-form-item label="封面">
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
        <span>*封面建议尺寸400*400</span>
      </el-form-item>
      <el-form-item label="内容">
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
        await this.$axios.put(`rest/articles/${this.id}`, this.model);
      } else {
        await this.$axios.post("rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const { data } = await this.$axios.get(`rest/articles/${this.id}`);
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
  width: 5rem;
  height: 5rem;
  display: block;
}
</style>
