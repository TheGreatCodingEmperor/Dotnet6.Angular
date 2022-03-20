import { AfterViewInit, Component, OnInit, Renderer2, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeScript } from '@angular/platform-browser';
import { MasterComponent } from '../master/master.component';
// import * as Chart from'chart.js';

@Component({
  selector: 'app-home',
  template: `
    <p id="hello">
      home works!
    </p>
    123
    <div [innerHtml]="safeHtml"></div>
  `,
  styles: [
  ]
})
export class HomeComponent extends MasterComponent implements OnInit,AfterViewInit {
  
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
  }

  ngAfterViewInit(): void {
    this.insertScripts(this.insertScript);
    this.insertScripts(this.chartScript);
  }

  insertScripts(scriptStr:string){
    const script = this.renderer.createElement("script");
    this.renderer.setProperty(
      script,
      "text",
      scriptStr
    );
    // It will add a new `<script>` on each call
    this.renderer.appendChild(document.body, script);
  }

  chartScript=`
  // Initialize the echarts instance based on the prepared dom
  var myChart = echarts.init(document.getElementById('main'));

  // Specify the configuration items and data for the chart
  var option = {
    title: {
      text: 'ECharts Getting Started Example'
    },
    tooltip: {},
    legend: {
      data: ['sales']
    },
    xAxis: {
      data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
    },
    yAxis: {},
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);`;
  insertHtml = `
  <body>
  <h3>Modal Example</h3>
  <app-square-button></app-square-button>
  <p>Click on the button to open the modal.</p>
  <div id="main" style="width: 600px;height:400px;"></div>
  
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
  document.getElementById('hello').innerText = 'Hello world!';
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
`;
}
