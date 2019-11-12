import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";

import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { CreateComponent } from "./components/create/create.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ErrorComponent } from "./components/error/error.component";

const appRoutes: Routes = [
  { path: "", component: AboutComponent },
  { path: "sobre-mi", component: AboutComponent },
  { path: "proyectos", component: ProjectsComponent },
  { path: "crear-proyecto", component: CreateComponent },
  { path: "contacto", component: ContactComponent },
  { path: "error", component: ErrorComponent },

  { path: "**", component: AboutComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
