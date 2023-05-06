<template>
  <div class="home-page">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="title">Welcome to my portfolio.</h1>
          <p class="description">Feel free to navigate around using the navigation bar also remember to right click and open images in a new tab for a better look!</p>
        </div>
        <div class="col-md-6">
          <div class="slideshow">
            <div class="image-container">
              <img class="img-fluid" :src="certificationImages[currentIndex]" alt="Certificate">
              <div class="controls">
                <button @click="previous" class="prev-btn">Previous</button>
                <button @click="next" class="next-btn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cert1 from '@/assets/images/cert1.png'
import cert12 from '@/assets/images/cert2.png'

export default {
  name: 'HomeComp',
  data() {
    return {
      certificationImages: [cert1, cert12],
      currentIndex: 0
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.certificationImages.length;
    },
    previous() {
      this.currentIndex = (this.currentIndex - 1 + this.certificationImages.length) % this.certificationImages.length;
    }
  }
}
</script>

<style lang="scss">
.home-page {
  background-color: #f5f5f5;
  padding: 50px 0;
  
  .title {
    font-family: 'Times New Roman', serif;
    font-size: 50px;
    color: #333;
    text-shadow: 2px 2px #fff;
    margin-bottom: 30px;
  }
  
  .description {
    font-size: 20px;
    color: #555;
    line-height: 1.5;
    margin-bottom: 30px;
  }
  
  .slideshow {
    position: relative;
    height: 300px;
  }

  .image-container {
    position: relative;
    display: inline-block;
    height: 300px;
  }

  .controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .prev-btn, .next-btn {
    background-color: transparent;
    color: #333;
    border: none;
    font-size: 24px;
    cursor: pointer;
    outline: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .prev-btn {
    left: 0;
  }

  .next-btn {
    right: 0;
  }

  .prev-btn:hover, .next-btn:hover {
    color: gray;
  }
}
</style>
