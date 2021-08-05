<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />



<table class="table">
  <thead class="table-secondary">
     
        <tr>
          <th scope="col">Nama Sekolah/Universitas</th>
          <th scope="col">Tahun</th>

          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pendidikan, index) in pendidikans" :key="index">
          <td>{{ pendidikan.nama }}</td>
         <td>{{ pendidikan.tahun }}</td>
          <td>
            <router-link
              class="btn btn-success"
              :to="{ name: 'Editpendidikans', params: { id: pendidikan.id } }"
              >Edit</router-link
            >
           
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Slider from "@/components/Slider.vue";

import { onMounted, ref } from "vue";

export default {
  name: "Home",
  components: {
    Slider,
  
  },

  setup() {
    let pendidikans = ref([]);

    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/pendidikans')
        .then((Response) => {
          pendidikans.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })

    function pendidikanDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/pendidikans/${id}`)
        .then(() => {
          let z = this.pendidikans.map((pendidikans) => pendidikans.id).index(id);
          this.pendidikans.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      pendidikans,
      pendidikanDelete,
    };
  },
};
</script>
