import { Component, OnInit, Renderer2, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeScript } from '@angular/platform-browser';
import { MasterComponent } from '../master/master.component';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    123
    <div [innerHtml]="safeHtml"></div>
  `,
  styles: [
  ]
})
export class HomeComponent extends MasterComponent implements OnInit {
  insertHtml = `
  <body>
  <h3>Modal Example</h3>
  <p>Click on the button to open the modal.</p>
  
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onclick="call2()">
    Open modal
  </button>
</div>

<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        Modal body..
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
</body>`;
  insertScript = `
function call(){
  var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://localhost:7290/WeatherForecast");

xhr.send();
}
function call2(){
  var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    document.querySelector('.modal-body').innerHTML = this.responseText;
  }
});

xhr.open("GET", "https://localhost:7290/WeatherForecast");

xhr.send();
}
call();
alert();
console.log("hello world!")
`;
  safeHtml: SafeHtml = '';
  safeScript: SafeScript = '';
  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
  ) {
    super();
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.insertHtml);
    this.safeScript = this.sanitizer.bypassSecurityTrustScript(this.insertScript);
  }

  override ngOnInit(): void {
    const script = this.renderer.createElement("script");
    this.renderer.setProperty(
      script,
      "text",
      this.insertScript
    );
    // It will add a new `<script>` on each call
    this.renderer.appendChild(document.body, script);
  }

}
