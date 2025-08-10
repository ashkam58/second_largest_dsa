/*
  Beginner DSA Interview Drill Sheet – JavaScript Boilerplate with Tests
  ---------------------------------------------------------------------
  How to use:
  1) Implement each function (remove the `throw` and write code).
  2) Run in Node: `node dsa_drills.js`
  3) All tests should turn green ✅

  Tip: Work function-by-function. When stuck, `console.log` inside tests.
*/

// ----------------------------- Utils ---------------------------------
function isObject(x){ return x !== null && typeof x === 'object'; }
function deepEqual(a, b){
  if (a === b) return true;
  if (Number.isNaN(a) && Number.isNaN(b)) return true;
  if (Array.isArray(a) && Array.isArray(b)){
    if (a.length !== b.length) return false;
    for (let i=0;i<a.length;i++) if (!deepEqual(a[i], b[i])) return false;
    return true;
  }
  if (isObject(a) && isObject(b)){
    const ka = Object.keys(a), kb = Object.keys(b);
    if (ka.length !== kb.length) return false;
    for (const k of ka){ if (!kb.includes(k) || !deepEqual(a[k], b[k])) return false; }
    return true;
  }
  return false;
}

function assertDeepEqual(actual, expected, msg=""){
  if (!deepEqual(actual, expected)){
    console.error("❌ FAIL:", msg);
    console.error("   expected:", expected);
    console.error("   actual:  ", actual);
    throw new Error(msg || "Assertion failed");
  }
}

let __tests__ = [];
function test(name, fn){ __tests__.push({name, fn}); }

async function run(){
  let pass=0, fail=0;
  for (const t of __tests__){
    try { await t.fn(); console.log("✅", t.name); pass++; }
    catch(e){ console.log("❌", t.name, "-", e.message); fail++; }
  }
  console.log("\n— Summary —");
  console.log(`Passed: ${pass}`);
  console.log(`Failed: ${fail}`);
  if (fail===0) console.log("🎉 All green!");
}

// --------------------------- Function Stubs ---------------------------
// 1) Reverse an array in-place
function reverseInPlace(arr){
  // TODO: implement two-pointer swap
  let i = 0, j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

// 2) Min & Max in array
function minMax(arr){
  // TODO: return {min, max} or null on empty
  throw new Error("not implemented");
}

// 3) Palindrome string (ignore non-alnum, case-insensitive)
function isPalindrome(s){
  // TODO
  throw new Error("not implemented");
}

// 4) Sum of digits (handle negative by absolute)
function sumDigits(n){
  // TODO
  throw new Error("not implemented");
}

// 5) Linear search (return index or -1)
function linearSearch(arr, target){
  // TODO
  throw new Error("not implemented");
}

// 6) Second largest distinct element
function secondLargest(arr){
  // TODO
  throw new Error("not implemented");
}

// 7) Character frequency map
function charFreq(s){
  // TODO
  throw new Error("not implemented");
}

// 8) Move zeroes to end (stable, in-place)
function moveZeroes(arr){
  // TODO
  throw new Error("not implemented");
}

// 9) Merge two sorted arrays
function mergeSorted(a,b){
  // TODO
  throw new Error("not implemented");
}

// 10) Missing number from 1..n (given n and array of size n-1)
function missingNumberSum(arr, n){
  // TODO
  throw new Error("not implemented");
}
function missingNumberXor(arr, n){
  // TODO
  throw new Error("not implemented");
}

// 11) Fibonacci first n terms (array)
function fib(n){
  // TODO
  throw new Error("not implemented");
}

// 12) Count vowels
function countVowels(s){
  // TODO
  throw new Error("not implemented");
}

// 13) Anagrams (ignore spaces, case)
function areAnagrams(a,b){
  // TODO
  throw new Error("not implemented");
}

// 14) Rotate array right by k (in-place, reverse method)
function rotateRight(arr, k){
  // TODO
  throw new Error("not implemented");
}

// 15) Left triangle pattern (return string with \n)
function leftTriangle(n){
  // TODO
  throw new Error("not implemented");
}

// ----------------------------- Test Cases -----------------------------
// 1) reverseInPlace
(test=>{
  test("reverseInPlace – even length", ()=>{
    const a=[1,2,3,4]; reverseInPlace(a); assertDeepEqual(a,[4,3,2,1]);
  });
  test("reverseInPlace – odd length", ()=>{
    const a=[1,2,3]; reverseInPlace(a); assertDeepEqual(a,[3,2,1]);
  });
})(test);

// 2) minMax
(test=>{
  test("minMax – typical", ()=>{
    assertDeepEqual(minMax([3,7,1,9]), {min:1, max:9});
  });
  test("minMax – single element", ()=>{
    assertDeepEqual(minMax([5]), {min:5, max:5});
  });
  test("minMax – empty", ()=>{
    assertDeepEqual(minMax([]), null);
  });
})(test);

// 3) isPalindrome
(test=>{
  test("isPalindrome – punctuation & case", ()=>{
    const s = "Madam, I'm Adam";
    if(!isPalindrome(s)) throw new Error("should be palindrome");
  });
  test("isPalindrome – false case", ()=>{
    if(isPalindrome("hello")) throw new Error("should be false");
  });
})(test);

// 4) sumDigits
(test=>{
  test("sumDigits – positive", ()=>{
    assertDeepEqual(sumDigits(1234), 10);
  });
  test("sumDigits – negative", ()=>{
    assertDeepEqual(sumDigits(-907), 16);
  });
})(test);

// 5) linearSearch
(test=>{
  test("linearSearch – found", ()=>{
    assertDeepEqual(linearSearch([10,20,30],20), 1);
  });
  test("linearSearch – not found", ()=>{
    assertDeepEqual(linearSearch([1,2,3],4), -1);
  });
})(test);

// 6) secondLargest
(test=>{
  test("secondLargest – typical", ()=>{
    assertDeepEqual(secondLargest([12,35,1,10,34,1]), 34);
  });
  test("secondLargest – all equal", ()=>{
    assertDeepEqual(secondLargest([5,5,5]), null);
  });
})(test);

// 7) charFreq
(test=>{
  test("charFreq – banana", ()=>{
    assertDeepEqual(charFreq("banana"), {b:1,a:3,n:2});
  });
  test("charFreq – empty", ()=>{
    assertDeepEqual(charFreq(""), {});
  });
})(test);

// 8) moveZeroes
(test=>{
  test("moveZeroes – stable", ()=>{
    const a=[0,1,0,3,12]; moveZeroes(a); assertDeepEqual(a,[1,3,12,0,0]);
  });
  test("moveZeroes – none", ()=>{
    const a=[1,2,3]; moveZeroes(a); assertDeepEqual(a,[1,2,3]);
  });
})(test);

// 9) mergeSorted
(test=>{
  test("mergeSorted – interleave", ()=>{
    assertDeepEqual(mergeSorted([1,3,5],[2,4,6]), [1,2,3,4,5,6]);
  });
  test("mergeSorted – uneven", ()=>{
    assertDeepEqual(mergeSorted([1,2],[3,4,5,6]), [1,2,3,4,5,6]);
  });
})(test);

// 10) missingNumber (sum & xor)
(test=>{
  test("missingNumberSum – n=5", ()=>{
    assertDeepEqual(missingNumberSum([1,2,4,5],5), 3);
  });
  test("missingNumberXor – n=7", ()=>{
    assertDeepEqual(missingNumberXor([1,2,3,5,6,7],7), 4);
  });
})(test);

// 11) fib
(test=>{
  test("fib – n=1", ()=>{ assertDeepEqual(fib(1), [0]); });
  test("fib – n=7", ()=>{ assertDeepEqual(fib(7), [0,1,1,2,3,5,8]); });
  test("fib – n=0", ()=>{ assertDeepEqual(fib(0), []); });
})(test);

// 12) countVowels
(test=>{
  test("countVowels – education", ()=>{
    assertDeepEqual(countVowels("education"), 5);
  });
  test("countVowels – none", ()=>{
    assertDeepEqual(countVowels("rhythms"), 0);
  });
})(test);

// 13) areAnagrams
(test=>{
  test("areAnagrams – listen/silent", ()=>{
    if(!areAnagrams("listen","silent")) throw new Error("should be true");
  });
  test("areAnagrams – case & space", ()=>{
    if(!areAnagrams("Dormitory","Dirty room")) throw new Error("should be true");
  });
  test("areAnagrams – false", ()=>{
    if(areAnagrams("abc","abd")) throw new Error("should be false");
  });
})(test);

// 14) rotateRight
(test=>{
  test("rotateRight – k=2", ()=>{
    const a=[1,2,3,4,5]; rotateRight(a,2); assertDeepEqual(a,[4,5,1,2,3]);
  });
  test("rotateRight – k>n", ()=>{
    const a=[1,2]; rotateRight(a,5); assertDeepEqual(a,[2,1]);
  });
})(test);

// 15) leftTriangle
(test=>{
  test("leftTriangle – n=4", ()=>{
    const out = leftTriangle(4);
    assertDeepEqual(out, '*\n**\n***\n****');
  });
})(test);

// ------------------------------ Execute -------------------------------
if (require.main === module){
  run().catch(err=>{ console.error(err); process.exit(1); });
}

// Exporting for optional external runners
module.exports = {
  reverseInPlace, minMax, isPalindrome, sumDigits, linearSearch, secondLargest,
  charFreq, moveZeroes, mergeSorted, missingNumberSum, missingNumberXor,
  fib, countVowels, areAnagrams, rotateRight, leftTriangle,
  deepEqual, assertDeepEqual
};
