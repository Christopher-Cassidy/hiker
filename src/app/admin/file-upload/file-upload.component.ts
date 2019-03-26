import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import * as firebase from 'firebase';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  // Path for file storage, default to 'temp' if undefined
  @Input() path : string;

  // Default file name to use in place of the uploaded file name.  The uploaded file extension is used.
  @Input() defaultFileName : string;

  // Path for file storage, default to 'temp' if undefined
  @Input() enableDragDrop : boolean = true;

  // The download url path for the uploaded file
  @Output() fileUploaded = new EventEmitter<string>();

  // Main task 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;
  
  // Upload task snapshot
  snapshot: Observable<UploadTaskSnapshot>;

  // Download URL
  storageUrl: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);
    const fileName = file.name.substr(0, file.name.lastIndexOf('.'));
    const fileExt = file.name.split('.').pop();
    
    console.log('[FileUploadComponent] uploaded file', file);

    // Client-side validation example
    // if (file.type.split('/')[0] !== 'image') { 
    //   console.error('unsupported file type :( ')
    //   return;
    // }

    // The storage path
    //const path = `test/${new Date().getTime()}_${file.name}`;
    const path = (this.path || 'temp') + '//' + (this.defaultFileName || fileName) + "." + fileExt;
    
    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges();

    // The file's download URL
    this.snapshot.subscribe((obs) => {
      console.log('[FileUploadComponent] file upload progress',obs);      
    });

    this.task.then(uts => {
      if (uts.state === firebase.storage.TaskState.SUCCESS)
      {
        console.log('[FileUploadComponent] upload complete', uts);
        
        uts.ref.getDownloadURL().then(url => { 
          this.storageUrl = of(url);
          this.fileUploaded.emit(url);        
         })
      }
    }); 
  }

  // Determines if the upload task is active
  isActive(snapshot) : boolean {
    return snapshot.state === firebase.storage.TaskState.RUNNING && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  isComplete(snapshot) : boolean { 
    return snapshot.state === firebase.storage.TaskState.SUCCESS && snapshot.bytesTransferred >= snapshot.totalBytes;
  }
}

