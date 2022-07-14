'use stricts'

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)
const PORT = process.env.PORT || 3001;
const url = `http://localhost:${PORT}`;
const testcase = require('../mocks/calculator.json');
const mock = {
  participants: testcase
};
describe('Calculadora ', () => {
    it('calcular costo individual', (done) => {
      
      chai.request(url)
        .post('/api/calculator')
        .send(mock)
        .end((err, res) =>{
          console.log(res.body)
          expect(res).to.have.status(200)
          
          done();
        });
    });
  })