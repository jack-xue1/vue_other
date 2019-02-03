<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <!--直接进行跨域请求方法-->
    <button @click="test">测试接口</button>
    <button @click="test1">测试接口1</button>
  </div>
</template>

<script>
import Button from "../../../../idea/vue-framework-wz-master/src/components/Button/CoolHoverButton";
import {testPost}  from '../api/api'
export default {
  name: 'HelloWorld',
  components: {Button},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    test:function () {
      this.$axios.post("/apis/test4", {
        name: "test",
        sex: "男"
      }).then(result => {
        // return JSON.parse(JSON.stringify(result));
        return JSON.stringify(result.data);
        // console.log(data);
      }).then(data => {
        console.log(data);
        // console.log("注意此刻的data是一个：" + typeof data);
        data = JSON.parse(data);
        //对于返回的内容进行判断
        if (data.success == 1) {
          console.log(data.msg);
          alert('测试成功');
        }
      });
    },
    test1:function () {
        var data={name:'xs',sex: '男'}
        //是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串
        // data=JSON.stringify(data);
        testPost(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
