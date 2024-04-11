type FillLayout = number;
type LineLayout = number;
type PointLayout = number;

type FillPaint = number;
type LinePaint = number;
type PointPaint = number;

interface Layer {
  type: 'fill' | 'line' | 'point';
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}

let layer: Layer;
