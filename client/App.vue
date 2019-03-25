<template>
<div>
    <ul>
        <li v-for="(todo,index) in todos" :key="index">
            {{ todo.name }} _ {{todo.age}} _ {{todo.address}}
            <button
          @click="btnDelete(index)"
        >X{{index}}</button>
            <button @click="btnEdit(todo,index)">Edit</button>
        </li>
    </ul>Name:
    <input v-model="name">
    <br>Age:
    <input v-model="age">
    <br>Address:
    <input v-model="address">
    <br>
    <button @click="btnSubmit">{{formType}}</button>
</div>
</template>

<script>
// import {Meteor} from 'meteor/meteor'
export default {
    data: {
        formType: "Add",
        todos: [{
            name: "Jon",
            age: 20,
            address: "Battambang"
        }],
        name: "Mama",
        age: 20,
        address: "Battambang",
        index: null
    },
    methods: {
        btnSubmit() {
            if (this.formType == "Add") {
                let doc={
                    name:this.name,
                    age:this.age,
                    address:this.address,
                }
                Meteor.call('insertStudent',doc,(err,result)=>{
                    if(result){
                        alert('Saved !')
                    }
                    else
                    console.log(err)
                })
            } else {
                // this.btnDelete(this.index)
                // this.btnPush()
                this.todos[this.index].name = this.name;
                this.todos[this.index].age = this.age;
                this.todos[this.index].address = this.address;
                this.formType = "Add";
            }
        },
        btnEdit(todo, index) {
            this.formType = "Update";
            this.name = todo.name;
            this.age = todo.age;
            this.address = todo.address;
            this.index = index;
            console.log(this.index);
        },
        btnDelete(index) {
            this.todos.splice(index, 1);
        },
        btnPush() {
            let doc= {
                name: this.name,
                age: this.age,
                address: this.address
                }
            this.todos.push(
               doc
            );
            this.name = "";
            this.age = null;
            this.address = "";
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 2em;
    text-align: center;
}
</style>
