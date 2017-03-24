# Daily Log

## March 23, 2017

Read *You Don't Know JS: Up and Going*

Some concepts that were discussed in this title that I've read about before, but still need to focus more on include the following:

- Use & embrace new syntax without waiting for browsers to implement it. The author encourages using transpiling tools like Babel or Traceur (heard of Babel, not of Traceur).

  - Author mentions *polyfills* but cautions against using your own. Mentions ES5-Shim and ES6-Shim which are 'vetted'.

    - > "Not all new features are fully polyfillable.

  - Reasons to use new syntax inlcude: 
    - improved readability
    - leverage performance optimizations and allows browser makers test new syntax
    - testing which leads to feedback to the JavaScript committee (TC39).

- ### Scope & Closures

  - > "Closure is perhaps the single most important concept in all of JS

  - > "One important application of closure is the module pattern

  - > "The module pattern is perhaps the most prevalent code organization pattern in all of JavaScript

- ### this & Object Prototypes

  - > "The this keyword is dynamically bound based on how the function in question is executes, and it turns out there are four simple rules to undersnad and fully determine this binding

  - Behavior delegation over "faking" classes and inheritance

  - > "Delegation is an entierly different, and more powerful, design pattern, one that replaces the need to design with classes and inheritance.

- ### Types & Grammar

  - > "...coercion is an incredibly useful and totally underestimated tool that *you should be using in your code*

- ### Async & Performance

  - > "...the callback alone is hopelessly insufficient for the modern demands of asynchronous programming.
  
  - Two major "deficiencies of callbacks-only coding:
    - *Inversion of Control* (IoC) trust loss
    - lack of linear reasonability

  - ES6 adds *promises* and *generators* that apparently address these two deficiencies.
    
