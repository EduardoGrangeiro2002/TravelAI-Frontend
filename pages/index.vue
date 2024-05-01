<template>
  <div class="chat-container">
    <div v-if="activeField >= 1" class="chat-message question">
      <p>Which country are you planning to visit?</p>
      <input required type="text" id="country" v-model="form.country" @blur="validateField('country', 2)" placeholder="Type here...">
      <span v-if="!validations.country.valid" class="error">{{ validations.country.message }}</span>
    </div>

    <div v-if="activeField >= 2" class="chat-message question">
      <p>What's your destination city?</p>
      <input required type="text" id="city" v-model="form.city" @blur="validateField('city', 3)" placeholder="Type here...">
      <span v-if="!validations.city.valid" class="error">{{ validations.city.message }}</span>
    </div>

    <div v-if="activeField >= 3" class="chat-message question">
      <p>When would you like to start your trip?</p>
      <input required type="date" id="start_date" v-model="form.start_date" @blur="validateField('start_date', 4)" placeholder="Select date...">
      <span v-if="!validations.start_date.valid" class="error">{{ validations.start_date.message }}</span>
    </div>

    <div v-if="activeField >= 4" class="chat-message question">
      <p>When will you return?</p>
      <input required type="date" id="end_date" v-model="form.end_date" @blur="validateField('end_date', 5)" placeholder="Select date...">
      <span v-if="!validations.end_date.valid" class="error">{{ validations.end_date.message }}</span>
    </div>

    <div v-if="activeField >= 5" class="chat-message question">
      <p>Where are you traveling from?</p>
      <input required type="text" id="origin" v-model="form.origin" @blur="validateField('origin', 6)" placeholder="Type here...">
      <span v-if="!validations.origin.valid" class="error">{{ validations.origin.message }}</span>
    </div>

    <button v-if="activeField >= 6" @click="submitForm" type="submit" class="submit-button">Start your dream</button>
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
    validateField(field, nextFieldNumber) {
      if(this.form[field].trim() === '') {
        this.validations[field].valid = false;
        this.validations[field].message = 'This field is required.';
      } else {
        this.validations[field].valid = true;
        this.validations[field].message = '';
        this.activeField = nextFieldNumber;
      }
    },
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
    }
  }
}
</script>
  
<style scoped>
.chat-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 10px 10px 80px; /* aumentado o padding-bottom */
  background: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative; /* Importante para posicionamento relativo dentro do container */
}


.chat-message {
  background: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  position: relative;
}

.question {
  border-left: 5px solid #4ecdc4;
}

input[type="text"], input[type="date"] {
  width: calc(100% - 20px);
  margin: 10px 10px;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.error {
  color: #ff6b6b;
  font-size: 0.85rem;
  position: absolute;
  bottom: -18px;
  left: 10px;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4ecdc4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #38a89d;
}
</style>