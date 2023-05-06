<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">My Portfolio</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
            </li>
            <li class="nav-item">
              <a href="mailto:Vazquez.Tech@outlook.com" class="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
