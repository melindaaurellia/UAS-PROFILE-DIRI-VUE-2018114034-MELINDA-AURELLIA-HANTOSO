<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />


<table class="table">
  <thead class="table-secondary">
     
        <tr>
          <th scope="col">Pengalaman Kerja / Usaha</th>
          <th scope="col">Tahun</th>

          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(work, index) in works" :key="index">
          <td>{{ work.nama }}</td>
         <td>{{ work.tahun }}</td>
          <td>
            <router-link
              class="btn btn-success"
              :to="{ name: 'Editworks', params: { id: work.id } }"
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
    let works = ref([]);

    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/works')
        .then((Response) => {
          works.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })

    function workDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/works/${id}`)
        .then(() => {
          let z = this.works.map((works) => works.id).index(id);
          this.works.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      works,
      workDelete,
    };
  },
};
</script>
