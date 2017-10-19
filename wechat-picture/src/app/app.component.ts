import {Component, OnInit} from '@angular/core';
import {isUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' , './weui.min.css']
})
export class AppComponent implements OnInit{

  picturesUrl = [
    'url(http://upload-images.jianshu.io/upload_images/7166236-40ed406c30ef20a0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)',
    'url(http://upload-images.jianshu.io/upload_images/7166236-d79762ed654342bf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)',
    'url(http://upload-images.jianshu.io/upload_images/7166236-64e1a458e5e29d59.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)',
    'url(http://upload-images.jianshu.io/upload_images/7166236-9a267a540acb8688.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)',
    'url(http://upload-images.jianshu.io/upload_images/7166236-283f5687cb73eea8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)',
  ]; //存储图片Url
  title = 'app';
  shown = false;    //是否显示预览，初始化为否
  selectImageUrl: string; //用于存放选中图片的url
  ngOnInit(): void {

  }





  //点开图片预览后，点击屏幕退出预览
  touchEvent(){
    this.shown = false;
  }


  //删除图片
  onDelete(){
    //图片url是不带双引号的，用正则去除URL中的双引号
    if(isUndefined(this.selectImageUrl)){
      console.log("查看图片预览，图片url未定义，this.selectImageUrl：" + this.selectImageUrl);
      return;
    }
    this.selectImageUrl = this.selectImageUrl.replace(/"/g,"");
    console.log("(this.picturesUrl.indexOf(this.selectImageUrl):"+this.picturesUrl.indexOf(this.selectImageUrl));
    //判断图片URL是否存在
    if(this.picturesUrl.indexOf(this.selectImageUrl)!== -1){
      this.picturesUrl.splice(this.picturesUrl.indexOf(this.selectImageUrl) , 1);
      setTimeout(()=>{
          this.shown = false;
        },
        20);
    }else{
      console.log("删除图片出错，获取URL或URL格式出错出错：" + this.selectImageUrl )
    }
  }



  //显示预览
  showPicture($event){
    console.log("$event.target.backgroundImage：" + $event.target.style.backgroundImage);
    this.selectImageUrl = $event.target.style.backgroundImage;
    this.shown = true;
  }

  //选择图片
  onSelectPicture($event){

  }
}
