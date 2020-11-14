<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="nav-link navbar-brand" to="/">FaceRekognition</router-link>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
              <router-link class="nav-link" to="/face">face</router-link>
          </li>          
        </ul>

        <FileUpload></FileUpload>
    </div>
  </nav>
</template>

<script>
import FileUpload from "@/components/FileUpload.vue";

export default {
  name: "Navbar",
  components: {
    FileUpload,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
