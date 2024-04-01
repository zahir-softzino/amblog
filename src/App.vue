<template>
  
  <nav class="row">
    <div class="col-8 logo-name">
      <h1>AMBlog</h1>
    </div>
    <div class="col-4 pt-4 d-flex justify-content-end menus">
      <router-link to="/" class="menuItem">Home</router-link>
      <router-link to="/create_post" class="menuItem">Create Post</router-link> 
    </div>
  </nav>
  <router-view/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding-top: 30px;
  padding-bottom: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.menus{
  font-size: 24px;
}
.menuItem{
  text-decoration: none;
  margin-left: 20px;
}
.logo-name{
  color: #838686;
}
.logo-name h1{
  font-size: 60px;
  font-weight: 900;
}
</style>
