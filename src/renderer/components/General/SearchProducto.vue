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
        for (let index = 0; index < 50; index++) {
            this.products.push({
                name: `Producto test ${index+1}`,
                description: `Producto test ${index+1}`,
                id:index+1,
                sku: 756873496+(index+1),
                stock: 10,
                image: `https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/67654490_10218672031367891_7179299875513696256_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFwgr_ovkUKC1ENwdFwR6rFFxEEJMBgIc4XEQQkwGAhzrOAJIteF9NDXvcvVOObqc8&_nc_ohc=LN6Nd0GugA4AX9ErVkB&_nc_ht=scontent.fbog11-1.fna&oh=f3b792890fb0e9828222363e0924cd2f&oe=5FFBEDB9`,
                price: 30000
            })
        }
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