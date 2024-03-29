import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';

const routes: Routes = [

  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "lists", component: ListsComponent },
      { path: "members", component: MemberListComponent },
      { path: "members/:username", component: MemberDetailsComponent },
      { path: "member/edit", component:MemberEditComponent ,canDeactivate: [PreventUnsavedChangesGuard] },
      { path: "messages", component: MessagesComponent },
      { path: "register", component: RegisterComponent },
    ]
  },

  { path: "not-found", component: NotfoundComponent },
  { path: "server-error", component: ServerErrorComponent },
  { path: "**", component: NotfoundComponent, pathMatch: "full" },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
