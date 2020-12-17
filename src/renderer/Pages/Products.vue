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
    </div>
</template>
<script>
export default {
    data(){
        return {
            products: [],
            columns: ['id', 'name', 'description','sku','stock', 'Foto', 'Opciones'],
            headings: {
                name: "Nombre",
                description: "Descripción",
                stock: "Disponible para la venta"
            }
        }
    },
    mounted(){
        let products = this.$Product.get();
        this.products = products
    }
}
</script>