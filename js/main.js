function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the cleaned string is a palindrome
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  
  function longestPalindromeString(array) {
    let longestPalindrome = '';
    
    for (const str of array) {
      if (isPalindrome(str) && str.length > longestPalindrome.length) {
        longestPalindrome = str;
      }
    }
    
    return longestPalindrome;
  }
  
  // Example usage
  const array = ["eye", "california", "123321", "Level", "Was it a cat I saw"];
  const result = longestPalindromeString(array);
  console.log(result); // Output: "Was it a cat I saw"
  