<template>
  <div class="card">
    <img
      class="card-img-top"
      :src="require('@/assets/' + background)"
      alt="Card image"
    /> 
    <div class="card-body">
      <h3 class="card-title">
        {{ name }} 
      </h3>
      <p class="card-text">{{ details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Division",
  props: {
    name: String,
    background: String,
    details: String,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
.card {
  font-family: 'Roboto Condensed', sans-serif;
  width: 350px;
  border-radius: 10px;
  margin: 20px 5px 0 5px;
  text-align: center;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  transition: 0.3s;
  background-size: cover;
  background-position: center center;
}
.card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.card-img-top {
  height: 230px;
}
h3 {
  font-family: 'Roboto Condensed', sans-serif;

  font-weight: 700;
  font-size: 28px;
  margin: 5px 0 15px 0;
  float: left;
  color: #a97c50;
  
}
p {
  font-family: 'Roboto Condensed', sans-serif;
  clear: both;
  color: #333;
  font-size: 16px;
  font-weight: 300;
  text-align: justify;
}
</style>