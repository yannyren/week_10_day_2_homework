var Park = function(){
  this.enclosure = [];
}


Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}



module.exports = Park;