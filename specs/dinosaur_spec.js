var assert = require("assert");
var Dinosaur= require("../dinosaur.js");

describe("Dinosaur", function() {

  var dinosaur1;
  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus");
  })

  it("has a type", function(){

    assert.strictEqual(dinosaur1.type, "Tyrannosaurus");
  })
  
  it("has offspring each year", function() {

    assert.strictEqual(,);
    
  })





})
