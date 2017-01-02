const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Recipes', function(){

  before(function(){
    return runServer();
  });

after(function(){
  return closeServer();
});

it('should list recipes GET', function(){
  return chai.request(app).get('./recipes')
});

});
