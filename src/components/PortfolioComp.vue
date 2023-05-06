
<template>
  <div class="container">
    <h1 class="text-center mb-5">Portfolio</h1>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-img-wrap" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
            <img src="../assets/images/Todolist.png" class="card-img-top" alt="Project Image">
            <div class="overlay"></div>
          </div>
          <div class="card-body">
            <h5 class="card-title">To Do List with Vue, Routing, Vuex, and UUID </h5>
            <p class="card-text">Oh great, a To Do App... Nope, not a normal one, I've used Vue, Vue Routing, Vuex and UUID to make my backend well managed and scalable. Although the front-end is far from perfect, behind the hood is where the "magic happens" Using Vuex to create 'stores' I created unique ids for each activity that needs to be done. Tons of mutations were developed to work out the functionality of what someone like me and you would do, new meeting? No problem, updateTodo function has you covered, cancelled? No problem! deleteTodo function will clear your schedule. Each function is backed by precise error handling for great user experiences, and localstorage is there to autofill the 3rd laundry basket of the week, and remember what you need to do!</p>
            <a class="btn btn-primary" href="https://github.com/Verzaylol/Practice-ToDoList" target="_blank"> View More</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-img-wrap" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
            <img src="../assets/images/Port.png" class="card-img-top" alt="Project Image">
            <div class="overlay"></div>
          </div>
          <div class="card-body">
            <h5 class="card-title">This Portfolio! With Vue, Veux and Bootstrap.</h5>
            <p class="card-text">Using Vue 3 I managed to create a beautiful looking portfolio using Bootstrap for my styling. Key takeways were learning and experimenting with Vue.js, understanding components, routing, and file structures. </p>
            <a class="btn btn-primary" href="https://github.com/Verzaylol/Simple-Vue-Portfolio" target="_blank">View More</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-img-wrap" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
            <img src="../assets/images/vmm.png" class="card-img-top" alt="Project Image">
            <div class="overlay"></div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Virtualization.</h5>
            <p class="card-text">For testing and experimenting with automation virtualization was used. Key takeways from my endeavor were memory management, configuring a new Linux system, personalizing and managing seperate virtual machines, configuring firewalls, and implementing proxies!</p>
            <a class="btn btn-primary" href="https://imgur.com/a/KLQXDZ5" target="_blank">View More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTooltip: false,
    };
  },
};
</script>


<style>
  /* Add a shadow effect to the cards */
  .card {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
  
  /* Add a hover effect to the cards */
  .card:hover {
    transform: translateY(-10px);
  }
  
  /* Add a subtle animation to the project title */
  .card-title {
    animation: fade-in 0.5s ease-out;
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Add a border radius to the project images */
  .card-img-top {
    border-radius: 10px 10px 0 0;
  }
  
  /* Add a background color to the container */
  .container {
    background-color: #f4f4f4;
    padding: 50px 0;
  }
  
  /* Add some spacing between the cards */
  .mb-4 {
    margin-bottom: 30px;
  }
  
  /* Center the project titles */
  .card-title {
    text-align: center;
  }
  
  /* Add a box shadow to the "View Project" button */
  .btn-primary {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Add a hover effect to the "View Project" button */
  .btn-primary:hover {
    background-color: #333;
    border-color: #333;
  }
  .card-text {
  font-size: 14px; /* adjust as needed */
  line-height: 1.2; /* adjust as needed */
  letter-spacing: -0.5px;
}
.card-img-wrap:hover .card-img-top {
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
  z-index: 1;
}

</style>



