<template>
  <div v-if="response" class="blog-container">
    <div class="blog-text" v-html="formattedTravelText"></div>
  </div>
  <div v-if="isLoading" class="loading-indicator">
    <span></span><span></span><span></span> <!-- Simulando o ícone de digitando -->
  </div>
</template>

  
<script>
import axios from 'axios';
export default {
  data() {
    return {
      response: '',
      isLoading: false // Controla o estado de carregamento
    }
  },
  computed: {
    formattedTravelText() {
      return this.response.replace(/\n/g, '<br>');
    }
  },
  created() {
    this.travelData();
  },
  methods: {
    async travelData() {
      this.isLoading = true; // Inicia o carregamento
      try {
        const query = this.$route.query;
        const url = `http://localhost:8080/travel?city=${query.city}&country=${query.country}&start_date=${query.start_date}&end_date=${query.end_date}&origin=${query.origin}`;
        const response = await axios.post(url);
        this.response = response.data.response;
      } catch (er) {
        console.error(er);
      } finally {
        this.isLoading = false; // Finaliza o carregamento
      }
    }
  }
}
</script>


<style scoped>
.typing-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.typing-indicator span {
  display: inline-block;
  width: 12px; /* Tamanho maior */
  height: 12px;
  border-radius: 50%;
  background-color: #4ecdc4; /* Cor mais visível */
  margin: 0 5px;
  animation: bounce 1.4s infinite;
}


@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
}

.blog-container {
  max-width: 800px;
  margin: auto;
  padding: 80px;
  background-color: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto; 
  max-height: 100%;
}


.blog-text {
  font-family: 'Georgia', serif;
  color: #333;
  line-height: 1.6;
  font-size: 18px;
}
</style>

  