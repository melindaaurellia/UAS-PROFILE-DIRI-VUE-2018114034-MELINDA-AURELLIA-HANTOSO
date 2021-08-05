<template>
<div class="row">
  <div class
  v-for="(kontak, index) in kontaks" :key="index">
  <div class="card-header"><center> Contact Me
  </center></div>
  <div class="card">
  <div class="card-body">
    <p class="card-text">Email : {{kontak.email}}</p>
    <p class="card-text">Whatsapp : {{kontak.no_tlp}}</p>
  </div>
  <div class="card-footer text-muted">
    <center> <router-link
              class="btn btn-success"
              :to="{ name: 'Editkontaks', params: { id: kontak.id } }"
              >Edit</router-link
            >
            
    </center>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["kontaks"],
}
</script>

<style>

</style>