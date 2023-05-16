const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");


// Defines the traffic light states
const TrafficLightStates = {
    RED: "red",
    GREEN: "green",
    YELLOW: "yellow"
  };
  
  // Defines the traffic light object
  const trafficLight = {
    state: TrafficLightStates.RED,
    changeState: function () {
      switch (this.state) {
        case TrafficLightStates.RED:
          this.state = TrafficLightStates.GREEN;
          redLight.classList.remove("active");
          greenLight.classList.add("active");
          setTimeout(() => this.changeState(), 5000); // 5 seconds for Green
          break;
        case TrafficLightStates.GREEN:
          this.state = TrafficLightStates.YELLOW;
          greenLight.classList.remove("active");
          yellowLight.classList.add("active");
          setTimeout(() => this.changeState(), 2000); // 2 seconds for Yellow
          break;
        case TrafficLightStates.YELLOW:
          this.state = TrafficLightStates.RED;
          yellowLight.classList.remove("active");
          redLight.classList.add("active");
          setTimeout(() => this.changeState(), 3000); // 3 seconds for Red
          break;
      }
    }
  };
  
  // Start the traffic light state machine
  trafficLight.changeState();
  