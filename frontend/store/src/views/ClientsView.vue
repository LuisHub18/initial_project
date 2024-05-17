<template>
    <br>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    Clients
                    <RouterLink to="/clients/create" class="btn btn-primary float-end">
                        Add
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
                        <th>ACCIONES</th>
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
                            <td>
                                <RouterLink :to="{name: 'edit_client', params: {id: client.id}}" class="btn btn-warning">
                                    Update
                                </RouterLink>
                                <button class="btn btn-danger" @click="deleteClient(client.id)">Delete</button>
                            </td>
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
                axios.get('http://localhost:3000/api/clients').then( (res) => {
                    this.clients = res.data.clients; 
                }).catch(error => {
                    console.error('Error fetching clients:', error);
                });
            },
            deleteClient(clientId) {
                axios.delete(`http://localhost:3000/api/clients/${clientId}`).then( (res) => {
                    console.log(res.data);
                    this.getClients();
                }).catch(error => {
                    console.error('Error deleting client:', error);
                });
            }
        }
    }
</script>