import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Injector, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
const configKey = makeStateKey('CONFIG');
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'voice-control',
  templateUrl: './voice-control.component.html',
  styleUrls: ['./voice-control.component.css']
})
export class VoiceControlComponent implements OnInit {

  public title : string;
  @ViewChild('gSearch', { static : true}) formSearch;
  @ViewChild('searchKey', { static : true}) hiddenSearchHandler;

/*   constructor(private injector: Injector,
              private state : TransferState,
              @Inject(PLATFORM_ID) private platformid: Object,
              private renderer: Renderer2) {  */

  constructor(){
    this.title = 'Voice Search Demo';

    /* if(isPlatformServer(this.platformid)){
      const envJson = this.injector.get('CONFIG')? this.injector.get('CONFIG'): {};
      this.state.set(configKey, envJson as any);
    } */


  }

  ngOnInit() {
  }

  public voiceSearch(){

    alert("Entrando!!!");

    if('webkitSpeechRecognition' in window){

        console.log("Entrando a VoiceSearch");

        const vSearch = new webkitSpeechRecognition();
        vSearch.continuous = false;
        vSearch.interimresults = false;
        vSearch.lang = 'es-ES';
        vSearch.start();

        const voiceSearchForm = this.formSearch.nativeElement;
        const voiceHandler = this.hiddenSearchHandler.nativeElement;

        console.log(voiceSearchForm);
        vSearch.onresult = function(e){
          console.log(voiceSearchForm);
          voiceHandler.value = e.results[0][0].transcript;
            vSearch.stop();
            console.log(voiceHandler);
            voiceSearchForm.submit();
        }
  
        vSearch.onerror = function(e){
            console.log(e);
            vSearch.stop();
        }
    } else {

      // console.log(this.state.get(configKey, undefined as any));
      console.log("NO Entraó a VoiceSearch");

      }

  }


}




