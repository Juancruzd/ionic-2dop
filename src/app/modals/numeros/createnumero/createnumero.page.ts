import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import {FormBuilder,FormGroup,Validators ,FormControl} from '@angular/forms'; 
import { Media } from '../../../shared/Media';
import { CrudService } from '../../../services/crud.service';


@Component({
  selector: 'app-createnumero',
  templateUrl: './createnumero.page.html',
  styleUrls: ['./createnumero.page.scss'],
}) 
export class CreatenumeroPage implements OnInit { 
  ///arrreglo de numeros de opciones de registro
  numbers: Array<string>= ["0","1","2","3","4","5","6","7","8","9","10"]; 
  ///Map key number value description
  descriptions: {[key: string]: string} = { 
      "0":"Zero",
      "1":"One",
      "2":"Two",
      "3":"Three",
      "4" :"Four",
      "5":"Five",
      "6":"Six",
      "7":"Seven",
      "8":"Eight",
      "9":"Nine",
      "10":"Ten"
  }  
  ///Formulario para crear nuemeros
  Formcreatenumber: FormGroup; 
  constructor(private crud: CrudService,private modalCtrl: ModalController, private alertCtrl: AlertController,public fb: FormBuilder) { 
    ///validator para registrar numero de manera correcta
    this.Formcreatenumber = this.fb.group({  
      dato: ['', [Validators.required]]
    });  
  }

  ngOnInit() {
  }
  ///funcion para cerrar ventana modal
  close() {
    this.modalCtrl.dismiss();
  }
  ///funcion para crear numero 
  async crearnumero() {  
    let media: Media={   
      $key:"0", 
      ///se toma la fecha actual
      date:new Date().toLocaleString(),
      ///categoria numeros
      category: "numeros",
      ///se toma el dato del form
      dato: this.Formcreatenumber.value.dato,
      ///se obtiene la descripcion atravez de la key
      description:this.descriptions[this.Formcreatenumber.value.dato],
      ////el sonido es igual al nombre del dato
      sound: this.Formcreatenumber.value.dato,
      id:"0"
    }; 
    ///crear registro numero
    this.crud.createMedia(media);
    ////cerrar ventana modal
    this.close();
  } 

}
