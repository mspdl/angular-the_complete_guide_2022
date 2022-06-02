import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { CanComponentDeactivate } from "./can-deactivate-guard.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @HostListener("window:beforeunload", ["$event"])
  handleClose($event) {
    if (this.cantLeavePage()) {
      $event.returnValue = false;
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params["id"]);
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams["allowEdit"] === "1" ? true : false;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  cantLeavePage(): boolean {
    return (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    );
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if (this.cantLeavePage()) {
      return confirm("Do you want to discard the changes?");
    } else {
      return true;
    }
  }
}
