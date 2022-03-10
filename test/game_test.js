describe('Guessing Game', function() {
    it('Should display you are too low', function() {
        var display = Game()
        display.guess(5)
        assert.equal(display.Game(5), 'You are to low');
    });

    it('Should display a you are to high', function() {
        var display = Game()
        display.guess(100)
        assert.equal(display.Game(100), 'Your guess is too high');

    });
    it('Should display a you are correct', function() {
        var display = Game()
        display.guess(100)
        assert.equal(display.Game(100), 'Correct, the secret number is');

    });
});