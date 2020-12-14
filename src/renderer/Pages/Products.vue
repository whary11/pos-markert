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
        for (let index = 0; index < 50; index++) {
            this.products.push({
                name: `Producto test ${index+1}`,
                description: `Producto test ${index+1}`,
                id:index+1,
                sku: 756873496+(index+1),
                stock: 10,
                image: `https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/67654490_10218672031367891_7179299875513696256_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFwgr_ovkUKC1ENwdFwR6rFFxEEJMBgIc4XEQQkwGAhzrOAJIteF9NDXvcvVOObqc8&_nc_ohc=LN6Nd0GugA4AX9ErVkB&_nc_ht=scontent.fbog11-1.fna&oh=f3b792890fb0e9828222363e0924cd2f&oe=5FFBEDB9`
            })
        }
    }
}
</script>