<template>
    <div class="list-group mb-4">
        <div class="form-group" v-if="table">
            <span class="mb-4"> {{`La tabla ${this.$fun.shortText(table.name)} tiene ${headers.length} columnas.`}}</span>
            <!-- <label for="colunms">Selecciona una columna llave de la relación..</label> -->
            <v-select 
                :options="headers"
                label="name"
                inputId="colunms"
                @input="selectColunmAndTableRelationShip"
                placeholder="Selecciona una columna llave de la relación.."
            >
            </v-select>
        </div>
    </div>
</template>

<script>
export default {
    props:['headers', 'table'],
    data(){
        return {

        }
    },
    methods:{
        shortText(text){
            return text
        },
        selectColunmAndTableRelationShip(colnm, table){

            this.$emit('selectColunmAndTableRelationShip', {colnm,table})
        }
    }
}
</script>