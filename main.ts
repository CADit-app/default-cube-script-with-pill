
// Welcome to CADit's code editor!
// Create 3D objects using Manifold or JSCAD.

// Example: Cube with a cylindrical hole
import { Manifold } from 'manifold-3d/manifoldCAD';
import pillShape from './pill'

// Create a 20x20x20mm centered cube
const cube = Manifold.cube([20, 20, 20], true)

// Create a cylinder (10mm diameter, 25mm tall) for the hole
const cylinder = Manifold.cylinder(25, 5);

// Subtract the cylinder from the cube to create a hole
const difference = cube.subtract(cylinder);

// Export the result variable to render it
export const result = difference.add(pillShape);

/*
  💡 TIP: Type 'Manifold.' to see all available methods with autocomplete!
  
  🔧 COMMON OPERATIONS:
  - Manifold.cube([x, y, z], center?)  // Create a box
  - Manifold.cylinder(height, radius)  // Create a cylinder
  - Manifold.sphere(radius)            // Create a sphere
  - .translate([x, y, z])              // Move object
  - .rotate([x, y, z])                 // Rotate (degrees)
  - .scale([x, y, z])                  // Scale object
  - .union(other)                      // Combine objects
  - .subtract(other)                   // Cut out other from this
  - .intersect(other)                  // Keep only overlapping parts
  
  📦 NPM PACKAGES:
  Import any npm package - types load automatically!
  Example: import lodash from 'lodash';
  
  🎨 2D OPERATIONS:
  Use CrossSection for 2D shapes, then .extrude() to make 3D:
    import { CrossSection } from 'manifold-3d/manifoldCAD';
    const circle = CrossSection.circle(10);
    const shape3d = circle.extrude(5);
*/
