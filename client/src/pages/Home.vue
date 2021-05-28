<template>
  <div class="container">
    <div class="form">
      <div class="row container text-center pt-5">
        <div class="col">
          <router-link :to="{ name: 'AddUser' }" class="btn btn-success">
            Add Employee
          </router-link>
        </div>
      </div>
    </div>
    <div class="employees pt-4">
      <div class="border card p-4">
        <div class="card-title text-center">
          <h3>Employees {{ this.employees.length }}</h3>
        </div>
        <div class="card-body">
          <div class="card">
            <div class="card-body">
              <!-- EMPLOYEE -->
              <div
                class="card p-2 mb-2"
                v-for="employee in employees"
                :key="employee._id"
              >
                <div class="card-title">
                  <h4>{{ employee.nombre }}</h4>
                </div>
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <h5>
                        <ol>
                          <li>
                            Nombre Completo: {{ employee.nombre }}
                            {{ employee.apellido }}
                          </li>
                          <li>Edad: {{ employee.edad }}</li>
                          <li>Trabajo: {{ employee.trabajo }}</li>
                        </ol>
                      </h5>
                    </div>
                    <div class="col container align-items-center mb-3">
                      <img
                        :src="LogoUser"
                        width="200"
                        height="200"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <div class="settings position-absolute top-0 end-0">
                    <div class="icons">
                      <form @submit.prevent="deleteEmployee(employee._id)">
                        <button type="submit" class="btn btn-danger">
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </form>

                      <form @submit.prevent="updateEmployee(employee._id)">
                        <button type="submit" class="btn btn-primary">
                          <i class="fas fa-edit"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END EMPLOYEE -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoUser from "../assets/users.png";
import axios from "axios";

export default {
  name: "Home",
  data: function () {
    return {
      LogoUser: LogoUser,
      employees: [],
      baseUrl: "http://localhost:5000/api",
    };
  },
  methods: {
    // View all employees
    async getEmployees() {
      const res = await axios.get(`${this.baseUrl}/employees`);
      this.employees = res.data.employee;
      console.log(this.employees);
    },

    // Delete employee
    async deleteEmployee(id) {
      await axios.delete(`${this.baseUrl}/employees/delete/${id}`);
      this.getEmployees();
      console.log(id);
    },

    // Update employee
    async updateEmployee(id) {
      this.$router.push({
        name: "UpdateUser",
        params: {
          id: id
        }
      });
    }
  },
  created() {
    this.getEmployees();
  },
};
</script>

