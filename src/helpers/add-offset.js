export function addOffset(map) {
  // console.log('offset')
  const offsetY = map.getSize().y * 0.30;
  // move point
  map.panBy([0, -offsetY], {animate: false});
}