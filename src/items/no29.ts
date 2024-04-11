interface LngLat {
  lng: number;
  lat: number;
}

type LngLatLike = LngLat | { lon: number; lat: number } | [number, number];

interface Camera {
  center: LngLat;
  zoom: number;
  bearing: number;
  pitch: number;
}

interface CameraOptions extends Omit<Partial<Camera>, 'center'> {
  center?: LngLatLike;
}

type LngLatBounds =
  | { northeast: LngLat; southwest: LngLat }
  | [LngLatLike, LngLatLike]
  | [number, number, number, number];

declare function setCamera(camera: CameraOptions): void;
declare function viewportForBounds(bounds: LngLatBounds): Camera;

setCamera({
  center: { lng: 139.767125, lat: 35.681236 },
  zoom: 10,
  bearing: 0,
  pitch: 0,
});
