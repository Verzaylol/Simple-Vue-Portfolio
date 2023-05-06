<template>
    <div class="container my-5">
      <div class="card">
        <img :src="imageUrl" class="card-img-top" alt="Project Image">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ description }}</p>
          <a :href="githubLink" target="_blank" class="btn btn-primary">View on GitHub</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Project3Comp",
    props: {
      imageUrl: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      githubLink: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  