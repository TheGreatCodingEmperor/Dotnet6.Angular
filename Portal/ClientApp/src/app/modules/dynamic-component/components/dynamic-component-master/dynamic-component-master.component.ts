import { AfterViewInit, ChangeDetectorRef, Compiler, Component, ComponentFactoryResolver, Input, NgModule, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { PrimengComponents } from '../../../shared/models/dynamic-primeng-components';
import { SharedModule } from '../../../shared/shared.module';
import { SideBarComponent } from '../../../shared/components/side-bar/side-bar.component';
import { TopBarComponent } from '../../../shared/components/top-bar/top-bar.component';

export interface DynamicComponentConfig {
  component?: string,
  props?: { [key: string]: any };
  click?: any;
  template?: string;
}

@Component({
  selector: 'dynamic-master',
  template: `
  123
    <ng-container #host></ng-container>
  `,
  styles: [
  ]
})
export class DynamicComponentMasterComponent implements OnInit, AfterViewInit {
  @ViewChild('host', { read: ViewContainerRef }) host: ViewContainerRef | null = null;
  @Input() code: DynamicComponentConfig[] = [];

  constructor(
    private cfr: ComponentFactoryResolver,
    private compiler: Compiler,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.host)
    this.loadComponent();
  }

  loadComponent() {
    this.host?.clear();
    // for (let comp of this.code) {
    //   if (comp.component) {
    //     let component = PrimengComponents.find(x => x.name == comp.component)?.component;
    //     if (component) {
    //       let componentFactory = this.cfr.resolveComponentFactory(TopBarComponent);
    //       this.host?.createComponent(componentFactory);
    //     }
    //   }
    //   else {
    let template = '<div>Test value: {{test}}</div><input [(ngModel)]="value"/>';
    this.compiler.clearCache();
    let host = this.host;

    this.compiler.compileModuleAndAllComponentsAsync(SharedModule).then(
      (fac) => {
        console.log(fac);
        const component = Component({
          template: template,
          styles: [':host {color: red}']
        })(class {
          value = new Date;
          test = 'some value';
        });
        const module = NgModule({ declarations: [component], imports: [] })(class TmpModule { });
        this.compiler.compileModuleAndAllComponentsAsync(module)
          .then(factories => {
            // Get the component factory.
            const factory = factories.componentFactories[0];
            // Create the component and add to the view.
            if (host) {
              const componentRef = host.createComponent(factory);
              // Modifying the property and triggering change detection.
              setTimeout(() => {
                componentRef.instance.test = 'some other value'
                let componentFactory = this.cfr.resolveComponentFactory(component);
                this.host?.createComponent(componentFactory);
              }, 2000);
              this.cdref.detectChanges();
            }
          });
      }
    );

    //     }
    //   }

  }

}
