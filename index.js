class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[.!*+@#?^${}()|[\]\\]/g, '');
  }

  static titleize(string) {
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = string.toLowerCase().split(' ');
    let titleizedArr = arr.map(function(word) {
      if (!excludedWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
        return word;
    });
    let titleizedStr = titleizedArr.join(' ');
    return titleizedStr.charAt(0).toUpperCase() + titleizedStr.slice(1);
  }
}