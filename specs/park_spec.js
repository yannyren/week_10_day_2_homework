var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../Dinosaur.js");

describe("Park", function() {

  var park1;
  var dinosaur1;

  beforeEach(function(){
    park1 = new Park();
    dinosaur1 = new Dinosaur();
  })

  it("enclosure should start empty", function(){
    assert.strictEqual(park1.enclosure.length, 0);
  })

  it("should be able to add dinosaur", function(){
    park1.addDinosaur(dinosaur1);
    assert.strictEqual(park1.enclosure.length, 1);
  })

  it("should be able to remove all dinosaurs of a particular type", function(){
    park1.addDinosaur(dinosaur1);
    park1.removeDinosaurOfAType(dinosaur1);
    assert.strictEqual(park1.,);
  })

  it("should get all the dinosaurs with an offspring count of more than 2", function(){

    assert.strictEqual(,);
  })

  


})
