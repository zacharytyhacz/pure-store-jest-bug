module.exports = {
  roots: ["."],

  transform: {
    //"^.+\\.tsx?$": "ts-jest"
    "^.+\\.(j|t)sx?$": "ts-jest"
  },

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};

