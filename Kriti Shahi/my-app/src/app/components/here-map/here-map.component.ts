import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';

declare var H: any;
@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {
  @ViewChild("map",) public mapElement: ElementRef;  
  
  public lat: any = '22.5726';  
  public lng: any = '88.3639';  
  
  public width: any = '1000px';  
  public height: any = '600px';  
  
  private platform: any;  
  private map: any;  
  
  private _appId: string = '30AGFBeGk5SbuC4ODTt3E';  
  private _appCode: string = '1o21ou0xtPdf7NmvVtoD3Vvke1L0Z0eX56TU5R_FrJg';  
  /*public mapElement: ElementRef;

  @Input()
  public appId: any;

  @Input()
  public appCode: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  private platform: any;
  private map: any;*/

  constructor() { }

  ngOnInit() {
    /*var platform = new H.service.Platform({
      'apiid': '30AGFBeGk5SbuC4ODTt3E',
      'apikey' : '1o21ou0xtPdf7NmvVtoD3Vvke1L0Z0eX56TU5R_FrJg'
    });*/

    // Obtain the default map types from the platform object
    /*var maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
      document.getElementById('mapContainer'),
      maptypes.vector.normal.map,
      {
        zoom: 10,
        center: { lng: 13.4, lat: 52.51 }
      });
      this.platform = new H.service.Platform({
        "app_id": this.appId,
    });*/
    this.platform = new H.service.Platform({  
      "app_id": this._appId,  
      "app_code": this._appCode,  
      useHTTPS: true  
    }); 
  }
  public ngAfterViewInit() {
    /*let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map,
        {
            zoom: 10,
            center: { lat: this.lat, lng: this.lng }
        }
    );*/
    let pixelRatio = window.devicePixelRatio || 1;  
    let defaultLayers = this.platform.createDefaultLayers({  
      tileSize: pixelRatio === 1 ? 256 : 512,  
      ppi: pixelRatio === 1 ? undefined : 320  
    });  
  
    this.map = new H.Map(this.mapElement.nativeElement,  
      defaultLayers.normal.map, { pixelRatio: pixelRatio });  
  
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));  
    var ui = H.ui.UI.createDefault(this.map, defaultLayers);  
  
    this.map.setCenter({ lat: this.lat, lng: this.lng });  
    this.map.setZoom(14);  
  }

}
