<template>
  <NavComp></NavComp>
    <div class="perfil">
      <h1>Meu Perfil</h1>
      <div class="profile-card">
        <div class="profile-header">
          <img class="profile-img" :src="user.image" alt="Foto de Perfil" />
          <h2>{{ user.name }}</h2>
          <p>{{ user.email }}</p>
        </div>
        <div class="profile-details">
          <h3>Informações</h3>
          <div class="info-item">
            <strong>Nome Completo:</strong>
            <span>{{ user.name }}</span>
          </div>
          <div class="info-item">
            <strong>Email:</strong>
            <span>{{ user.email }}</span>
          </div>
          <div class="info-item">
            <strong>Telefone:</strong>
            <span>{{ user.phone }}</span>
          </div>
          <div class="info-item">
            <strong>Endereço:</strong>
            <span>{{ user.address }}</span>
          </div>
        </div>
        <button @click="editProfile" class="edit-btn">Editar Perfil</button>
      </div>
    </div>
  </template>
  
  <script>
  import NavComp from './NavComp.vue';
  export default {
    name: "ProfileComp",
    components: {
    NavComp,
  },
    data() {
      return {
        user: {
          name: "Ronaldo",
          email: "ronaldo@gmail.com",
          phone: "(11) 98765-4321",
          address: "Rua Fodona, 123 - São Paulo, SP",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ronaldinho_in_2019.jpg/640px-Ronaldinho_in_2019.jpg",
        },
      };
    },
    methods: {
      editProfile() {
        alert("Funcionalidade de edição em desenvolvimento!");
      },
    },
  };
  </script>
  
  <style>
  .perfil {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    color: #880204;
    margin-bottom: 20px;
  }
  
  .profile-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .profile-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #880204;
  }
  
  .profile-details {
    margin-top: 20px;
    text-align: left;
  }
  
  h3 {
    color: #880204;
    margin-bottom: 10px;
  }
  
  .info-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f8f2f2;
    border-radius: 5px;
  }
  
  .info-item strong {
    color: #555;
  }
  
  .info-item span {
    color: #333;
  }
  
  .edit-btn {
    margin-top: 20px;
    background-color: #20c997;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .edit-btn:hover {
    background-color: #17a589;
  }
  </style>
  