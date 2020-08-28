<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <b-table :fields="fields" :items="items"/>
        </div>
    </div>

</template>

<script>
    export default {
        name: "experiments-table-view-elements",
        data() {
            return {
                items: [
                    {
                        'title': 'titolo',
                        'author': 'autore',
                        'notes': 'autore'
                    }, {
                        'title': 'titolo',
                        'author': 'autore',
                        'notes': 'autore'
                    }
                ],
                fields: ['title', 'author', 'notes']
            }
        }
    }
</script>

<style scoped>

</style>