<template>
  <div class="contact">
    <section class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
      </div>
    </section>
    
    <section class="contact-form">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <h2>Get In Touch</h2>
              <p>Have questions or need more information? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" v-model="form.name" required>
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="form.email" required>
                </div>
                
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" v-model="form.subject" required>
                </div>
                
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" rows="5" v-model="form.message" required></textarea>
                </div>
                
                <button type="submit" class="btn">Send Message</button>
              </form>
            </div>
          </div>
          
          <div class="col">
            <div class="card">
              <h2>Contact Information</h2>
              <div class="contact-info">
                <p><strong>Address:</strong> 123 Vue Street, Web City, 10001</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> info@vuetemplate.com</p>
                <p><strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // In a real application, you would submit the form data to a server
  alert('Form submitted successfully!')
  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<style scoped>
.page-header {
  background-color: var(--secondary-color);
  color: var(--light-color);
  padding: 60px 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin: 0;
}

.contact-form {
  padding: 80px 0;
}

.contact-info p {
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .page-header {
    padding: 40px 0;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
}
</style> 