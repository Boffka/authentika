var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('user unit tests:', () => {
    it('Should create a user instance', (done: Function) => {
        api.post('/users').send({
            firstName: 'test',
            LastName: 'test',
            tel: 'test'
        }).expect(200, done);
    });
});
