<template>
      <Header />
      <div class="container">
        <h4>Members</h4>
        <router-link :to="{ name: 'AdminProjects' }"
          ><h4>Projects</h4></router-link
        >
        <router-link :to="{ name: 'Events' }"><h4>Events</h4></router-link>
        <router-link :to="{ name: 'GenerateToken' }"
          ><h4>Generate Token</h4></router-link
        >
        <div id="member list">
          <div :key="member.user_id" v-for="member in members">
            <MemberList :member="member" />
          </div>
        </div>
      </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import MemberList from "@/components/MemberList.vue";

export default {
  name: "Admin",
  components: {
    Header,
    MemberList,
  },
  data() {
    return {
      showAddProject: false,
    };
  },
  methods: {
    toggleAdd() {
      this.showAddProject = !this.showAddProject;
    },
  },
  computed: {
    ...mapGetters({
      members: "members/getMembersAdmin",
    }),
  },
};
</script>

<style scoped>
h4 {
  float: left;
  font-weight: 700;
  margin: 30px 15px 30px 5px;
  letter-spacing: 0.5px;
}
a h4 {
  color: #a97c50;
  margin-right: 25px;
}
a h4:hover {
  color: #8b5e3b;
}
</style>