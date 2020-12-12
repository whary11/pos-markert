<template>
    <div class="container">
        <h1 class="text-center mt-4">Excel DB</h1>
        <div class="row">
            <div class="form-group col-6">
                <label for="tables">Seleccionar tabla</label>
                <v-select 
                    :options="tables"
                    label="name"
                    inputId="tables"
                    v-model="tableStep1"
                    @input="getNameColumns('step1')"
                    placeholder="Selecciona una tabla..."
                >
                </v-select>
            <ColumnsTableDd :headers="headersTable1" :table="table1" @selectColunmAndTableRelationShip="selectColunmAndTableRelationShipEvent"/>
            </div>

            <div class="form-group col-6">
                <label for="tables">Seleccionar tabla a relacionar</label>
                <v-select 
                    :options="tables"
                    label="name"
                    inputId="tables"
                    v-model="tableStep2"
                    @input="getNameColumns('step2')"
                    placeholder="Selecciona una tabla a relacionar.."
                >
                </v-select>
                <ColumnsTableDd :headers="headersTable2" :table="table2" @selectColunmAndTableRelationShip="selectColunmAndTableRelationShipEvent"/>
            </div>
        </div>
    </div>
</template>

<script>
import ViewDataExcelImport from './Step1/ViewDataExcelImport'
import ColumnsTableDd from './Step1/ColumnsTableDd'
export default {
    components:{
        ViewDataExcelImport,
        ColumnsTableDd
    },
    data(){
        return {
            tables:[],
            headersTable1:[],
            headersTable2:[],
            table1:false,
            table2:false,
            column:false,
            tableStep1:false,
            tableStep2:false,
        }
    },
    mounted() {
        this.tables = this.$db.getNameTables()
    },
    methods:{
        getNameColumns(row){
            if (row == 'step1') {
                this.table1 = this.tableStep1
                this.headersTable1 = this.$db.getNameColumns(this.tableStep1.name)
            }else if(row == 'step2'){
                this.table2 = this.tableStep2
                this.headersTable2 = this.$db.getNameColumns(this.tableStep2.name)
            }
        },

        

        // Event
        selectColunmAndTableRelationShipEvent(data){
            console.log(data);
        }
    }

}
</script>