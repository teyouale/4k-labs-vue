<template>
  <div class="card col-md-12">
    <div class="card-body">
      <router-link
        :to="{ name: 'Tasks', params: { projectCode: project.project_code } }"
      >
        <div class="project">
          <span>{{ project.project_title }}</span>
        </div>
      </router-link>
      <div class="more">
        <div class="dropdown">
          <i
            title="More options"
            class="fa fa-ellipsis-v"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="false"
            aria-expanded="false"
            aria-hidden="false"
          ></i>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="deletepro(project.project_code)"
              >Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProjectList",
  props: {
    project: {
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      deleteProject: "projects/deleteProject",
    }),
    deletepro(project_code) {
      this.deleteProject(project_code)
        .then((result) => {
        })
        .catch((err) => {
        });
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
}
.project {
  float: left;
  padding: 10px 0;
}
.more {
  float: right;
  padding: 10px 0;
}
span {
  font-size: 20px;
  font-weight: 600;
}
a {
  color: #333;
  opacity: 0.9;
}
a:hover {
  color: #000;
}
</style>