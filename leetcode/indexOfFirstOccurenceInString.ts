/* Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

// Solution - This was actually my first thought based on simple and elegant solutions often found in my regular day job
// the short answer for why this works is a little bit of Typescript magic, if needle exists within haystack at any point the indexOf method will give us the index that it begins its occurence - operating as a minor search algorrithm - otherwise it will find no index matching needle and return -1.

function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

/*
After overthinking a bit my next intuition was to use two pointer and much more verbose solution for this, I would loop through haystack, then check for equal initial values. Like is the haystack[index] equal to needle[index] character?
If this is true, we know to loop through needle until its end, once the needle increments to the end  successfully we have found the needle in the haystack.
we could also do this with two different for loops either independant or nested inside each other - I could see arguments for all the solutions.

this would have looked something like:

function strStr(haystack: string, needle: string): number {

let j: number = 0;
let temp: number = 0;

These 'let's here are our 'pointers'

below is a while loop method inside a standard for loop

    for(let i = 0; i < haystack.length; i++)
    {
        index = i;
        j = 0;
        while(needle[j] == haystack[i])
        {
            j++;
            i++;
            if(j == needle.length)
            {
                return index;
            }
        }

        i = index;
    }
    return -1;
}

*/
