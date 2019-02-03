<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components:{
      HelloWorld
  },
  created() {
    this.$axios.post("/apis/test4", {
      name: "test",
      sex: "男"
    }).then(result => {
      // return JSON.parse(JSON.stringify(result));
      return JSON.stringify(result.data);
      // console.log(data);
    }).then(data => {
      console.log(data);
      console.log("注意此刻的data是一个：" + typeof data);
      data = JSON.parse(data);
      if (data.success == 1) {
        console.log(data.msg);
      }
    });
  },
  methods:{
    test:function () {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
