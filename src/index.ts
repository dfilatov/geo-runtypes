import * as runtypes from 'runtypes';

const BBox = runtypes.Tuple(runtypes.Number, runtypes.Number, runtypes.Number, runtypes.Number);

type BBox = runtypes.Static<typeof BBox>;

const Bounds = runtypes.Tuple(
    runtypes.Tuple(runtypes.Number, runtypes.Number),
    runtypes.Tuple(runtypes.Number, runtypes.Number)
);

type Bounds = runtypes.Static<typeof Bounds>;

const Position = runtypes.Array(runtypes.Number);

type Position = runtypes.Static<typeof Position>;

const Point = runtypes.Record({
    type: runtypes.Literal('Point'),
    coordinates: Position
});

type Point = runtypes.Static<typeof Point>;

const MultiPoint = runtypes.Record({
    type: runtypes.Literal('MultiPoint'),
    coordinates: runtypes.Array(Position)
});

type MultiPoint = runtypes.Static<typeof MultiPoint>;

const LineString = runtypes.Record({
    type: runtypes.Literal('LineString'),
    coordinates: runtypes.Array(Position)
});

type LineString = runtypes.Static<typeof LineString>;

const MultiLineString = runtypes.Record({
    type: runtypes.Literal('MultiLineString'),
    coordinates: runtypes.Array(runtypes.Array(Position))
});

type MultiLineString = runtypes.Static<typeof MultiLineString>;

const Polygon = runtypes.Record({
    type: runtypes.Literal('Polygon'),
    coordinates: runtypes.Array(runtypes.Array(Position))
});

type Polygon = runtypes.Static<typeof Polygon>;

type MultiPolygon = runtypes.Static<typeof MultiPolygon>;

const MultiPolygon = runtypes.Record({
    type: runtypes.Literal('MultiPolygon'),
    coordinates: runtypes.Array(runtypes.Array(runtypes.Array(Position)))
});

const Geometry: runtypes.Runtype<Geometry> = runtypes.Lazy(
    () => runtypes.Union(Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, GeometryCollection)
);

type Geometry = Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon | GeometryCollection;

const GeometryCollection = runtypes.Record({
    type: runtypes.Literal('GeometryCollection'),
    geometries: runtypes.Array(Geometry)
});

type GeometryCollection = {
    type: 'GeometryCollection';
    geometries: Geometry[];
};

export {
    BBox,
    Bounds,
    Position,
    Point,
    MultiPoint,
    LineString,
    MultiLineString,
    Polygon,
    MultiPolygon,
    GeometryCollection,
    Geometry
};
