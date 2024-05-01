<template>
  <header class="header-container">
      <!-- router-link para redirecionar para a página inicial -->
      <router-link to="/" class="header-title-link">
          <h1 class="header-title">TravelAI</h1>
      </router-link>
      <p class="header-subtitle">Planning your dreams</p>
  </header>
</template>



<style scoped>
.header-container {
  background-color: white;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
}

.header-title {
  margin: 0;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2.0rem;
}

.header-title-link {
  text-decoration: none; /* Remove qualquer sublinhado padrão de links */
}

.header-title-link:hover, .header-title-link:focus {
  color: #007BFF; /* Cor azul ao passar o mouse ou focar */
  cursor: pointer; /* Cursor em forma de ponteiro para indicar clicabilidade */
  text-decoration: underline; /* Sublinha o título ao passar o mouse */
}

.header-subtitle {
  color: #555;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
</style>
