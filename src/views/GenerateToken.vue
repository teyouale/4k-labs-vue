<template>
      <Header />

      <div class="container">
        <router-link :to="{ name: 'Admin' }"><h4>Members</h4></router-link>
        <router-link :to="{ name: 'AdminProjects' }"
          ><h4>Projects</h4></router-link
        >
        <router-link :to="{ name: 'Events' }"><h4>Events</h4></router-link>
        <div class="dropdown">
          <Button
            text="Generate New Token"
            color="white"
            bgColor="#8B5E3B"
            border="none"
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
              :key="division"
              v-for="division in divisions"
              class="dropdown-item"
              @click="generateToken(division)"
            >
              {{ division }}
            </button>
          </div>
        </div>

        <div :key="token.token" v-for="token in tokens">
          <TokenList :token="token" />
        </div>
      </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import TokenList from "@/components/TokenList.vue";

export default {
  name: "GenerateToken",
  data() {
    return {
      divisions: ["DEVS", "BOTS", "THINGS"],
    };
  },
  components: {
    Header,
    Button,
    TokenList,
  },
  methods: {
    ...mapActions({
      fetchToken: "tokens/fetchAllTokens",
      generateToken: "tokens/generateTokens",
    }),
  },
  created() {
    this.fetchToken()
      .then((result) => {
      })
      .catch((err) => {});
  },
  computed: {
    ...mapGetters({
      tokens: "tokens/getTokens",
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
.dropdown {
  float: right;
  margin: 12px 0;
}
.dropdown-item {
  margin: 2px;
  padding: 8px 15px;
}
</style>