import { Component, OnInit } from '@angular/core';
import  grapesjs  from 'grapesjs';
//import 'grapesjs-preset-webpage';
import 'grapesjs-preset-newsletter';
import 'grapesjs-plugin-forms';
import "grapesjs-plugin-export";
import "grapesjs-blocks-flexbox";
import "grapesjs-tui-image-editor";
import "grapesjs-parser-postcss";
import "grapesjs-style-bg";
import "grapesjs-typed";
/*
import "@silexlabs/grapesjs-symbols";
import "@silexlabs/grapesjs-fonts";
import "grapesjs-plugin-ckeditor";
import "grapesjs-custom-code";
import "grapesjs-indexeddb";
import "grapesjs-lory-slider";
import "grapesjs-plugin-filestack";
import "grapesjs-style-filter";
import "grapesjs-style-gradient";
import "grapesjs-tabs";
import "grapesjs-tooltip";
import "grapesjs-touch";
import "grapesjs-ui-suggest-classes";
import "grapesjs-aviary";
import "grapesjs-firestore";
*/


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
      title = "Workflow";
      editor: any;
      
 ngOnInit() {
         this.editor = grapesjs.init({
          container : '#gjs',
          plugins: [
                    //'grapesjs-preset-webpage', 
                    'grapesjs-preset-newsletter',
                    'gjs-blocks-basic',
                    'grapesjs-plugin-forms', 
                    'grapesjs-plugin-export',
                    'grapesjs-blocks-flexbox',
                    'grapesjs-tui-image-editor',
                    'grapesjs-parser-postcss',
                    'grapesjs-style-bg',
                    'grapesjs-typed',
                    /*
                    '@silexlabs/grapesjs-symbols',
                    '@silexlabs/grapesjs-fonts',
                    'grapesjs-custom-code',
                    'grapesjs-plugin-ckeditor',
                    'grapesjs-indexeddb',
                    'grapesjs-lory-slider',
                    'grapesjs-plugin-filestack',
                    'grapesjs-style-filter',
                    'grapesjs-style-gradient',
                    'grapesjs-tabs',
                    'grapesjs-tooltip',
                    'grapesjs-touch',
                    'grapesjs-ui-suggest-classes',
                    'grapesjs-aviary',
                    'grapesjs-firestore',
                    */
                   ],   
      });



    }





}
