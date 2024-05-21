<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Client</h4>
                <div v-if="mensaje == 1" class="alert alert-success" role="alert">
                    Data saved successfully!
                </div>
            </div>
            <div class="card-body">
                <Form :validation-schema="validationSchema" @submit="saveClient()">
                <div class="mb-3">
                    Id
                    <Field name="id" id="id" type="text" class="form-control" v-model="model.client.id" />
                    <ErrorMessage name="id" class="errorValidacion"/>
                </div>
                 <div class="mb-3">
                    Nombre
                    <Field name="nombre" id="nombre" type="text" class="form-control" v-model="model.client.nombre" />
                    <ErrorMessage name="nombre" class="errorValidacion" />
                </div>
                 <div class="mb-3">
                    Apellido
                    <Field name="apellido" id="apellido" type="text" class="form-control" v-model="model.client.apellido" />
                    <ErrorMessage name="apellido" class="errorValidacion"/>
                </div>
                 <div class="mb-3">
                    Dirección
                    <Field name="direccion" id="direccion" type="text" class="form-control" v-model="model.client.direccion" />
                    <ErrorMessage name="direccion" class="errorValidacion"/>
                </div>
                 <div class="mb-3">
                    Teléfono
                    <Field name="telefono" id="telefono" type="text" class="form-control" v-model="model.client.telefono" />
                    <ErrorMessage name="telefono" class="errorValidacion"/>
                </div>
                 <div class="mb-3">
                    RFC
                    <Field name="rfc" id="rfc" type="text" class="form-control" v-model="model.client.rfc" />
                    <ErrorMessage name="rfc" class="errorValidacion"/>
                </div>
                 <div class="mb-3">
                    CURP
                    <Field name="curp" id="curp" type="text" class="form-control" v-model="model.client.curp" />
                    <ErrorMessage name="curp" class="errorValidacion"/>
                </div>
                 <div class="mb-3">
                    Codigo postal
                    <Field name="codigo_postal" id="codigo_postal" type="text" class="form-control" v-model="model.client.codigo_postal" />
                    <ErrorMessage name="codigo_postal" class="errorValidacion"/>
                </div>
                 <div class="mb-3">
                    <button type="submit" class="btn btn-primary">Send</button>
                </div>
                </Form>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
import { Field,Form,ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
export default {
    name: "CreateClientView",
    components: { Field,Form,ErrorMessage },
    data(){
        const validationSchema = toTypedSchema(
            zod.object({
                id: zod.string({message: 'Requerido'}).min(1),
                nombre: zod.string({message: 'Requerido'}).min(1),
                apellido: zod.string({message: 'Requerido'}).min(1),
                direccion: zod.string({message: 'Requerido'}).min(1),
                telefono: zod.string({message: 'Requerido'}).min(1).max(10),
                rfc: zod.string({message: 'Requerido'}).min(1),
                curp: zod.string({message: 'Requerido'}).min(1),
                cp: zod.string({message: 'Requerido'}).min(1),
            })
        )
        return{
            validationSchema,
            mensaje: 0,
            model:{
                client:{
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
        }
    },
    methods:{
        saveClient(){
            console.log("Exito")
            axios.post('http://localhost:3000/api/clients',this.model.client)
            .then(res => {
                //si insertamos 1 registro
                if(res.data.affectedRows == 1){ 
                    //limpiamos los cuadros de texto
                    this.model.client = { 
                        id: '',
                        nombre: '',
                        apellido: '',
                        direccion: '',
                        telefono: '',
                        curp: '',
                        rfc: '',
                        codigo_postal: ''
                    }
                    //Para que salga el mensaje de éxito
                    this.mensaje = 1;
                }
            })
        }
    }
}
</script>

<style scoped>
    .errorValidacion{
        color: red;
        font-weight: bold;
    }
</style>