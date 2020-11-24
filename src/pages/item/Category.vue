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
      },
      handleEdit(id, name) {
        console.log("李超燃正在执行修改");
        //console.log("edit... id: " + id + ", name: " + name);
      },
      handleDelete(id) {
        console.log("delete ... " + id)
      },
      handleClick(node) {
        //console.log(node)
        //console.log("别点了")
      }
    }
  };
</script>

<style scoped>

</style>
