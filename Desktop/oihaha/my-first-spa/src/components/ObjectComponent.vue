<template>
    <form @submit.prevent = "addPerson">
        <tr>
            <td><input type="text" v-model="name" placeholder="Nome:"></td>
            <td><input type="text" v-model="age"  placeholder="Idade:"></td>
            <td><input type="text" v-model="document"  placeholder="Documento:"></td>
        </tr>

        <button type="button" @click="addPerson">Adicionar</button>
    </form>

    <div v-for="(person, index) in personList" :key="index"
    style="border: 1px, solid, black; width: 400px; text-align: center; align-items: center; font-family: 'Lucida Sans', 'Lucida Sans Regular', Lucida Grande, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
    <tr>
        <td>Nome: {{ person.name }}</td>
        <td>idade: {{ person.age }}</td>
        <td>Documento {{ person.document }}</td>
    </tr>
    </div>

</template>


<script>
    export default {
        data() {
            return {
                personList: [],
                name: '',
                age: '',
                document: ''
            }
        },
        methods: {
            addPerson() {
                let person = {
                    name:this.name,
                    age:this.age,
                    document:this.document,
                }
                this.personList.push(person)
            }
        }
    }
</script>


<style></style>