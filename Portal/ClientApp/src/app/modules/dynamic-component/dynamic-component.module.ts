import { Compiler, CompilerFactory, COMPILER_OPTIONS, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DynamicComponentRoutingModule
  ],providers: [
    {
      provide: COMPILER_OPTIONS,
      useValue: {},
      multi: true
    },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS]
    },
    {
      provide: Compiler,
      useFactory: createCompiler,
      deps: [CompilerFactory]
    }
  ],
})
export class DynamicComponentModule { }
