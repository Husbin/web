import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {DynamicComponentDirective} from './DynamicComponentDirective';
import {SampleComponent} from './sample/sample.component';
import {FormJson} from './FormJson';
import {InputComponent} from './input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 使用ViewChild取得要动态放置Component的directive(componentHost)
  @ViewChild(DynamicComponentDirective) componentHost: DynamicComponentDirective;
  public baseData = JSON.parse(JSON.stringify(FormJson.basedata));
  public formJson = [];
  constructor(
    // 注入ComponentFactoryResolver
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }
  title = '动态创建组件样例';
  createNewComponent() {
    // 建立ComponentFactory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SampleComponent);
    const viewContainerRef = this.componentHost.viewContainerRef;
    // 产生我们需要的Component并放入componentHost之中
    viewContainerRef.createComponent(componentFactory);
    // const componentRef = viewContainerRef.createComponent(componentFactory);
  }
  clearView() {
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
  }
  createInputComponent() {
    // 示例类型都是文本输入框，所以type字段都置为 text
    this.baseData.type = 'text';
    // 将json插入，完成之后可存到后端
    this.formJson.push(this.baseData);
    console.log(this.formJson);
    // 清除旧预览
    this.componentHost.viewContainerRef.clear();
    // 渲染新示例页面
    this.createForm(this.formJson);
    // 将json元素赋空，方便下次创建
    this.baseData = JSON.parse(JSON.stringify(FormJson.basedata));
  }
  createForm(formJson) {
    const inputComponentFactory = this.componentFactoryResolver.resolveComponentFactory(InputComponent);
    for (let i = 0 ; i < formJson.length ; i++) {
      const item = formJson[i] ;
      let componentRef;
      // 根据不同类型创建组件，可扩充
      switch (item.type) {
        case 'text':
          componentRef = this.componentHost.viewContainerRef.createComponent(inputComponentFactory);
          componentRef.instance.componentRef = componentRef;  // 传入自身组件引用，用于返回来编辑自身
          componentRef.instance.item = item; // 数据
          break;
      }
    }
  }

  saveForm() {
    // todo 将表单模板存到后端
    console.log(this.formJson);
    // todo 根据json重新解析，其实就像预览一样，调用createForm
    this.createForm(this.formJson);
  }
}
