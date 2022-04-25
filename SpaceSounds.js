function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
   document.getElementById("data").rows["Time"].innerHTML = "<td>Time Elapsed:</><td>15 seconds</td>";
   document.getElementById("data").rows["Lat"].innerHTML = "<td>Latitude:</><td>22</td>";
   document.getElementById("data").rows["Long"].innerHTML = "<td>Longitude:</><td>3</td>";
   document.getElementById("data").rows["GPS"].innerHTML = "<td>GPS Altitude:</><td>11,000</td>";
   document.getElementById("data").rows["SensorAlt"].innerHTML = "<td>BMP Sensor Altitude:</><td>0</td>";
   document.getElementById("data").rows["SensorPress"].innerHTML = "<td>BMP Sensor Pressure:</><td>12</td>";
   document.getElementById("data").rows["DigiSensorTemp"].innerHTML = "<td>Digital Sensor Temp:</><td>16</td>";
   document.getElementById("data").rows["CSSSensorTemp"].innerHTML = "<td>CSS Sensor Temp:</><td>70</td>";
   document.getElementById("data").rows["CSSSensorCo2"].innerHTML = "<td>CSS Sensor Co2:</><td>14</td>";
   document.getElementById("data").rows["CSSSensorTVOC"].innerHTML = "<td>CSS Sensor TVOC:</><td>50</td>";
   document.getElementById("data").rows["UV"].innerHTML = "<td>UV:</><td>92</td>";
   document.getElementById("data").rows["Speed"].innerHTML = "<td>Speed:</><td>17,50 mph</td>";
}
//Clicking start will allow the first set of results to show

function stop() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("data").rows["Time"].innerHTML = "<td>Time Elapsed:</><td>30 seconds</td>";
    document.getElementById("data").rows["Lat"].innerHTML = "<td>Latitude:</><td>30</td>";
    document.getElementById("data").rows["Long"].innerHTML = "<td>Longitude:</><td>5</td>";
    document.getElementById("data").rows["GPS"].innerHTML = "<td>GPS Altitude:</><td>15,000</td>";
    document.getElementById("data").rows["SensorAlt"].innerHTML = "<td>BMP Sensor Altitude:</><td>989</td>";
    document.getElementById("data").rows["SensorPress"].innerHTML = "<td>BMP Sensor Pressure:</><td>10</td>";
    document.getElementById("data").rows["DigiSensorTemp"].innerHTML = "<td>Digital Sensor Temp:</><td>16</td>";
    document.getElementById("data").rows["CSSSensorTemp"].innerHTML = "<td>CSS Sensor Temp:</><td>70</td>";
    document.getElementById("data").rows["CSSSensorCo2"].innerHTML = "<td>CSS Sensor eCO2:</><td>22</td>";
    document.getElementById("data").rows["CSSSensorTVOC"].innerHTML = "<td>CSS Sensor TVOC:</><td>25</td>";
    document.getElementById("data").rows["UV"].innerHTML = "<td>UV:</><td>92</td>";
    document.getElementById("data").rows["Speed"].innerHTML = "<td>Speed:</><td>2,305 mph</td>";
}
//Clicking stop will allow the final results to show

function playSpaceSounds() {
    mySound = new sound("Apollo11_OneSmallStep.mp3");
    mySound.play();
}

function playRetrowave() {
    mySound = new sound("electronic-senses-destiny.mp3");
    mySound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
   
    this.play = function() {
        this.sound.play();
    }
   
}