<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="fles">
    <header id="header">
      <nav id="nav">
        <img src="./assets/logo.svg" alt="">
        <RouterLink to="/"><i class="bi bi-house-door"></i>Home</RouterLink>
        <RouterLink to="/settings"><i class="bi bi-gear"></i>Settings</RouterLink>
        <RouterLink to="/profile"><i class="bi bi-person"></i>Profile</RouterLink>
      </nav>
    </header>

    <main id="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.fles {
  display: flex;
}
#header {
  width: 300px;
  line-height: 1.5;
  height: 100vh;
  border-radius: 0 5px 5px 0;
  box-shadow: 2px 0 5px black;
  position: relative;
  z-index: 2;
}

#nav {
  width: 100%;
  font-size: 12px;
  text-align: left;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

#nav a.router-link-exact-active {
  color: var(--color-text);
  background-color: #00bd7e;
  border-radius: 6px;
  
}

#nav a.router-link-exact-active:hover {
  background-color: transparent;
  
}

#nav a {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

#nav a:first-of-type {
  border: 0;
}
#nav img {
  width: 30%;
}
#main {
  width: 100%;
  max-height: 100vh;
  overflow: auto;

}
</style>
