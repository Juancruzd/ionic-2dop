import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import {FormBuilder,FormGroup,Validators ,FormControl} from '@angular/forms'; 
import { Media } from '../../../shared/Media';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-updateletra',
  templateUrl: './updateletra.page.html',
  styleUrls: ['./updateletra.page.scss'],
})
export class UpdateletraPage implements OnInit {
  ///parametro que recibe el id para actualizar enviado desde el tab2
  @Input() id: string;
  ///arrreglo de letras de opcio nes de registro
  words: Array<string>= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
  ///Map key number value description
  descriptions: {[key: string]: string} = { 
    "A":"A for apple",
    "B":"B for baseball",
    "C":"C for clock",
    "D":"D for donkey",
    "E":"E for elephant",
    "F":"F for father",
    "G":"G for grandmother",
    "H":"H for hungry",
    "I":"I for Internet",
    "J":"J for justice",
    "K":"K for kangaroo",
    "L":"L for London",
    "M":"M for money",
    "N":"N for Norway",
    "O":"O for overtime",
    "P":"P for pillow",
    "Q":"Q for question",
    "R":"R for rabbit",
    "S":"S for superman",
    "T":"T for telephone",
    "U":"U for underwear",
    "V":"V for vaccinate",
    "W":"W for World Wide Web",
    "X":"X for xylophone",
    "Y":"Y for yogurt",
    "Z":"Z for zebra"
  }  
  ///Formulario para actualizar letra
  Formupdateword: FormGroup; 
  constructor(private crud: CrudService,private modalCtrl: ModalController, private alertCtrl: AlertController,public fb: FormBuilder) { 
    ///validator para acualizar letra de manera correcta
    this.Formupdateword = this.fb.group({  
      dato: ['', [Validators.required]]
    });  
  }

  ngOnInit() {
  }
  ///funcion para cerrar ventana modal
  close() {
    this.modalCtrl.dismiss();
  }
  ///funcion para editar letra
  async editarletra() {  
    let media: Media={   
      $key:"0", ///no toma en crud
       ///se toma la fecha actual pero no es tomada en el crud
      date:new Date().toLocaleString(),
      ///categoria letras
      category: "letras",
      ///se toma el dato del form
      dato: this.Formupdateword.value.dato.trim(),
      ///se obtiene la descripcion atravez de la key
      description:this.descriptions[this.Formupdateword.value.dato.trim()],
      ////el sonido es igual al nombre del dato pero en minuscula
      sound: this.Formupdateword.value.dato.trim().toLowerCase(),
      id:"0"///no tomada en crud
    }; 
    ///actualizar regitro letra
    this.crud.updateMedia(this.id,media);
    ///cerrar ventana modal
    this.close();
  }

}
