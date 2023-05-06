<template>
    <div>
      <h1>Contact</h1>
      <p>Feel free to contact me using the form below:</p>
  
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" name="name">
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" name="email">
        </div>
  
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea class="form-control" id="message" name="message"></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactComp'
  }
  </script>
  
  <style scoped>
    h1 {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  </style>
  