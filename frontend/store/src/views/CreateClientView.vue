<template>
    <br>
    <h1>
        Create Client
    </h1>
    <form class="container" @submit.prevent="createClient">
        <div class="form-group">
            <label for="id">Id:</label>
            <input v-model="client.id" type="text" class="form-control" id="id" placeholder="Id..">
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
        <button type="submit" class="btn btn-primary">Send</button>
    </form>
</template>

<style scoped>
    h1{
        text-align: center;
    }
    form {
        margin:auto;
        max-width: 500px;
    }
</style>

<script>
    import axios from 'axios';

    export default{
            name: "CreateClientView",
            data() {
                return {
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
                }
            },
            methods: {
                createClient() {
                    axios.post('http://localhost:3000/api/clients', this.client)
                    .then(response => {
                        console.log('Form submitted successfully:', response.data);
                    })
                    .catch(error => {
                        console.error('Error submitting form:', error);
                    });
                }
            }
    }
</script>
