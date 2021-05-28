<template>
  <div class="pt-3">
    <div class="card p-2 pt-1 col-md-5 container">
      <div class="card-title text-center">
        <h2>Update Employee</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="save">
          <!-- Nombre y apellidos -->
          <div class="mb-3">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  v-model="nombre"
                  placeholder="Nombre"
                  class="form-control"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  name="apellido"
                  id="apellido"
                  v-model="apellido"
                  placeholder="Apellido"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <!-- End Nombre y apellidos -->

          <!-- Edad -->
          <div class="mb-3">
            <input
              type="number"
              name="edad"
              id="edad"
              v-model="edad"
              placeholder="Edad"
              class="form-control"
            />
          </div>
          <!-- End Edad -->

          <!-- Trabajo -->
          <div class="mb-3">
            <input
              type="text"
              name="trabajo"
              id="trabajo"
              v-model="trabajo"
              placeholder="Trabajo"
              class="form-control"
            />
          </div>
          <!-- End Trabajo -->

          <!-- Submit -->
          <div class="mb-3">
            <input
              type="submit"
              value="Save"
              class="btn btn-block btn-success form-control"
            />
          </div>
          <!-- End Submit -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddUser",
  data: function () {
    return {
      nombre: null,
      apellido: null,
      edad: null,
      trabajo: null,
    };
  },
  methods: {
    // Save amployee
    async save() {
      await axios.put(`http://localhost:5000/api/employees/update/${this.$route.params.id}`, {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        trabajo: this.trabajo,
      });
      location.href = "/";
    },


    // Get employee
    async getEmployee() {
      const res = await axios.get(`http://localhost:5000/api/${this.$route.params.id}`);

      // Set values
      this.nombre = res.data.nombre;
      this.apellido = res.data.apellido;
      this.edad = res.data.edad;
      this.trabajo = res.data.trabajo;
    }
  },
  created() {
    this.getEmployee();
  }

};
</script>
