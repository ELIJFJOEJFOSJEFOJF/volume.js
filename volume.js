function rectangleVolume(base, width, height){
    const baseArea = base * width;
    const rectangleVolume = baseArea * height;
    console.log(`

    the rectangular prisms volume is:
    
            ${rectangleVolume}`);
}

rectangleVolume(0, 0, 0);
//base, width, height

function triangleVolume(base, width, height){
   const baseArea = base * width/2;
   const triangleVolume = baseArea * height;
   console.log(`

    the trianglular prisms volume is: 
                    
            ${triangleVolume}

`);
}

triangleVolume(0, 0, 0);
//base, width, height


function coneVolumeRadius(radius, height){
    const circleVolume = 1/3 * 3.14 * radius * radius * height;
    console.log(`
    the cones volume based on the radius is:

        ${circleVolume}
    `);
}

coneVolumeRadius(0, 0);
//radius, and height

function coneVolumeDiameter(diameter, height){
    const circleVolume = 1/3 * 3.14 * diameter * height;
    console.log(`
    the cones volume based on the radius is:

        ${circleVolume}
    `);
}

coneVolumeDiameter(0, 0);
//radius, and height


function cylinderVolumeRadius(radius, height){
    const circleArea = 3.14 * radius * radius;
    const cylinderVolume = circleArea * height;
    console.log(`
    the cylinders volume based on the radius is:

        ${cylinderVolume}
    `) 
}

cylinderVolumeRadius(0, 0);
//radius, and height

function cylinderVolumeDiameter(diameter, height){
    const circleArea = 3.14 * diameter;
    const cylinderVolume = circleArea * height;
    console.log(`
    the cylinders volume based on the diameter is:

        ${cylinderVolume}
    `) 
}

cylinderVolumeDiameter(0, 0);
//radius, and height



function sphereVolume(radius){
    const sphereVolume = 4/3 * 3.14 * radius * radius * radius;
    console.log(`
    the spheres volume based on the radius is:

        ${sphereVolume}
    `) 
}

sphereVolume(0);
//radius


function circleArea(radius, diameter) {
    
}