// import code from javascript file(helloworld.js) so we can test it
const helloWorld = require('./helloWorld');


// describe() is the body of the test
describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
