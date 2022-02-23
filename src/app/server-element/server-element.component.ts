import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvConfig") element: { type: string; name: string; content: string };

  constructor() {
    console.log("constructor method!");
  }
  ngOnDestroy(): void {
    console.log("onDestroy method!");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked method!");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit method!");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContent checked method!");
  }
  ngAfterContentInit(): void {
    console.log("AfterContent Init method!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("onChanges method!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("OnInit Method!");
  }
  ngDoCheck(): void {
    console.log("doCheck methode!");
  }
}
