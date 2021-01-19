const Stack = require("./stack");

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
const starTrek = new Stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");
// console.log(starTrek);

// 2. Useful methods for a stack
function peek(stack) {
  return stack.top;
}
function isEmpty(stack) {
  return stack.top === null ? true : false;
}
function display(stack) {
  if (stack.top === null) {
    return;
  }
  let _node = stack.top;
  while (_node !== null) {
    console.log(_node);
    _node = _node.next;
  }
}
// console.log(peek(starTrek));
// console.log(isEmpty(starTrek));
// display(starTrek);
// starTrek.pop();
// starTrek.pop();
// console.log(starTrek);

// 3. Check for palindromes using a stack
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== stack.top.data) {
      return false;
    }
    stack.pop();
  }
  return true;
}
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// 4. Matching parentheses in an expression
function matchingParentheses(expression) {
  const parentheses = new Stack();
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      parentheses.push({
        data: expression[i],
        index: i,
      });
    } else if (expression[i] === ")") {
      try {
        parentheses.pop();
      } catch (error) {
        return `You have a extra ) Parentheses at ${i + 1} Position`;
      }
    }
  }
  if (parentheses.top !== null) {
    return `You have a extra ( Parentheses at ${
      parentheses.top.data.index + 1
    } Position`;
  }
  return "Matching Parentheses";
}

// console.log(matchingParentheses("(()))"));
// console.log(matchingParentheses("()(()()"));
// console.log(matchingParentheses("(())"));

let stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(1);
stack.push(3);
stack.push(100);

// 5. Sort stack
function sortStack(stack) {
  let tempStack = new Stack();
  let top = stack.top;
  if (!top) {
    return null;
  }
  const temp = () => {
    if (!tempStack.top) {
      tempStack.push(stack.pop());
      return;
    }
    if (top.value > tempStack.top.value) {
      const big = stack.pop();
      const small = tempStack.pop();
      tempStack.push(small);
      tempStack.push(big);
    } else if (top.value < tempStack.top.value) {
      const big = tempStack.pop();
      const small = stack.pop();
      tempStack.push(small);
      tempStack.push(big);
    } else return;
  };
  while (top.next) {
    temp();
    top = top.next;
  }
  temp();
}

// sortStack(stack);
// display(stack);
