<template>
    <div>
        <h1>Productos</h1>
        <v-row class="m-4">
            <v-client-table :data="products" :columns="columns" :options="{headings}">
                <template slot="Foto" slot-scope="{row}">
                    <v-avatar :color="'black'" :size="30" class="d-block text-center mx-auto mb-9">
                        <img
                            :src="row.image"
                            :alt="row.description"
                        >
                    </v-avatar>
                </template>
                <template slot="Opciones" slot-scope="{row}">
                    <v-btn color="primary">
                        Editar
                    </v-btn>
                </template>
            </v-client-table>
        </v-row>

        <!-- Crear Producto -->
        <CreateProduct nameModal="createProductModal" @CreateProduct="createProductEvent" />
        <v-btn
        elevation="9"
        fab
        x-small
        right
        dark
        class="v-btn--example"
        @click="$modal.show('createProductModal')"
        >+</v-btn>
    </div>
</template>
<script>
import CreateProduct from '../components/Product/CreateProduct'
export default {
    components:{
        CreateProduct
    },
    data(){
        return {
            products: this.$Product.get(),
            columns: ['id', 'name', 'description','sku','stock', 'Foto', 'Opciones'],
            headings: {
                name: "Nombre",
                description: "Descripción",
                stock: "Disponible para la venta"
            }
        }
    },
    mounted(){
        let product = this.$Product.find(2);
        console.log(product);
    },
    methods: {
        createProductEvent(newProduct){
            this.$swal({
                text: "Producto creado correctamente",
                icon: "success"
            })
            this.products = this.$Product.get()
        }
    }
}
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  .v-btn--example {
    bottom: 0;
    position: fixed;
    margin: 0 0 16px 16px;
  }
</style>