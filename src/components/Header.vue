<template>
  <div id="header">
    <div class="container">
      <router-link :to="{ name: 'Home' }"
        ><img class="logo" src="@/assets/logo.webp"
      /></router-link>
      <div class="nav">
        <div v-show="isAuthenticated">
          <div v-show="!isSuperAdmin">
            <router-link :to="{ name: 'Me' }">
              <ProfilePicture
                imgWeight="45px"
                fontSize="20px"
                :name="user_info.username[0]"
                top="6px"
                :srcText="user_info['profile_picture']"
              />
            </router-link>
          </div>
        </div>

        <router-link v-show="!isAuthenticated" class="link_class" to="/login">
          Login
        </router-link>

        <router-link v-show="!isAuthenticated" class="link_class" to="/register"
          >| Register
        </router-link>

        <i class="fa fa-bell" aria-hidden="true"></i>

        <router-link
          class="link_class"
          v-show="parseInt(user_info.Role) === 4"
          :to="{ name: 'Admin' }"
          >Admin</router-link
        >
        <router-link class="link_class" :to="{ name: 'Divisions' }">
          Specialization
        </router-link>

        <a class="link_class" @click="logout"
          ><i title="Logout" class="fas fa-sign-out-alt"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture";
import { mapGetters, mapActions } from "vuex";
import { reject } from "q";
import { firebase } from "@firebase/app";
import "@firebase/auth";
export default {
  name: "Header",
  components: {
    ProfilePicture,
  },
  methods: {
    ...mapActions({
      errorAlert: "errorAlert",
      successAlert: "successAlert",
      logoutUser: "auth/logoutUser",
    }),
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.successAlert("Successfully signed out.");
          this.logoutUser();
        })
        .catch((err) => {
          this.errorAlert(err);
        });
    },
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
      user_info: "user/getUserInformation",
      isSuperAdmin: "user/isSuperAdmin",
    }),
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    user_info() {
      return this.$store.getters["user/getUserInformation"];
    },
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 90px;
  background: url("../assets/rename.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
}
img.logo {
  float: left;
  position: absolute;
  width: 100px;
  top: 15px;
  left: 80px;
  background: white;
  border-radius: 200px;
  z-index: 100;
}
.nav {
  float: right;
  padding: 20px 0;
}
.fa {
  color: white;
  font-size: 25px;
  margin: 10px 0 0 25px;
}
.link_class {
  padding: 10px 0;
  cursor: pointer;
  margin-left: 15px;
  color: white;
}
.link_class:hover {
  color: #d1905e;
}
.fas {
  font-size: 30px;
  margin-left: 10px;
}
</style>
