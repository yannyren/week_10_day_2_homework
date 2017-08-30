var Dinosaur = function(type, offspringNumberEachYear, ) {
  this.type = type;
  this.offspringNumberEachYear = offspringNumberEachYear;
  this.totalNumber = totalNumber;
}


Dinosaur.prototype.hasOffspring = function() {
  this.totalNumber += this.offspringNumberEachYear
}

module.exports = Dinosaur;