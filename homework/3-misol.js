// Bus
class Bus {
    id;
    route;
    seats;
    reservedSeats;
    constructor(id, route, seats, reservedSeats) {
      this.id = id;
      this.route = route;
      this.seats = seats;
      this.reservedSeats = reservedSeats;
    }
  
    getDetails() {
      return `id: ${this.id} route: ${this.route} seats: ${this.seats} reservedSeats: ${this.reservedSeats}`;
    }
  
    reserveSeat() {
      if (this.reservedSeats < this.seats) {
        this.reservedSeats++;
        console.log(`new bus reserved: ${this.id}}`);
      } else {
        console.log(`No seats  for this id${this.id}`);
      }
    }
  
    cancelReservation() {
      if (this.reservedSeats > 0) {
        this.reservedSeats--;
        console.log(`Reservation canceled: ${this.id}.`);
      }  
    }
  }
  
  class BusSystem {
    constructor() {
      this.buses = [];
    }
  
    addBus(bus) {
      this.buses.push(bus);
      console.log(`${bus.id} added to the system.`);
    }
  
    listBuses() {
      this.buses.forEach((bus) => {
        console.log(bus.getDetails());
      });
    }
  
    searchByRoute(route) {
      const foundBuses = this.buses.filter((bus) => bus.route === route);
      if (foundBuses.length > 0) {
        foundBuses.forEach((bus) => console.log(bus.getDetails()));
      } else {
        console.log(`No buses found for route "${route}".`);
      }
    }
  
    reserveSeat(busId) {
      for (let i = 0; i < this.buses.length; i++) {
        if (this.buses[i].id === busId) {
          this.buses[i].reserveSeat();
          return;
        }
      }
    }
  
    cancelReservation(busId) {
      for (let i = 0; i < this.buses.length; i++) {
        if (this.buses[i].id === busId) {
          this.buses[i].cancelReservation();
          return;
        }
      }
    }
  }
  
  const bus1 = new Bus(1, "Jizzax - Samarqand", 50, 4);
  
  const system = new BusSystem();
  system.addBus(bus1);  
 
  
