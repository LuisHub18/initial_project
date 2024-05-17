<template>
    <div class="card">
        <div class="card-header">
            <h4>Update Client</h4>
            <div v-if="message" class="alert alert-success" role="alert">
                Updated successfully!
            </div>
        </div>
        <div class="card-body">
            <form class="container" @submit.prevent="updateClient" v-if="!isLoading">
                <div class="form-group">
                    <label for="id">Id:</label>
                    <input v-model="client.id" type="text" class="form-control" id="id" placeholder="Id.." disabled>
                </div>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input v-model="client.nombre" type="text" class="form-control" id="name" placeholder="Name..">
                </div>
                <div class="form-group">
                    <label for="middleName">MiddleName:</label>
                    <input v-model="client.apellido" type="text" class="form-control" id="middleName" placeholder="MiddleName..">
                </div>
                <div class="form-group">
                    <label for="direction">Direction:</label>
                    <input v-model="client.direccion" type="text" class="form-control" id="direction" placeholder="Direction..">
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input v-model="client.telefono" type="phone" class="form-control" id="phone" placeholder="Phone..">
                </div>
                <div class="form-group">
                    <label for="curp">Curp:</label>
                    <input v-model="client.curp" type="text" class="form-control" id="curp" placeholder="Curp..">
                </div>
                <div class="form-group">
                    <label for="rfc">Rfc:</label>
                    <input v-model="client.rfc" type="text" class="form-control" id="rfc" placeholder="Rfc..">
                </div>
                <div class="form-group">
                    <label for="cp">CP:</label>
                    <input v-model="client.codigo_postal" type="text" class="form-control" id="cp" placeholder="CP..">
                </div>
                <br>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
            <div v-else>
                Loading...
            </div>
        </div> 
    </div>       
</template>

<script>
    import axios from 'axios';

    export default {
        name: "EditClient",
        data() {
            return {
                isLoading: true,
                message: false,
                client: {
                    id: '',
                    nombre: '',
                    apellido: '',
                    direccion: '',
                    telefono: '',
                    curp: '',
                    rfc: '',
                    codigo_postal: ''
                }
            };
         },
        mounted() {
            this.getClient();
        },
        methods: {
            updateClient() {
                const id = this.$route.params.id;
                const clientData = {
                    "nombre": `${this.client.nombre}`,
                    "apellido": `${this.client.apellido}`,
                    "direccion": `${this.client.direccion}`,
                    "telefono": `${this.client.telefono}`,
                    "curp": `${this.client.curp}`,
                    "rfc": `${this.client.rfc}`,
                    "codigo_postal": `${this.client.codigo_postal}`
                };

                axios.put(`http://localhost:3000/api/clients/${id}`, clientData)
                    .then(response => {
                        console.log(response.data);
                        this.client = {
                            id: '',
                            nombre: '',
                            apellido: '',
                            direccion: '',
                            telefono: '',
                            curp: '',
                            rfc: '',
                            codigo_postal: ''
                        }
                        this.message = true;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            getClient() {
                const id = this.$route.params.id;
                axios.get(`http://localhost:3000/api/clients/${id}`)
                    .then(response => {
                        console.log(this.client);
                        this.client = response.data.client;
                        console.log(this.client);
                        this.isLoading = false; 
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
</script>
