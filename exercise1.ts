// Exercise 1
// Question 1

enum TrafficLight {
    Red,
    Yellow,
    Green
}

// Question 2
class Robot {
    currentLight: TrafficLight;

    constructor() {
        this.currentLight = TrafficLight.Red;
        this.changeLight();
    }

    changeLight() {
        setInterval(() => {
            switch (this.currentLight) {
                case TrafficLight.Red:
                    this.currentLight = TrafficLight.Yellow;
                    break;
                case TrafficLight.Yellow:
                    this.currentLight = TrafficLight.Green;
                    break;
                case TrafficLight.Green:
                    this.currentLight = TrafficLight.Red;
                    break;
            }
            console.log(`Traffic light color ${TrafficLight[this.currentLight]}`);
        }, 10000);
    }
}

const robot = new Robot();
