<template>
    <div>
        <form  @submit.prevent="addItems">
            <input v-model="inpputValue">
            <input type="submit" value="adicionar">
        </form>
    </div>
    <div style="justify-content: center; align-items: center; align-content: center; justify-items: center;">

            <table
                style="border: 1px, solid, black; width: 400px; text-align: center; align-items: center; font-family: 'Lucida Sans', 'Lucida Sans Regular', Lucida Grande, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
                <tr>
                    <td>index</td>
                    <td>item</td>
                </tr>
                <tr v-for="(item, index) in itens" :key="index">
                    <td>{{ index + 1}}</td>
                    <td> {{ item }}</td>
                </tr>
            </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itens: [],
            inpputValue: ''
        }
    },
    props: {

    },
    methods: {
        addItems() {
            this.itens.push(this.inpputValue);
            this.inpputValue = '';
        }
    }
}
</script>

<style>
table,
tr,
td{
    border: 1px, solid black;
    margin: auto;
}
</style>