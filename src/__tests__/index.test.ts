import {
    BBox,
    Bounds,
    Point,
    MultiPoint,
    LineString,
    MultiLineString,
    Polygon,
    MultiPolygon,
    GeometryCollection,
    Geometry
} from '..';
import * as runtypes from 'runtypes';

describe('BBox', () => {
    it('should accept valid value', () => {
        const bbox: BBox = [0, 0, 1, 1];

        expect(() => {
            BBox.check(bbox);
        }).not.toThrow();
    });

    it('should not accept invalid value', () => {
        const bbox = ['0', '0', '1', '1'];

        expect(() => {
            BBox.check(bbox);
        }).toThrow(runtypes.ValidationError);
    });
});

describe('Bounds', () => {
    it('should accept valid value', () => {
        const bounds: Bounds = [[0, 0], [1, 1]];

        expect(() => {
            Bounds.check(bounds);
        }).not.toThrow();
    });

    it('should not accept invalid value', () => {
        const bounds = [0, 0, 1, 1];

        expect(() => {
            Bounds.check(bounds);
        }).toThrow(runtypes.ValidationError);
    });
});

describe('Point', () => {
    it('should accept valid value', () => {
        const point: Point = {
            type: 'Point',
            coordinates: [0, 0]
        };

        expect(() => {
            Point.check(point);
        }).not.toThrow();
    });

    it('should not accept invalid value', () => {
        const point = {
            type: 'Point',
            coordinates: ['wrong']
        };

        expect(() => {
            Point.check(point);
        }).toThrow(runtypes.ValidationError);
    });
});

describe('MultiPoint', () => {
    it('should accept valid value', () => {
        const multiPoint: MultiPoint = {
            type: 'MultiPoint',
            coordinates: [[0, 0], [1, 1]]
        };

        expect(() => {
            MultiPoint.check(multiPoint);
        }).not.toThrow();
    });

    it('should not accept invalid value', () => {
        const multiPoint = {
            type: 'MultiPoint',
            coordinates: ['wrong']
        };

        expect(() => {
            MultiPoint.check(multiPoint);
        }).toThrow(runtypes.ValidationError);
    });
});

describe('LineString', () => {
    it('should accept valid value', () => {
        const line: LineString = {
            type: 'LineString',
            coordinates: [[0, 0], [1, 1]]
        };

        expect(() => {
            LineString.check(line);
        }).not.toThrow();
    });

    it('should not accept invalid value', () => {
        const line = {
            type: 'LineString',
            coordinates: [0, 0, 1, 1]
        };

        expect(() => {
            LineString.check(line);
        }).toThrow(runtypes.ValidationError);
    });
});

describe('MultiLineString', () => {
    it('should accept valid value', () => {
        const multiLine: MultiLineString = {
            type: 'MultiLineString',
            coordinates: [[[0, 0], [1, 1]], [[2, 2]], [[3, 3]]]
        };

        expect(() => {
            MultiLineString.check(multiLine);
        }).not.toThrow();
    });

    it('should not accept invalid value', () => {
        const multiLine = {
            type: 'MultiLineString',
            coordinates: [0, 0, 1, 1]
        };

        expect(() => {
            MultiLineString.check(multiLine);
        }).toThrow(runtypes.ValidationError);
    });
});

describe('Polygon', () => {
    it('should accept valid value', () => {
        const polygon: Polygon = {
            type: 'Polygon',
            coordinates: [[[0, 0], [1, 1]], [[2, 2]], [[3, 3]]]
        };

        expect(() => {
            Polygon.check(polygon);
        }).not.toThrow();
    });

    it('should not accept invalid value', () => {
        const polygon = {
            type: 'Polygon',
            coordinates: [[0, 0], [1, 1]]
        };

        expect(() => {
            Polygon.check(polygon);
        }).toThrow(runtypes.ValidationError);
    });
});

describe('MultiPolygon', () => {
    it('should accept valid value', () => {
        const multiPolygon: MultiPolygon = {
            type: 'MultiPolygon',
            coordinates: [[[[0, 0], [1, 1]], [[2, 2]], [[3, 3]]]]
        };

        expect(() => {
            MultiPolygon.check(multiPolygon);
        }).not.toThrow();
    });

    it('should not accept invalid value', () => {
        const multiPolygon = {
            type: 'MultiPolygon',
            coordinates: [[[0, 0], [1, 1]]]
        };

        expect(() => {
            MultiPolygon.check(multiPolygon);
        }).toThrow(runtypes.ValidationError);
    });
});

describe('GeometryCollection', () => {
    it('should accept valid value', () => {
        const collection: GeometryCollection = {
            type: 'GeometryCollection',
            geometries: [
                {
                    type: 'Point',
                    coordinates: [0, 0]
                },
                {
                    type: 'MultiPoint',
                    coordinates: [[0, 0], [1, 1]]
                },
                {
                    type: 'LineString',
                    coordinates: [[0, 0], [1, 1]]
                },
                {
                    type: 'MultiLineString',
                    coordinates: [[[0, 0], [1, 1]], [[2, 2]], [[3, 3]]]
                },
                {
                    type: 'Polygon',
                    coordinates: [[[0, 0], [1, 1]], [[2, 2]], [[3, 3]]]
                },
                {
                    type: 'MultiPolygon',
                    coordinates: [[[[0, 0], [1, 1]], [[2, 2]], [[3, 3]]]]
                },
                {
                    type: 'GeometryCollection',
                    geometries: [
                        {
                            type: 'Point',
                            coordinates: [0, 0]
                        }
                    ]
                }
            ]
        };

        expect(() => {
            GeometryCollection.check(collection);
        }).not.toThrow();
    });

    it('should not accept invalid value', () => {
        const collection = [
            {
                type: 'Point',
                coordinates: [0, 0]
            },
            {
                type: 'WrongType',
                coordinates: [[0, 0], [1, 1]]
            }
        ];

        expect(() => {
            GeometryCollection.check(collection);
        }).toThrow(runtypes.ValidationError);
    });
});

describe('Geometry', () => {
    it('should accept valid value', () => {
        const point: Point = {
            type: 'Point',
            coordinates: [0, 0]
        };
        const multiPoint: MultiPoint = {
            type: 'MultiPoint',
            coordinates: [[0, 0], [1, 1]]
        };
        const line: LineString = {
            type: 'LineString',
            coordinates: [[0, 0], [1, 1]]
        };
        const multiLine: MultiLineString = {
            type: 'MultiLineString',
            coordinates: [[[0, 0], [1, 1]], [[2, 2]], [[3, 3]]]
        };
        const polygon: Polygon = {
            type: 'Polygon',
            coordinates: [[[0, 0], [1, 1]], [[2, 2]], [[3, 3]]]
        };
        const multiPolygon: MultiPolygon = {
            type: 'MultiPolygon',
            coordinates: [[[[0, 0], [1, 1]], [[2, 2]], [[3, 3]]]]
        };
        const collection: GeometryCollection = {
            type: 'GeometryCollection',
            geometries: [
                {
                    type: 'Point',
                    coordinates: [0, 0]
                }
            ]
        };

        expect(() => {
            Geometry.check(point);
            Geometry.check(multiPoint);
            Geometry.check(line);
            Geometry.check(multiLine);
            Geometry.check(polygon);
            Geometry.check(multiPolygon);
            Geometry.check(collection);
        }).not.toThrow();
    });

    it('should not accept invalid value', () => {
        const geometry = {
            type: 'WrongType',
            coordinates: [[[0, 0], [1, 1]]]
        };

        expect(() => {
            Geometry.check(geometry);
        }).toThrow(runtypes.ValidationError);
    });
});
