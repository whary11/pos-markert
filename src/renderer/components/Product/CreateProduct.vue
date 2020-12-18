<template>
    <div>
        <modal :name="nameModal" :scrollable="true" height="auto" width="60%" :clickToClose="false" :draggable="true" :resizable="true" :adaptive="true">
            <form @submit.prevent="createProduct">
                <div class="modal-header">
                    <h5 class="modal-title">Crear de producto</h5>
                    <button type="button" slot="top-right" class="close" @click="$modal.hide(nameModal)" data-dismiss="modal" aria-label="Close">
                        ❌
                    </button>
                </div>
                <div class="modal-body row">
                    <div class="form-group col-md-6">
                        <label for="name">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre" id="name" v-model="newProduct.name" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="decription">Descripción</label>
                        <input type="text" class="form-control" placeholder="Descripción" id="decription" v-model="newProduct.description" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="sku">SKU</label>
                        <input type="text" class="form-control" placeholder="SKU" id="sku" v-model="newProduct.sku" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="coste">Costo</label>
                        <input type="number" class="form-control" placeholder="Costo" id="coste" v-model="newProduct.coste" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="price">Precio</label>
                        <input type="number" class="form-control" placeholder="Precio" id="price" v-model="newProduct.price" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="stock">Stock</label>
                        <input type="number" class="form-control" placeholder="Stock" id="stock" v-model="newProduct.stock" required>
                    </div>
                    <v-select :options="brands" label="name" placeholder="Digita el nombre de la marca" v-model="newProduct.brand"></v-select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger text-white" data-dismiss="modal" @click="$modal.hide(nameModal)">Cancelar</button>
                    <button type="submit" class="btn btn-primary text-white" >Crear producto</button>
                </div>
            </form>
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
        },
        data(){
            return {
                brands:this.$Brand.get(),
                newProduct: {}
            }
        },
        mounted(){},
        methods: {
            createProduct(){
                if (!this.newProduct.brand) {
                    this.$swal({
                        text: "Debes seleccionar una marca.",
                        icon: "warning"
                    })
                    return
                }
                this.newProduct.image = "https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/67654490_10218672031367891_7179299875513696256_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFwgr_ovkUKC1ENwdFwR6rFFxEEJMBgIc4XEQQkwGAhzrOAJIteF9NDXvcvVOObqc8&_nc_ohc=LN6Nd0GugA4AX9ErVkB&_nc_ht=scontent.fbog11-1.fna&oh=f3b792890fb0e9828222363e0924cd2f&oe=5FFBEDB9"
                this.$Product.create(this.newProduct)
                this.newProduct = {}
                this.$emit("CreateProduct", this.newProduct)
                this.$modal.hide(this.nameModal)

            }
        }
    }
    </script>