import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculatrice';

    chiffre = {
        chiffre1:'1',
        chiffre2:'2',
        chiffre3:'3',
        chiffre4:'4',
        chiffre5:'5',
        chiffre6:'6',
        chiffre7:'7',
        chiffre8:'8',
        chiffre9:'9',
        chiffre0:'0',

    }

    operateur = {
        plus:'+',
        moins:'-',
        mult:'*',
        div:'/',

        egal:'=',
        cancel:'C',


    };

   resultatString:string="";


    chiffreAdd=function(calcElement:string){
        this.resultatString+=calcElement;

    }

    operateurAdd=function(calcElement:string){
        this.resultatString+=calcElement;

    }

    annule=function(){
        this.resultatString="";

    }


    egal=function(){
        this.resultatString=eval(this.resultatString);

    }
}

