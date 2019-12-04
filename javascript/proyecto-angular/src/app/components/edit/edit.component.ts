import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/proyecto";
import { ProjectService } from "../../services/project.service";
import { UploadService } from "../../services/upload.service";
import { Global } from "src/app/services/global";
import {Router, ActivatedRoute,Params} from '@angular/router'


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]

})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public saveProject
  public status: string;
  public filesToUpload: Array<File>;
  public url:string

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router:Router,
    private _route:ActivatedRoute

  ) {
    this.title = "Editar Proyecto";
    this.url=Global.url
    //this.project = new Project("", "", "", "", 2019, "", "");
  }
 
  ngOnInit() {
    this._route.params.subscribe(params=>{
      let id=params.id
      this.getProject(id)
    })
  }

 getProject(id){
  this._projectService.getProject(id).subscribe(response=>{
this.project=  response.project
//console.log("project",this.project)
  },error=>{ 
    console.log(<any>error)
  })
}
onSubmit(form) {
  this._projectService.updateProject(this.project).subscribe(
    response => {
      if (response.project) {
        //subir imagen
        if(this.filesToUpload.length>=1){
        this._uploadService
          .makeFileRequest(
            Global.url + "upload-image/" + response.project._id,
            [],
            this.filesToUpload,
            "image"
          )
          .then((result: any) => {
            this.saveProject=result.project;
            this.status = "success";
           // form.reset();
          });
        }
      } else {
        this.status = "failed";
      }
     // console.log(response);
    },
    error => {
      console.log(<any>error);
    }
  );
  console.log(this.project);
}
fileChangeEvent(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
}
}