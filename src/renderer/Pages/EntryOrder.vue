<template>
    <div>
        <h1>Orden de venta</h1>
        <div class="row">
            <div class="form-group col-md-6">
                <label for="">Ciente</label>
                <v-select :options="customers" label="name" placeholder="Cliente"  v-model="order.customer"/>
                
                <button class="btn btn-primary mt-2" @click="$modal.show('seach_product_entry_order')">Buscar producto</button>
                <!-- Buscador de productos -->
                <SearchProducts nameModal="seach_product_entry_order" :addInEnterEvent="true" @Product="setProductSelected"/>
                
                <!-- Render de productos seleccionados -->
                <div class="row" v-for="(product, key) in order.products" :key="key">
                    <div class="col-4">
                        <v-avatar :color="'black'" :size="30" class="mx-auto mr-4">
                            <img :src="product.image" :alt="product.description">
                        </v-avatar>
                        <span >{{product.name}}
                            <button type="button" slot="top-right" class="close" @click="deleteQuantity(product, key)" data-dismiss="modal" aria-label="Close">
                                -
                            </button>
                            <span>{{product.quantity}}</span>
                            <button type="button" slot="top-right" class="close" @click="addQuantity(product)" data-dismiss="modal" aria-label="Close">
                                +
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="border p-4 rounded">
                    <h2 class="text-center">Información del cliente</h2>
                    <template v-if="order && order.customer">
                        <span>Nombre: {{order.customer.name}}</span><br>
                        <span>Email: {{order.customer.email}}</span><br>
                        <span>Phone: {{order.customer.phone}}</span><br>
                        <span>Numero de compras: {{order.customer.quantity_orders}}</span>
                    </template>
                    <template v-else>
                        <p class="text-center">No ha seleccionado cliente.</p>
                    </template>
                </div>
                <div class="form-group mt-4">
                    <label for="count-payment">Con cuanto te pagan ?</label>
                    <input type="number" class="form-control" placeholder="Con cuanto te pagan ?" v-model="order.count_payment">
                    <small class="text-success">${{ order.count_payment && new Intl.NumberFormat().format(order.count_payment)}}</small>
                </div>
                <div class="border p-4 mt-4">
                    <h4 class="text-center">Detalle</h4>
                    <p class="text-danger">
                        Debes devolver: {{getValueToReturn}}
                        </p>
                    <p class="text-primary">Total: ${{new Intl.NumberFormat().format(getTotalOrder)}}</p>
                </div>
                <button class="btn btn-success mt-4" @click.prevent="generateOrder()">Generar venta</button>
            </div>
        </div>
    </div>
</template>

<script>
import SearchProducts from '../components/General/SearchProducto'
export default {
    components: {
        SearchProducts
    },
    data(){
        return {
            order:{
                customer:null,
                products:[],
                total: 0,
                count_payment: 0
            },
            customers: [
                {name:'Luis Raga', phone: '3043788629', email: 'whary11@gmail.com', quantity_orders: 10},
                {name:'Katherine Leon', phone: '3173788629', email: 'kanoche19@gmail.com',quantity_orders: 2}
            ]
        }
    },
    methods: {
        setProductSelected(product){
            let result = this.order.products.find(item => item.id == product.id)
            if (!result) {
                product.quantity = 1;
                this.order.products.push(product)
            }else{
                this.addQuantity(product)
            }
        },
        addQuantity(product){
            let newProducts = []
            this.order.products.map(prod => {
                if (prod.id == product.id) {
                    prod.quantity += 1 
                }
                newProducts.push(prod)

            })

            this.order.products = newProducts
        },

        deleteQuantity(product, index){
            let newProducts = []
            this.order.products.map(prod => {
                if (prod.id == product.id) {
                    prod.quantity -= 1 
                    if (prod.quantity < 1) {
                        this.$swal({
                            icon: 'info',
                            title: 'Deseas eliminar el producto ?',
                            showDenyButton: true,
                            confirmButtonText: `SI`,
                            denyButtonText: `NO`,
                        }).then((result) => {
                            if (result.isConfirmed) {

                                this.order.products.splice(index, 1)
                                this.$swal({
                                    text: "Producto eliminado.",
                                    icon: "success",
                                })
                            } else if (result.isDenied) {
        
                            }
                        })
                    }
                }
                newProducts.push(prod)
            })
            this.order.products = newProducts
        },

        generateOrder(){
            console.log(this.order);
        }
    },
    computed: {
        getTotalOrder(){
            let total = 0;
            this.order.products.map(product => {
                total += product.price*product.quantity
            })
            this.order.total = total;
            return total;
        },
        getValueToReturn(){
            if (this.order.count_payment < this.order.total || this.order.count_payment == 0) {
                return `Sin información para calcular.`
            }
            return  `$ ${new Intl.NumberFormat().format(this.order.count_payment - this.order.total)}`
        }
    }
}
</script>