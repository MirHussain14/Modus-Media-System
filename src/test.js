function stripHebrewControlChars(s) {
  // removes: LTR/RTL marks & embeddings, POP/overrides, isolates, ZWNJ/ZWJ etc.
  return s.replace(
    /[\u200E\u200F\u202A\u202B\u202C\u202D\u202E\u2066\u2067\u2068\u2069\u200C\u200D]/g,
    ""
  );
}

// Example:
const bad = "מאז שנת 2014 חברת מודוס מתמחה בפרויקטים בתחום התקשורת, מתח נמוך ומולטימדיה. בשנתיים האחרונות הקמנו מחלקת מחשוב עם התמחות בפתרונות תקשורת מתקדמים והכל תחת קורת גג אחת."; // sample with hidden marks
console.log(stripHebrewControlChars(bad));