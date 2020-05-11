import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Media } from '../shared/media';
import { CrudService } from './../services/crud.service';
import { ModalController,AlertController } from '@ionic/angular'; 
import { CreatenumeroPage } from '../modals/numeros/createnumero/createnumero.page'; 
import { UpdatenumeroPage } from '../modals/numeros/updatenumero/updatenumero.page'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  ///arreglo para objetos numero
  Numeros = []; 
  ///enlazando el objeto de vista con id
  @ViewChild('fab', {static: false, read: ElementRef})fab: ElementRef; 

  constructor( private crud: CrudService,public modal: ModalController,private alertCtrl:AlertController ) {}  
  ///Metodo de inicializacion donde obtengo los actuales Files  al momento de carga de la pagina
  ngOnInit() {
    //inicializo la lista de Media
    this.fetchMedia(); 
  }
  //funcion para inicializar la lista de Media
  fetchMedia() {
    this.crud.getMediaList().subscribe(res => { 
      ///se vacea el arreglo
      this.Numeros = []; 
      ///se cicla el resultado de consulta
      res.forEach(item => {  
        ///si los objetos son de categoria numeros
        if(item.category.match("numeros"))
        {
        let a = item;  
        a['$key'] = item.id; 
        delete a["id"]; 
        ///ingeso objeto 
        this.Numeros.push(a as Media);
        }
      });  
      ///ordeno arreglo apartir del menor a mayor por fecha
      this.Numeros.sort(function(a, b) { a = new Date(a.date); b = new Date(b.date); return a>b ? -1 : a<b ? 1 : 0; });
      ///invierto el arreglo de mayor a menor
      this.Numeros.reverse(); 
    });
  }
  ///funcion para eliminar el medio por id
  async deleteMedia(id) { 
    ///mando una alerta
    const alert = await this.alertCtrl.create({
      header: 'Eliminar Tarjeta',
      message: '<strong>Estas seguro?</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { 
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            ///si acepta se elemina por id 
            this.crud.deleteMedia(id)
          }
        }
      ]
    });
    await alert.present(); 
  } 
  ///funcion para abrir modal enviando el id para actualizar
  async editMediaModale(id){ 
    this.animateCSS('bounceOutLeft', true);
    const modal = await this.modal.create({
      component: UpdatenumeroPage,
      cssClass:'window-modal',
      componentProps: {
        'id': id
      }
    });
    modal.onWillDismiss().then(() => { 
      this.animateCSS('bounceInLeft');
    });
    return await modal.present();
  }
  //funcion para reproducir audio con parametro del nombre del elemento
  playaudio(value) {
    let audio = new Audio();
    audio.src = "../../../assets/audio/numeros/"+value+".mp3";
    audio.load();
    audio.play();
  } 
  ///funcion para abrir modal para crear numero
  async addnumero(){
    this.animateCSS('bounceOutLeft', true);
    const modal = await this.modal.create({
      component: CreatenumeroPage,
      cssClass:'window-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    return await modal.present();
  }
  
  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)
    
    //https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }
}
