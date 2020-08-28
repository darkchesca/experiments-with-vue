<template>
    <div class="add-book-modal">
        <b-btn
                v-b-modal="'add-book-modal'"
        >Add book
        </b-btn>
        <b-modal
                id="add-book-modal"
        >
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <h3 class="text-center">Add Book</h3>
                    <form @submit.prevent="handleSubmitForm">
                        <div class="form-group">
                            <label>Title</label>
                            <input class="form-control" required type="text" v-model="book['title']">
                        </div>

                        <div class="form-group">
                            <label>Author</label>
                            <input class="form-control" required type="email" v-model="book['author']">
                        </div>

                        <div class="form-group">
                            <label>Notes</label>
                            <input class="form-control" type="text" v-model="book['notes']">
                        </div>

                        <div class="form-group">
                            <button class="btn btn-danger btn-block">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </b-modal>

    </div>

</template>

<script>
    import {BButton, BModal} from 'bootstrap-vue';

    export default {
        name: "experiments-modal-add-element",
        components: {
            BButton,
            BModal
        },
        data() {
            return {
                book: {
                    title: '',
                    author: '',
                    notes: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
            }
        }
    }
</script>

<style lang="scss">

</style>