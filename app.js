// Define the traffic light states
const TrafficLightStates = {
    RED: "red",
    GREEN: "green",
    YELLOW: "yellow"
  };
  
  // Define the traffic light object
  const trafficLight = {
    state: TrafficLightStates.RED,
    changeState: function () {
      switch (this.state) {
        case TrafficLightStates.RED:
          this.state = TrafficLightStates.GREEN;
          console.log("Traffic Light is now GREEN. Go!");
          setTimeout(() => this.changeState(), 5000); // 5 seconds for Green
          break;
        case TrafficLightStates.GREEN:
          this.state = TrafficLightStates.YELLOW;
          console.log("Traffic Light is now YELLOW. Slow down!");
          setTimeout(() => this.changeState(), 2000); // 2 seconds for Yellow
          break;
        case TrafficLightStates.YELLOW:
          this.state = TrafficLightStates.RED;
          console.log("Traffic Light is now RED. Stop!");
          setTimeout(() => this.changeState(), 3000); // 3 seconds for Red
          break;
      }
    }
  };
  
  // Start the traffic light state machine
  trafficLight.changeState();
  