 1. Answer:
 Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById(id)

Returns one single element with the given id.

Always returns a single object (or null if not found).

getElementsByClassName(className)

Returns a live HTMLCollection of all elements with that class.

You must loop through it to access individual elements.

querySelector(selector)

Returns the first element that matches the CSS selector.

More flexible because you can use any valid CSS selector (#id, .class, div > p, etc.).

querySelectorAll(selector)

Returns a static NodeList of all elements matching the CSS selector.

Unlike HTMLCollection, it does not update automatically if the DOM changes.

2. Answer:
 How to create and insert a new element into the DOM

Steps:

Create an element → let newDiv = document.createElement("div");

Add content → newDiv.textContent = "Hello World";

Insert into DOM →

document.body.appendChild(newDiv); (adds at end of body)

parentElement.insertBefore(newDiv, referenceElement); (insert before specific element)

3. Answer:
 What is Event Bubbling and how does it work?

Event Bubbling = when an event on a child element propagates upward to its parent, grandparent, and so on.

Example:
If you click a <button> inside a <div>, the event first fires on the button, then bubbles up to the div, then to the body, etc.

Default behavior in JavaScript event system.

4.Answer:
 What is Event Delegation in JavaScript? Why is it useful?

Event Delegation = Instead of attaching event listeners to many child elements, you attach one listener to a parent, and use event bubbling to handle child events.

Example:

document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        console.log("LI clicked:", e.target.textContent);
    }
});


Why useful?

Improves performance (fewer listeners).

Handles dynamically added elements automatically.

5. Answer:

Difference between preventDefault() and stopPropagation()

preventDefault()

Prevents the default action of an element.

Example: Prevent form submission →

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stops page refresh
});


stopPropagation()

Stops the event from bubbling up to parent elements.

Example:

button.addEventListener("click", function(e) {
    e.stopPropagation(); // parent div won’t receive the event
});