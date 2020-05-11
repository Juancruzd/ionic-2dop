import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Media } from '../shared/media';
import { CrudService } from './../services/crud.service';
import { ModalController,AlertController } from '@ionic/angular'; 
import { CreateletraPage } from '../modals/letras/createletra/createletra.page'; 
import { UpdateletraPage } from '../modals/letras/updateletra/updateletra.page'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  Letras = []; 
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef; 
  constructor( private crud: CrudService,public modal: ModalController,private alertCtrl:AlertController ) {
    }  
   //Metodo de inicializacion donde obtengo los actuales Files  al momento de carga de la pagina
  ngOnInit() {
    //inicializo la lista de Media
    this.fetchMedia(); 
  }
  //funcion para inicializar la lista de Media
  fetchMedia() {
    this.crud.getMediaList().subscribe(res => { 
      ///se vacea el arreglo
      this.Letras = []; 
      ///se cicla el resultado o respues obtenida
      res.forEach(item => {  
        //si el objeto es de categoria letras
        if(item.category.match("letras"))
        {
        let a = item;  
        a['$key'] = item.id; 
        delete a["id"]; 
        ///ingeso objeto 
        this.Letras.push(a as Media);
        }
      });  
      ///ordeno arreglo apartir del menor a mayor por fecha
      this.Letras.sort(function(a, b) { a = new Date(a.date); b = new Date(b.date); return a>b ? -1 : a<b ? 1 : 0; });
      ///invierto el arreglo de mayor a menor
      this.Letras.reverse();  
    });
  }
  ///funcion para eliminar el medio por id
  async deleteMedia(id) { 
    //envio alerta para cuestionar la eliminacion
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
            //se elimina el elemento con el id
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
      component: UpdateletraPage,
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
    audio.src = "../../../assets/audio/letras/"+value+".mp3";
    audio.load();
    audio.play();
  } 
  ///funcion para abrir modal para crear una nueva letra
  async addletra(){
    this.animateCSS('bounceOutLeft', true);
    const modal = await this.modal.create({
      component: CreateletraPage,
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
