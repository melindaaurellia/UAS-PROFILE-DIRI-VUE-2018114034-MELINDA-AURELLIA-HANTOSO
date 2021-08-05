<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
   <hr class="my-3" />
   
    <div class="card">
    <div class="cardbody">
    <center>
    <h3>SELAMAT DATANG</h3>
    <h3>DI WEBSITE PROFILE DIRI! :)</h3>
   </center>

 </div>
</div>
  </div>
</template>
<script>

// @ is an alias to /src
import Slider from "@/components/Slider.vue";


export default {
  name: "Home",
  components: {
    Slider,
  },

  
    }

</script>