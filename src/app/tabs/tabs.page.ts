import { Component } from '@angular/core';
///import para navegar entre ventanas, ademas para cerrar sesion,tambien alertas
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import { CrudService } from './../services/crud.service';
import {AlertController,MenuController,ModalController } from '@ionic/angular';  
import { isNullOrUndefined, isNull, isUndefined } from 'util'; 
import {FormBuilder,FormGroup,Validators ,FormControl} from '@angular/forms'; 
import { User } from '../shared/User';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage { 
  ///variables para guardar la informacion del usuario
  uid:any
  nombre:any=""
  apellido:any=""
  email:any=""
  gender:any=""

  ///form crear usuario
  Formcreateuser: FormGroup; 
  ///boolean para mostrar formulario de registro
  createuser = true
  ///form para actualizar usuario
  Formupdateuser: FormGroup; 
  ///boolean para mostrar formulario de actualizacion de informacion
  updateuser = true;
  constructor(
    private authSvc:AuthService,
    private router:Router,
    private alertCtrl:AlertController,
    private crud: CrudService, 
    public modalController: ModalController ,public fb: FormBuilder) {
    //console.log(this.authSvc.ofAuth.auth.currentUser.email);

    ///tomar la actual sesion y mostrar el email del actual usuario
    authSvc.ofAuth.authState.subscribe(auth  =>{
      ///si el usuario esta autenticado
      if (auth) {   
        //tomo el uid del usuario actual
        this.uid=auth.uid;
        ///muestro lineas si el usuario no tiene cuenta de usuario
        this.nombre="-------------"; 
        this.apellido="-------------"; 
        this.email="-------------"; 
        this.gender="-------------"; 
        ////busco o obtengo los datos del usuario en database si el usuario los tiene
        this.crud.getUser(auth.uid).subscribe(res => {  
          if(isNullOrUndefined(res)){ 
            ///si no los tiene muestro  el form para que registre su informacion y cree el usuario.
            this.createuser = false;
            ///oculto la opcion actualizar si el usuario tiene usuario en database
            this.updateuser = true;
          }else{  
            ///si si tiene cuenta 
            ////muestro sus datos en el aparatado de su informacion de cuenta en el menu
            this.nombre=res.name; 
            this.apellido=res.lastname; 
            this.email=res.email; 
            ///si su genero es m (value del select) es masculino
            if(res.gender=="m"){
              this.gender= "Masculino"
            }
            //si su genero es f (value del select) es femenino
            if(res.gender=="f"){
              this.gender= "Famenino"
            }  
            ///ingreso los datos al form para que actulize o visualice la actual informavion
            this.Formupdateuser.setValue(res);
            ////muestro la division para actualizar informacion
            this.updateuser = false;
            ///oculto la opcion de crear usuario
            this.createuser = true;
          }
          
        })
      }
     else{
       ///si no esta autenticado no muestro nada al usuario ya que el guard lo mandara a login
        this.nombre= "";  
        this.apellido=""; 
        this.email=""; 
        this.gender=""; 
     }
    }); 
    //validadors and formcontrolname create user
    this.Formcreateuser = this.fb.group({ 
      email: ['', [Validators.required, Validators.email]], 
      name: ['', [Validators.required,Validators.maxLength(30)]],
      lastname: ['', [Validators.required,Validators.maxLength(10)]],
      gender: ['', [Validators.required]]
    });
    //validadors and formcontrolname update user
    this.Formupdateuser = this.fb.group({ 
      email: ['', [Validators.required, Validators.email]], 
      name: ['', [Validators.required,Validators.maxLength(30)]],
      lastname: ['', [Validators.required,Validators.maxLength(10)]],
      gender: ['', [Validators.required]]
    });
  } 
  ///funcion cerrar sesion
  async logout(){
    try{ 
      //console.log("email:"+this.myForm.value.email+" pass:"+this.myForm.value.password);
      ////no se requiere ningun parametro solo se elimina la actual sesion
      this.authSvc.doLogout().then(res=>{
        ///si el login es true se abre la ventana
        this.router.navigateByUrl('/login');
      }, async err =>{
        const alert = await this.alertCtrl.create({
          header: 'Logout Failed',
          message: err,
          buttons: ['OK']
        });
        await alert.present();
      }); 
    }
    catch(error){
      const alert = await this.alertCtrl.create({
        header: 'Logout Failed',
        message: error,
        buttons: ['OK']
      });
      await alert.present();
    }
  }
  ///funcion para crear usuario
  async crearusuario() { 
    //creo un objeto tipo user para enviar a registro
    let user: User={  
      $key:this.uid,
      name: this.Formcreateuser.value.name,
      email: this.Formcreateuser.value.email,
      lastname: this.Formcreateuser.value.lastname,
      gender: this.Formcreateuser.value.gender
    }; 
    ///envio la informacion a registro
    this.crud.createUser(this.uid,user);
  } 
  ///funcion para actualizar la informacion actual del usuario
  async updateususuario() { 
    //creo un objeto tipo user para enviar a actualizar
    let user: User={  
      $key:this.uid,
      name: this.Formupdateuser.value.name,
      email: this.Formupdateuser.value.email,
      lastname: this.Formupdateuser.value.lastname,
      gender: this.Formupdateuser.value.gender
    }; 
    //envio la informacion a actualizar junto con el id para identificar cual
    this.crud.updateUser(this.uid,user);
  }  
}  