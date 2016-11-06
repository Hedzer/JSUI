import cleanName from 'Framework/Utilities/Functions/cleanName';
var _underscore = "_";

function doesCleanNameSkipAnyDirtyCharacters() {
    var totalUnicodeCharacterCount = 65580; // after this, unicode characters start repeating
    var alphaCharacterStart = 65;
    var alphaCharacterEnd = 122;
    var numericCharacterStart = 48;
    var numericCharacterEnd = 57;
    var underscoreCharacter = 95;
    var hyphenCharacter = 45;

    for (var i = 1; i <= totalUnicodeCharacterCount; i++) {
        var isDirtyCharacter = i != underscoreCharacter && i != hyphenCharacter
                            && (i < alphaCharacterStart || i > alphaCharacterEnd)
                            && (i < numericCharacterStart || i > numericCharacterEnd);

        if (isDirtyCharacter && cleanName(String.fromCharCode(i)) != _underscore) {
            return true;
        }
    }
}

export default describe("Framework/Utilities/Functions/cleanName", function () {
    it("should return all clean characters", function () {
        var cleanAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var cleanNumeric = "0123456789";
        var cleanSymbols = "-_-";
        var cleanString = cleanAlpha + cleanNumeric + cleanSymbols;
        expect(cleanName(cleanString)).toBe(cleanString);
    });

    it("should return one underscore in place of multiple dirty characters", function () {
        var dirtyString = "!@#$%^&*()=+[]{(╯°□°)╯︵ ┻━┻};:'/?>🐙 <,.|`~";
        expect(cleanName(dirtyString)).toBe(_underscore);
    });

    it("should convert to underscore for every dirty character", function () {
        expect(doesCleanNameSkipAnyDirtyCharacters()).toBeFalsy();
    });
});
