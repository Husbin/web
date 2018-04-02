<template>
  <div align="center">
    <!-- 图片上传组件辅助-->
    <el-upload
      class="avatar-uploader"
      :action="serverUrl"
      name="img"
      :headers="header"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload">
    </el-upload>
    <!--自定义toolbar 方式二-->
    <div class="edit_container" align="left">
      <el-row v-loading="quillUpdateImg">
    <!--<div id="toolbar">-->
      <!--<button class="ql-bold" v-bind:title="placeholder.blod"></button>-->
      <!--<button class="ql-italic" v-bind:title="placeholder.italic"></button>-->
      <!--<button class="ql-underline" v-bind:title="placeholder.underline"></button>-->
      <!--<button class="ql-strike" v-bind:title="placeholder.strike"></button>-->
      <!--<button class="ql-blockquote" v-bind:title="placeholder.blockquote"></button>-->
      <!--<button class="ql-code-block" v-bind:title="placeholder.codeblock"></button>-->
      <!--<button class="ql-list" value="ordered" v-bind:title="placeholder.listordered"></button>-->
      <!--<button class="ql-list" value="bullet" v-bind:title="placeholder.listbullet"></button>-->
      <!--&lt;!&ndash;<select class="ql-header" v-bind:title="placeholder.headtitle">&ndash;&gt;-->
        <!--&lt;!&ndash;<option value="1"></option>&ndash;&gt;-->
        <!--&lt;!&ndash;<option value="2"></option>&ndash;&gt;-->
        <!--&lt;!&ndash;<option value="3"></option>&ndash;&gt;-->
        <!--&lt;!&ndash;<option value="4"></option>&ndash;&gt;-->
        <!--&lt;!&ndash;<option value="5"></option>&ndash;&gt;-->
        <!--&lt;!&ndash;<option value="6"></option>&ndash;&gt;-->
        <!--&lt;!&ndash;<option selected>正常</option>&ndash;&gt;-->
      <!--&lt;!&ndash;</select>&ndash;&gt;-->
      <!--<select class="ql-align" v-bind:title="placeholder.alignment">-->
        <!--<option selected></option>-->
        <!--<option value="center"></option>-->
        <!--<option value="right"></option>-->
        <!--<option value="justify"></option>-->
      <!--</select>-->
      <!--<select class="ql-size" v-bind:title="placeholder.fontsize">-->
        <!--<option value="small">小号字体</option>-->
        <!--<option selected>正常字体</option>-->
        <!--<option value="large">大号字体</option>-->
        <!--&lt;!&ndash;<option value="huge"></option>&ndash;&gt;-->
      <!--</select>-->
      <!--<button class="ql-clean" v-bind:title="placeholder.cleanstyle"></button>-->
      <!--<button class="ql-link" v-bind:title="placeholder.insertlink"></button>-->
      <!--<button class="ql-image" v-bind:title="placeholder.insertimage"></button>-->
      <!--&lt;!&ndash;<button class="ql-video" v-bind:title="placeholder.insertvideo"></button>&ndash;&gt;-->
    <!--</div>-->
      <quill-editor v-model="content"
                    ref="myQuillEditor"
                    class="editer"
                    :options="editorOption"
                    @ready="onEditorReady($event)">
      </quill-editor>
      </el-row>
    </div>
    <div class="submit_btn">
      <el-button type="primary" v-on:click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
  //定制工具栏—— 方式一
  const toolbar = [
    //[{ 'font': [] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    //['code-block'],
    //[{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    //[{ 'script': 'sub' }, { 'script': 'super' }],
    //[{ 'indent': '-1' }, { 'indent': '+1' }],
    //[{ 'direction': 'rtl' }],
    //[{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    //[{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['clean'],
    ['link', 'image', 'video']
  ];
  //重写处理程序
  const handler =  {
    // 'link': function(value) {
    //   if (value) {
    //     console.log("hello");
    //     var href = prompt('Enter the URL');
    //     this.quill.format('link', href);
    //   } else {
    //     this.quill.format('link', false);
    //   }
    // },
    'image': function (value) {
      console.log("value:" + value);
      if (value) {
        // 触发input框选择图片文件
        document.querySelector('.avatar-uploader input').click()
      } else {
        this.quill.format('image', false);
      }
    },
  };

  export default {
    data(){
      return {
        placeholder : {
          blod:"粗体",
          italic:"斜体",
          underline:"下划线",
          strike:"删除线",
          blockquote:"引用块",
          codeblock:"代码块",
          listordered:"有序列表",
          listbullet:"无序列表",
          headtitle:"标题",
          alignment:"对齐方式",
          fontsize: "字体",
          cleanstyle:"清除格式",
          insertlink:"插入链接",
          insertimage:"插入图片",
          insertvideo:"插入视频",
        },
        quillUpdateImg: false,    // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
        serverUrl: '',            // 上传的图片服务器地址
        header: { token: sessionStorage.token },  // 有的图片服务器要求请求头需要有token之类的参数，写在这里
        content: '',
        editorOption: {
          placeholder: '请输入',
          modules:{
            toolbar:{
              container: toolbar,
              handlers: handler,
            }
          },
          theme: 'bubble',
        }
      }
    },
    components: {
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods: {
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      submit(){
        this.$emit('getcontent', { content: this.content });
        console.log(this.content);
      },
      beforeUpload() {
        // 显示loading动画
        this.quillUpdateImg = true
      },

      uploadSuccess(res, file) {
        // res为图片服务器返回的数据
        // 获取富文本组件实例
        let quill = this.$refs.myQuillEditor.quill
        // 如果上传成功
        if (res.code === '200' && res.info !== null) {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片  res.info为服务器返回的图片地址
          quill.insertEmbed(length, 'image', res.info)
          // 调整光标到最后
          quill.setSelection(length + 1)
        } else {
          this.$message.error('图片插入失败')
        }
        // loading动画消失
        this.quillUpdateImg = false
      },

      // 富文本图片上传失败
      uploadError() {
        // loading动画消失
        this.quillUpdateImg = false
        this.$message.error('图片插入失败')
        //todo 测试，模拟成功插入图片
        let quill = this.$refs.myQuillEditor.quill
        let length = quill.getSelection().index;
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, 'image', 'https://upload-images.jianshu.io/upload_images/7166236-f765f89cded553e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240')
        // 调整光标到最后
        quill.setSelection(length + 1)
      }
    },
  }
</script>

<style scoped>

  .edit_container{
    padding: 10px;
    margin-bottom: 150px;
    width: 660px;
  }
  .editer{
    height: 400px;
    overflow: visible;

  }
  .submit_btn{
    text-align: center;
  }
</style>
