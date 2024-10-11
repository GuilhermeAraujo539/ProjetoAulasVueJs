<template>
  <div class="containier5">

    <div class="contact-page">
      <h1>Contato</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email" class="text-label">E-mail:</label>
          <input type="text" id="email" v-model="email" required class="form-input" />
        </div>

        <div class="form-group">
          <label for="assunto" class="text-label">Assunto:</label>
          <select id="assunto" v-model="assunto" required class="form-select">
            <option value="" disabled selected>Escolha um assunto</option>
            <option value="duvida">Dúvida</option>
            <option value="sugestao">Sugestão</option>
            <option value="reclamacao">Reclamação</option>
          </select>
        </div>

        <div class="form-group">
          <label for="mensagem" class="text-label">Mensagem:</label>
          <textarea id="mensagem" v-model="mensagem" required class="form-textarea"></textarea>
        </div>

        <button type="submit" class="submit-buttonn">Enviar</button>
      </form>
    </div>

    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Mensagem Enviada!</h2>
        <p>Sua mensagem foi enviada com sucesso.</p>
        <button @click="closeModal" class="close-button">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  data() {
    return {
      email: '',
      assunto: '',
      mensagem: '',
      showModal: false,
    };
  },
  methods: {
    handleSubmit() {
      this.showModal = true;
      this.email = '';
      this.assunto = '';
      this.mensagem = '';
    },
    closeModal() {
      this.showModal = false;
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');



.contact-page {
  display: flex;
  max-width: 600px;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  border-radius: 8px;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin: 15px 0;
  color: white;
}

.text-label {
  display: block;
  color: white;
  margin-bottom: 5px;
}

.form-input,
.form-textarea {
  width: 400px;
  padding: 10px;
  color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: black;
  color: white;
}

.form-select option {
  background-color: black;
  color: white;
}

.form-textarea {
  height: 100px;
  color: white;
}

.submit-buttonn {
  background-color: #2cb5a0;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.submit-buttonn:hover {
  background-color: #24958b;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white; 
  color: black; 
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 500px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.modal-content h2,p {
 background-color: transparent;
 color: black;
}

.close-button {
  background-color: #2cb5a0;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #24958b;
}

</style>
