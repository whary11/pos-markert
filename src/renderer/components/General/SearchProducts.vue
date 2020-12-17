<template>
    <div>
        <modal :name="nameModal" :scrollable="true" height="auto" width="60%">
            <div>
                <div class="modal-header">
                    <h5 class="modal-title">Buscador de productos</h5>
                    <button type="button" slot="top-right" class="close" @click="$modal.hide(nameModal)" data-dismiss="modal" aria-label="Close">
                        ❌
                    </button>
                </div>
                <div class="modal-body">
                    <v-select :options="products" label="name" placeholder="Digita el nombre del producto" @input="selectedOption"></v-select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Agregar</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="$modal.hide(nameModal)">Cerrar</button>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
    props: {
        nameModal: {
            required: true,
            type: String
        },
        addInEnterEvent: {
            required: false,
            type: Boolean
        }
    },
    data(){
        return {
            products: []
        }
    },

    mounted(){
        let products = this.$Product.get();
        this.products = products
    },
    methods: {
        selectedOption(product){
            this.$emit('Product', product)
            if (product && this.addInEnterEvent) {
                this.$modal.hide(this.nameModal)
            }
        }
    }
}
</script>

<style scoped>
    .vs__dropdown-menu{
        z-index: 2000 !important;
    }
</style>