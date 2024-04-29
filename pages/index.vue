<template>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">

    <div class="container">
      <h2 class="tagline">Plan your dream trip with TravelAI</h2>
  
      <form @submit.prevent="submitForm" class="form">
        <div v-if="activeField >= 1" class="input-container">
          <label for="country">Country *</label>
          <input required type="text" id="country" v-model="form.country" @blur="validateField('country', 2)">
        </div>
        <div class="input-container">
            <span v-if="!validations.country.valid" class="invalid">{{ validations.country.message }}</span>
        </div>

        <div v-if="activeField >= 2" class="input-container">
          <label for="city">Destiny *</label>
          <input required type="text" id="city" v-model="form.city" @blur="validateField('city', 3)">
        </div>
        <div class="input-container">
            <span  v-if="!validations.city.valid" class="invalid">{{ validations.city.message }}</span>
        </div>
  
        <div v-if="activeField >= 3" class="input-container">
          <label for="start_date">Start Date *</label>
          <input required type="date" id="start_date" v-model="form.start_date" @blur="validateField('start_date', 4)">
        </div>
        <div v-if="activeField >= 3" class="input-container">
            <span v-if="!validations.start_date.valid" class="invalid">{{ validations.start_date.message }}</span>
        </div>
  
        <div v-if="activeField >= 4" class="input-container">
          <label for="end_date">Return Date *</label>
          <input required type="date" id="end_date" v-model="form.end_date" @blur="validateField('end_date', 5)">
        </div>

        <div v-if="activeField >= 4" class="input-container">
            <span v-if="!validations.end_date.valid" class="invalid">{{ validations.end_date.message }}</span>
        </div>
  
        <div v-if="activeField >= 5" class="input-container">
          <label for="origin">Origin *</label>
          <input required type="text" id="origin" v-model="form.origin" @blur="validateField('origin', 6)">
        </div>

        <div v-if="activeField >= 6" class="input-container">
            <span v-if="!validations.origin.valid" class="invalid">{{ validations.origin.message }}</span>
        </div>

        <button v-if="activeField >= 6"  type="submit" class="submit-button">Start your dream</button>
      </form>
    </div>
</template>
  
  
<script>
  export default {
      data() {
        return {
          form: {
            country: '',
            city: '',
            start_date: '',
            end_date: '',
            origin: ''
          },
          validations: {
            country: { valid: false, message: '' },
            city: { valid: false, message: '' },
            start_date: { valid: false, message: '' },
            end_date: { valid: false, message: '' },
            origin: { valid: false, message: '' }
          },
          activeField: 1
        }
        
      },
      methods: {
        async submitForm() {
          const allFieldsValid = Object.values(this.validations).every(v => v.valid);
          if (!allFieldsValid) {
            alert('Please fill all required fields correctly.');
            return;
          }

          const data = {
            country: this.form.country,
            city: this.form.city,
            start_date: this.form.start_date,
            end_date: this.form.end_date,
            origin: this.form.origin
          };
          
          this.$router.push({ path: '/travel', query: data });
        },
        validateField(field, nextFieldNumber) {
            if(this.form[field].trim() === '') {
              this.validations[field].valid = false
              this.validations[field].message = 'Este campo é obrigatório.'
            } else {
              this.validations[field].valid = true
              this.validations[field].message = ''
              this.activeField = nextFieldNumber
            }
        }
      }
  }
</script>
  
  <style scoped>
  #country {
    text-transform: capitalize;
    display: block;
  }
  .container {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to right, #FFE5D9, #FFAFBD);
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
  }
  
  .tagline {
    text-align: center;
    margin-bottom: 2rem;
    color: #1a535c;
    font-weight: 600;
  }
  
  .input-container {
    position: relative;
    margin-bottom: 1rem;
  }
  
  input[type="text"], input[type="date"] {
    width: 100%;
    padding: 1rem;
    margin: 5px 0;
    box-sizing: border-box;
    border: 2px solid #1a535c;
    border-radius: 36px;
    font-size: 1rem;
  }
  
  input[type="text"]::placeholder, input[type="date"]::placeholder {
    color: #4ecdc4;
  }
  
  .valid, .invalid {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
  }
  
  .valid {
    color: #4ecdc4;
  }
  
  .invalid {
    color: #ff6b6b;
    font-size: 0.8rem;
  }
  
  .submit-button {
    width: 100%;
    background-color: #ff6b6b;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #ff5050;
  }
  
</style>