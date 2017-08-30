var assert = require("assert");
var Dinosaur= require("../dinosaur.js");

describe("Dinosaur", function() {

  var dinosaur1;
  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus", 2, 2);
  })

  it("has a type", function(){

    assert.strictEqual(dinosaur1.type, "Tyrannosaurus");
  })


  it("has a start number", function(){
    assert.strictEqual(dinosaur1.totalNumber, 2)
  })


  it("has offspring each year", function() {
    dinosaur1.hasOffspring();
    assert.strictEqual(dinosaur1.totalNumber, 4);

  })





})
