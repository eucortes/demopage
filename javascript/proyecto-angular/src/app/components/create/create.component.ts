import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/proyecto";
import { ProjectService } from "../../services/project.service";
import { UploadService } from "../../services/upload.service";
import { Global } from "src/app/services/global";
//import { truncate } from "fs";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _projecService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Crear Proyecto";
    this.project = new Project("", "", "", "", 2019, "", "");
  }

  ngOnInit() {}

  onSubmit(form) {
    this._projecService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {
          //subir imagen
          this._uploadService
            .makeFileRequest(
              Global.url + "upload-image/" + response.project._id,
              [],
              this.filesToUpload,
              "image"
            )
            .then((result: any) => {
              console.log(result);
              this.status = "success";
              form.reset();
            });
        } else {
          this.status = "failed";
        }
        console.log(response);
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
