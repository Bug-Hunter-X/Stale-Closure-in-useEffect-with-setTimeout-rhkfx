# Stale Closure in React's useEffect Hook

This repository demonstrates a common error in React applications involving stale closures within the `useEffect` hook when combined with `setTimeout` or other asynchronous operations.

## The Problem

The `useEffect` hook's dependency array is crucial for ensuring that effects run only when specified dependencies change.  However, when dealing with asynchronous operations like `setTimeout`, the callback function might 'close over' outdated values of variables if not handled carefully.

In the provided `bug.js` file, the `setTimeout` callback refers to the `count` variable. If `count` updates *before* the `setTimeout` callback executes, the callback will use the old value of `count`, leading to unexpected behavior.

## The Solution

The `bugSolution.js` file shows the corrected approach.  Using a ref to store the latest value of `count` ensures that the `setTimeout` callback always accesses the most up-to-date value.