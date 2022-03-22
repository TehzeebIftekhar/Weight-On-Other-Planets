function mercuryWeight() {
  return (getNumber("text_input1") * 0.3);
}
function venusWeight() {
  return (getNumber("text_input1") * 0.9);
}
function marsWeight() {
  return (getNumber("text_input1") * 0.3);
}
function jupiterWeight() {
  return (getNumber("text_input1") * 2.4);
}
function saturnWeight() {
  return (getNumber("text_input1") * 0.9);
}
function uranusWeight() {
  return (getNumber("text_input1") * 0.8);
}
function neptuneWeight() {
  return (getNumber("text_input1") * 1.1);
}
onEvent("text_input1", "input", function( ) {
  setText("labelMercury", Math.round(mercuryWeight()));
  setText("labelVenus", Math.round(venusWeight()));
  setText("labelMars", Math.round(marsWeight()));
  setText("labelJupiter", Math.round(jupiterWeight()));
  setText("labelSaturn",Math.round(saturnWeight()));
  setText("labelUranus",Math.round(uranusWeight()));
  setText("labelNeptune",Math.round(neptuneWeight()));
});
