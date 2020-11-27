<template>
  <v-card>
      <v-flex xs12 sm10>
        <v-tree url="/item/category/list"
                :isEdit="isEdit"
                @handleAdd="handleAdd"
                @handleEdit="handleEdit"
                @handleDelete="handleDelete"
                @handleClick="handleClick"
        />
      </v-flex>
  </v-card>
</template>

<script>
  export default {
    name: "category",
    data() {
      return {
        isEdit:true
      }
    },
    methods: {
      handleAdd(node) {
        console.log("add .... ");
        console.log(node);
        //新增分类
        this.$http.post('/item/category', this.$qs.stringify(node)).then(()=>{
          this.$message.success("保存成功!");
        }).catch(()=>{
          this.$message.error("保存失败!");
        })
      },
      handleEdit(id, name) {
        this.$http.put('/item/category',this.$qs.stringify({cid:id,name:name})).then(()=>{
          this.$message.success("保存成功!");
        }).catch(()=>{
          this.$message.error("保存失败!");
        })
      },
      handleDelete(id) {
        console.log("delete ... " + id);
        this.$http.delete('/item/category',{
          params:{cid:id}
        }).then(()=>{
          this.$message.success("删除成功!");
        }).catch(()=>{
          this.$message.error("删除失败!");
        })
      },
      handleClick(node) {
        console.log(node);
      }
    }
  };
</script>

<style scoped>

</style>
