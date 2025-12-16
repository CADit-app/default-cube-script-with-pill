import {Manifold} from 'manifold-3d/manifoldCAD';

const {cylinder, sphere} = Manifold;

// Dimensions (in mm)
const cylinderRadius = 10; // Radius of the cylinder
const cylinderHeight = 40; // Height of the cylinder

// Create the cylindrical center
const mainCylinder = cylinder(cylinderHeight, cylinderRadius, cylinderRadius, 100, true);

// Create the half spheres
const halfSphere = sphere(cylinderRadius, 100);
const bottomSphere = halfSphere.translate([0, 0, cylinderHeight / -2]);
const topSphere = halfSphere.translate([0, 0, cylinderHeight / 2]);

// Combine the cylinder with the two half spheres
const pillShape = mainCylinder.add(topSphere).add(bottomSphere);

export default pillShape;