var test = require('tape');
var fishbash = require('./fishbash.js');
var customSort = require('./sort.js');
var reverse = require('./reverse.js');

test('Testing fishbash return value', function (t) {
  var actual = fishbash([1, 2, 3]);
  var expected = [1, 2, 'fish'];
  for (let i in expected) {
    t.equal(actual[i], expected[i], 'Should return correct array');
  }
  t.end();
});

test('Testing sort return value', function (t) {
  var actual = customSort([5, 15, 7, 8]);
  var expected = [5, 7, 8, 15];
  for (let i in expected) {
    t.equal(actual[i], expected[i], 'Should return sorted array');
  }
  t.end();
});

test('Testing sort return value', function (t) {
  var actual = reverse('madam');
  var expected = true;
  t.equal(actual, expected, 'Madam should return true');
  t.end();
});
