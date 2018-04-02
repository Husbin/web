<template>
  <div>
    <keep-alive>
      <component :is="component" v-on:getcontent="handleMessage"></component>
    </keep-alive>
    <vue-show v-bind:content="content"></vue-show>
  </div>
</template>

<script>
  import 'quill/dist/quill.snow.css'
  import vueEditor from '../components/vue-editor'
  import vueShow from '../components/vue-show'
  export default {
    data () {
      return {
        content: '',
        component: 'vueEditor',
      }
    },
    created: function () {

    },

    components:{
      vueEditor,
      vueShow,
    },
    methods:{
      handleMessage: function (payload) {
        //显示框设置为不可编辑
        console.log(payload.content);
        this.content = payload.content;
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
