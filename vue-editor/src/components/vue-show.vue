<template>
  <div align="center">
    <quill-editor v-model="contentText"
                  :options="editorOption"
                  ref="myQuillEditor"
                  style="margin-top: 30px;border: none;width: 660px;">
    </quill-editor>
  </div>
</template>
<script>
    export default {
      name: "vue-show",
      data(){
        return {
          editorOption: {
            placeholder: '',
            modules:{
              toolbar:false
            },
            theme: 'snow',
          }
        }
      },
      props: ['content'],
      mounted: function () {
        //修改显示框样式
        let continer = document.getElementsByClassName('ql-container');
        console.log(continer);
        continer[1].style.border = 'none';
        //禁止编辑
        this.$refs.myQuillEditor.quill.enable(false);
        //让图片居中显示
        let sheets = document.styleSheets;
        let sheet1 = sheets[1];
        sheet1.insertRule("img{width:100%;}");
      },
      computed: {
        // 计算属性的 getter
        contentText: {
          get: function () {
          return this.content;
        },
          set: function (val) {
          }
        },

      }
    }
</script>

<style scoped>

</style>
