export class NumericUtils {
  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static latinNumber(num) {
    const latins = [
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
      "XIII",
      "XIV",
      "XV",
      "XVI",
      "XVII",
      "XVIII",
      "XIX",
      "XX",
      "XXI",
      "XXII",
      "XXIII",
      "XXIV",
      "XXV",
      "XXVI",
      "XXVII",
      "XXVIII",
      "XXIX",
      "XXX",
      "XXXI",
      "XXXII",
      "XXXIII",
      "XXXIV",
      "XXXV",
      "XXXVI",
      "XXXVII",
      "XXXVIII",
      "XXXIX",
      "XL",
      "XLI",
      "XLII",
      "XLIII",
      "XLIV",
      "XLV",
      "XLVI",
      "XLVII",
      "XLVIII",
      "XLIX",
      "L",
      "LI",
      "LII",
      "LIII",
      "LIV",
      "LV",
      "LVI",
      "LVII",
      "LVIII",
      "LIX",
      "LX",
      "LXI",
      "LXII",
      "LXIII",
      "LXIV",
      "LXV",
      "LXVI",
      "LXVII",
      "LXVIII",
      "LXIX",
      "LXX",
      "LXXI",
      "LXXII",
      "LXXIII",
      "LXXIV",
      "LXXV",
      "LXXVI",
      "LXXVII",
      "LXXVIII",
      "LXXIX",
      "LXXX",
      "LXXXI",
      "LXXXII",
      "LXXXIII",
      "LXXXIV",
      "LXXXV",
      "LXXXVI",
      "LXXXVII",
      "LXXXVIII",
      "LXXXIX",
      "XC",
      "XCI",
      "XCII",
      "XCIII",
      "XCIV",
      "XCV",
      "XCVI",
      "XCVII",
      "XCVIII",
      "XCIX",
      "C"
    ];
    if (num <= 100) {
      return latins[num];
    } else {
      return "number is too large";
    }
  }

  static wordNumber(num) {
    var converter = require("number-to-words");
    return converter.toWords(num);
  }
}
