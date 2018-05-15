const Park = function(name, ticketPrice, dinos){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinos = dinos;
}

Park.prototype.addDino = function (dino) {
  this.dinos.push(dino);
};

Park.prototype.removeDino = function () {
  this.dinos.pop();
};

Park.prototype.findAllBySpecies = function (species) {
  let dinoList = [];
  for(dino of this.dinos){
    if(dino.species.toLowerCase() === species.toLowerCase()){
      dinoList.push(dino);
    }
  }
  return dinoList;
};

Park.prototype.removeAllBySpecies = function (species) {
  for(let i = 0; i < this.dinos.length; i++){
    if(this.dinos[i].species.toLowerCase() === species.toLowerCase()){
      this.dinos.splice(i, 1);
      i--;
    }
  }
};

Park.prototype.findPopularDino = function () {
  let popDino = null;
  for(dino of this.dinos){
    if(!popDino)
      popDino = dino;
    else if(popDino.guestsAttractedPerDay < dino.guestsAttractedPerDay)
      popDino = dino;
  }
  return popDino;
};

Park.prototype.visitsPerDay = function () {
  let totalVisits = 0;
  for(dino of this.dinos){
    totalVisits += dino.guestsAttractedPerDay;
  }
  return totalVisits;
};

Park.prototype.visitsPerYear = function () {
  return this.visitsPerDay() * 365;
};

Park.prototype.ticketRevenuePerYear = function () {
  let totalRevenueDay = 0;
  for(dino of this.dinos){
    totalRevenueDay += (dino.guestsAttractedPerDay + this.ticketPrice);
  }
  return totalRevenueDay * 365;
};

module.exports = Park;
