import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import L, {
  Map,
  MapOptions,
  LatLng,
  marker,
  LatLngExpression,
  Marker,
} from 'leaflet';
import { mapOption } from 'src/app/common/const/map-option';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnDestroy, OnChanges {
  @Input() location: [number, number] | undefined;

  public center: LatLng;
  public map: Map;
  public mapMarker: Marker;
  public options: MapOptions = mapOption;

  ngOnChanges(changes: SimpleChanges) {
    const location = changes['location'];
    if (location && location.currentValue) {
      this.map.flyTo(location.currentValue);
      this.mapMarker.setLatLng(location.currentValue);
    }
  }

  ngOnDestroy() {
    this.map.clearAllEventListeners();
  }

  public onMapReady(map: Map): void {
    this.map = map;

    this.mapMarker = marker(
      (this.location as LatLngExpression) || [51, -0.09],
    ).addTo(this.map);
  }
}
