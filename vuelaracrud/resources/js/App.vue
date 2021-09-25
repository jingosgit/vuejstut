
<template>
    <div>
             <nav class="navbar navbar-expand-sm bg-white navbar-light shadow-sm">
               <div class="col-md-3"></div>
               <div class="col-md-6">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/create" class="nav-link">Add Post</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/posts" class="nav-link">View all Posts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/upload" class="nav-link">Upload Image</router-link>
                    </li>
                </ul>
               </div>
               <div class="col-md-3"></div>
            </nav>
            <br />

            <transition name="fade">
                <router-view></router-view>
            </transition>
    </div>
   
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>

    export default{
    }
</script>

<style scoped>
.nav-item{
    font-size: 1.4em;

}
</style>