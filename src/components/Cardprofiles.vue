<template>
<div class="row">
  <div class 
  v-for="(profile, index) in profiles" :key="index">
  <div class="card-header"><center>About Me
  </center></div>
  <div class="card">
  <div class="card-body">
     <h5 class="card-title">{{profile.nama}}</h5>
    <h5 class="card-title">{{profile.tgl}}</h5>
    <h5 class="card-title">{{profile.jenis}}</h5>
    <h5 class="card-title">{{profile.alamat}}</h5>
    <h5 class="card-title">{{profile.no_tlp}}</h5>
    <h5 class="card-title">{{profile.email}}</h5>
  </div>
  <div class="card-footer text-muted">
           <center> <router-link
              class="btn btn-success"
              :to="{ name: 'Editprofiles', params: { id: profile.id } }"
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
    props: ["profiles"],
}
</script>

<style>

</style>