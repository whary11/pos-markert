<template>
    <div>
        <modal v-if="showModal" @close="showModal = false">
            
        </modal>
        <label for="import" class="btn btn-primary">Cargar</label>
        <input type="file" name="import" id="import" class="d-none" @change="getExcelData">

            <div slot="body" class="table-responsive" v-if="header.length >0">
                <h3 slot="header">Excel data</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" v-for="(item, index) in header" :key="index">{{this.$fun.shortText(item)}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr> -->
                        
                    </tbody>
                </table>
            </div>

        <!-- <button v-if="showButton"  id="show-modal" @click="showModal = true" class="btn btn-success">Ver info</button> -->
    </div>
</template>
<script>
// import Modal from '../UI/Modal'
import readXlsxFile from 'read-excel-file'


export default {
    components:{
    },
    data(){
        return {
            showModal:false,
            header: []
        }
    },
    mounted() {

       
    },
    methods: {
        getExcelData(e){
            let file = e.target.files[0]
            readXlsxFile(file).then((rows,w) => {
                console.log(rows);
                this.header = rows[1];
                // this.showModal = true
            })
        },
        
    },
    computed: {
        showButton(){
            if (this.header.length >0) {
                return true;
            }else{
                return false
            }
        }
    },
}
</script>