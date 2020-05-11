import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from './../services/crud.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  ////formulario
  //updateContactForm: FormGroup;
  ///identificador o key del contacto
  //id: any;

  constructor(private aptService: CrudService,private actRoute: ActivatedRoute,private router: Router,public fb: FormBuilder) {
    ///accedo al los parametros de la ruta y obtengo el id del contacto a actualizar
    //this.id = this.actRoute.snapshot.paramMap.get('id');
    ///muestro el contacto en el formulario atravez del id obtendio 
    /*this.aptService.getContact(this.id).valueChanges().subscribe(res => {
      ///muestro los datos
      this.updateContactForm.setValue(res);
    });*/
  } 
  ///inicializo un nuevo elemento
  ngOnInit() {
   /* this.updateContactForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    })
    console.log(this.updateContactForm.value)*/
  }
////funcion para actualizar atravez del id obtenido 
  /*updateForm() {
    this.aptService.updateContact(this.id, this.updateContactForm.value)
      .then(() => {
        //redirecciono a el inicio donde se muestran los contactos
        this.router.navigate(['/tabs']);
      })
      .catch(error => console.log(error));
  }*/
}
