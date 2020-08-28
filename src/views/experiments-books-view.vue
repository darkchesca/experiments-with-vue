<template>
  <div class="books-view">
    <h1>This is a books page</h1>
    <div class="books-view-buttons-container">
      <AddBookModal/>
    </div>
    <BooksTable/>
  </div>
</template>

<script>
  import BooksTable from "@/components/experiments-table-view-elements.vue";
  import AddBookModal from "@/components/experiments-modal-add-element.vue";

  export default {
    name: "experiments-books-view",
    components: {
      BooksTable,
      AddBookModal
    }
  }
</script>

<style lang="scss">

</style>
