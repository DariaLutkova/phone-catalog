<template>
  <div id="app">
    <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
      <li class="nav-item">
        <div class="nav-link"> Lutkova188 </div>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link" active-class="active" exact id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/catalog" class="nav-link" active-class="active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Catalog</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
