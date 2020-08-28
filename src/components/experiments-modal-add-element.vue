<template>
    <div class="add-book-modal">
        <b-btn
                v-b-modal="'add-book-modal'"
        >Add book
        </b-btn>
        <b-modal
                id="add-book-modal"
        >
            <div>
                Modal content
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