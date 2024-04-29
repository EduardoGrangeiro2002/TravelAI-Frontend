<template>
  <div v-if="response" class="blog-container">
    <div class="blog-text">
      {{ travel }}
    </div>
  </div>
</template>
  
  <script>
    import axios from 'axios';
    export default {
      data() {
        return {
          response: ''
        }
      },
      created() {
        this.travelData();
      },

      computed: {
        travel() {
          return this.response
        }
      },

      methods: {
        async travelData() {
          try {
            const query = this.$route.query;
            const url = `http://localhost:8080/travel?city=${query.city}&country=${query.country}&start_date=${query.start_date}&end_date=${query.end_date}&origin=${query.origin}`;
            const response = await axios.post(url);
            this.response = response.data.response;
          } catch (er) {
            console.error(er);
          }
        }
      }
    }
  </script>

<style scoped>
.blog-container {
  max-width: 800px; /* Limita a largura do conteúdo para melhorar a legibilidade */
  margin: auto; /* Centraliza o container na página */
  padding: 20px; /* Espaço interno para respirar */
  background-color: #f8f9fa; /* Cor de fundo suave */
  border: 1px solid #e1e4e8; /* Borda sutil */
  border-radius: 8px; /* Bordas arredondadas para uma aparência suave */
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1); /* Sombra sutil para profundidade */
  height: 100%;
}

.blog-text {
  font-family: 'Georgia', serif; /* Fonte com serifa para um look clássico de blog */
  color: #333; /* Cor de texto escura para contraste */
  line-height: 1.6; /* Espaçamento de linha para melhor legibilidade */
  font-size: 18px; /* Tamanho de fonte confortável para leitura */
  margin-bottom: 50px;
  padding-bottom: 10px;
  height: 100%;
}
</style>
  