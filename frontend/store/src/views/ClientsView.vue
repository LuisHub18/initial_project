<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Clientes
                    <RouterLink to="/clientes/create" class="btn btn-primary float-end">
                        Agregar
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
               <table class="table table-borded table-stripped">
                    <thead>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>APELLIDO</th>
                        <th>DIRECCION</th>
                        <th>TELEFONO</th>
                        <th>CURP</th>
                        <th>RFC</th>
                        <th>CP</th>
                    </thead>
                    <tbody>
                        <tr v-for="(client, index) in clients" :key="index">
                            <td>{{ client.id }}</td>
                            <td>{{ client.nombre }}</td>
                            <td>{{ client.apellido }}</td>
                            <td>{{ client.direccion }}</td>
                            <td>{{ client.telefono }}</td>
                            <td>{{ client.curp }}</td>
                            <td>{{ client.rfc }}</td>
                            <td>{{ client.codigo_postal}}</td>
                            <td>Editar &nbsp; Borrar</td>
                        </tr>
                    </tbody>
               </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        name: "ClientsView",
        data(){
            return{
                clients:[]
            }
        },
        mounted(){
            this.getClients();
        },
        methods:{
            getClients(){
                axios.get('https:/localhost:300/api/clients').then( (res) => {
                    this.clients = res.data; 
                    console.log(res.data)
                })
            }
        }
    }

</script>