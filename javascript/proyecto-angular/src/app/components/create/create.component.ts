import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/proyecto";
import { ProjectService } from "../../services/project.service";
//import { truncate } from "fs";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: boolean;

  constructor(private _projecService: ProjectService) {
    this.title = "Crear Proyecto";
    this.project = new Project("", "", "", "", 2019, "", "");
  }

  ngOnInit() {}

  onSubmit(form) {
    this._projecService.saveProject(this.project).subscribe(
      response => {
        if (response.projec) {
          this.status = true;
        } else {
          this.status = false;
        }
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
    console.log(this.project);
  }
}
