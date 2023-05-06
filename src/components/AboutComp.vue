<template>
  <div class="about-container">
    <div class="card">
      <h1 class="card-title">About</h1>
      <div class="card-body">
        <p class="card-text">Hello, I'm Carlos, a 2nd year at the College of DuPage working towards my Associates in Applied Associates with an emphasis in Software Development. Some interesting goals of mine are acheving a Bachelor's Degree in Computer Science, creating my own at home servers to host applications I create, making a difference with what I build, and trying to be 6 feet tall. I hope you can check out some of my work and come to appreciate it! 
        </p>
        <img class="card-img-bottom" src="../assets/images/AboutImage.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComp'
}
</script>

<style lang="scss">
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card {
  max-width: 800px;
  margin: 2rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-family: 'Times New Roman', Times, serif;
  font-size: 2rem;
  margin: 1rem;
  text-align: center;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-text {
  margin: 1rem;
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  color: #666;
  text-align: justify;
}

.card-img-bottom {
  margin-top: 1rem;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>




  

