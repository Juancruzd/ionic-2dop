import { Injectable } from '@angular/core'; 
import { User } from '../shared/User';
import { Media  } from '../shared/media';
import { AngularFireDatabase} from '@angular/fire/database'; 
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService { 

  User: Observable<User[]>;
  UserCollection: AngularFirestoreCollection<User>;


  Media: Observable<Media[]>;
  MediaCollection:  AngularFirestoreCollection<Media>;

    constructor(public db: AngularFirestore) {
      this.UserCollection = db.collection<User>('users');
      this.User = this.UserCollection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }
      )); 
      this.MediaCollection = db.collection<Media>('media');
      this.Media = this.MediaCollection.snapshotChanges().pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }
      ));
    }
    // CreateUser
    createUser(uid,usr: User) {  
      delete usr.$key;
      return this.UserCollection.doc(uid).set(usr); 
    }
    // Get List 
    getUserList() {
      return this.User;
    }
    // Get Single User by Id 
    getUser(id: string) {
      return this.UserCollection.doc<User>(id).valueChanges();
    }
  
     // Update User by id
    updateUser(id,usr: User) {
      delete usr.$key;
      return this.UserCollection.doc(id).update(usr);
    } 
    //agregar un nuevo dato a la base de datos desde la app
    addTodo(usr: User) {
      return this.UserCollection.add(usr);
    } 
    // Delete User by id
    deleteUser(id: string) {
      return this.UserCollection.doc(id).delete();
    }   



  /////CRUD MEDIA 
  // CreateMedia
  createMedia(md: Media) { 
    delete md.$key;
    delete md.id; 
    const id = this.db.createId();
    return this.MediaCollection.doc(id).set(md);
  } 
  // Get Single Media by Id
  getMedia(id: string) {
    return this.MediaCollection.doc<Media>(id).valueChanges();
  } 
  // Get List Media
  getMediaList() {
    return this.Media;
  } 
  // Update  Media by id
  updateMedia(id,md: Media) {
    delete md.$key;
    delete md.id;
    delete md.date;
    return this.MediaCollection.doc(id).update(md);
  }
  // Delete Media by Id
  deleteMedia(id: string) {
    return this.MediaCollection.doc(id).delete();
  }
}
