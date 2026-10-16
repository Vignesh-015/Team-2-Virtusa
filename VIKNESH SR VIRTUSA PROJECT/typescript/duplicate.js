"use strict";
const text = "programming";
const withoutDuplicates = [...new Set(text)].join("");
console.log(withoutDuplicates);
