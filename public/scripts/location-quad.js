function isValid(coordinates) {
  let lat = coordinates.latitude;
  let lon = coordinates.longitude;

  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) return false;
  else return true;
}

function isValidDevice(device) {
  let deviceCoordinates = {};
  deviceCoordinates["latitude"] = device.coords.latitude;
  deviceCoordinates["longitude"] = device.coords.longitude;

  if (isValid(deviceCoordinates)) return true;
  else throw "Invalid Device";
}

function isValidType(location) {
  if (location.type === "quad") return true;
  else throw "Invalid Location Type";
}

function isValidCoordinates(coordinates) {
  if (coordinates.length != 4) return false;

  coordinates.forEach(function (coordinate, index) {
    if (!isValid(coordinate)) return false;
  });

  return true;
}

function isValidLocation(location) {
  if (
    location.name.length > 0 &&
    isValidType(location) &&
    isValidCoordinates(location.coordinates)
  )
    return true;
  else throw "Invalid Location";
}

function isValidArguments(device, location) {
  if (device == null || location == null)
    throw "Two valid arguments are needed";
  else return true;
}

export function isInsideQuad(device, location) {
  console.log(device,location);
  try {
    let checkValid =
      isValidArguments(device, location) &&
      isValidDevice(device) &&
      isValidType(location) &&
      isValidLocation(location);
    if (checkValid) {
      let [x,y]=[device.coords.latitude, device.coords.longitude];

      let inside = false;
      let coordinates = location.coordinates;
      for (
        let i = 0, j = coordinates.length - 1;
        i < coordinates.length;
        j = i++
      ) {
        let xi = coordinates[i]["latitude"],
          yi = coordinates[i]["longitude"];
        let xj = coordinates[j]["latitude"],
          yj = coordinates[j]["longitude"];

        let intersect =
          yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect) inside = !inside;
      }
      return inside;
    }
  } catch (err) {
    console.log("Exception: " + err);
  }
}
/* Get directions towards the quad from the current location*/
export function getLocationDirections(device, location) {
  let directionArray = [];
  try {
    let checkValid =
      isValidArguments(device, location) &&
      isValidDevice(device) &&
      isValidType(location) &&
      isValidLocation(location);
    if (checkValid) {
      let [x, y] = [device.coords.latitude, device.coords.longitude];

      const latitudes = location.coordinates
        .map((item) => item.latitude)
        .sort((a, b) => b - a);
      const longitudes = location.coordinates
        .map((item) => item.longitude)
        .sort((a, b) => a - b);

      if (x > latitudes[0] || x > latitudes[1]) directionArray.push("South");
      else if (x < latitudes[3] || x < latitudes[4])
        directionArray.push("North");

      if (y < longitudes[0] || y < longitudes[1]) directionArray.push("East");
      else if (y > longitudes[3] || y > longitudes[4])
        directionArray.push("West");

      return directionArray;
    }
  } catch (err) {
    console.log("Exception: " + err);
  }
}

/* sample code in quiz
// location-circle.js
const isCoordinateValid = (coord) => {
  // check latitude values are in range
  // check longitude values are in range
  return true;
}
const isDeviceValid = (dev) => {
  // check if dev.coordinate
   // check dev.coordinate with isCoordinateValid
  return true;
}
const isLocationValid = (loc) => {
  // check if loc.coordinates array exists
  // check if loc.coordinates array length is correct for shape
  // check each coordinate with isCoordinateValid
  return true;
}
const isInsideCircle = (device, location) => {
  // check args
  const isDeviceValid = isDeviceValid(device);
  const isLocationValid = isLocationValid(location);
  if (!isDeviceValid) {
    throw new Error('Invalid device');
  }
  if (!isLocationValid) {
    throw new Error('Invalid location');
  }
  return true;
};
*/
