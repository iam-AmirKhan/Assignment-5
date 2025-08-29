 Question 1: Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById


শুধু একটা element খুঁজে বের করে যেটার unique id আছে।

সরাসরি সেই element return করে (null return করবে যদি না থাকে)।

সবচেয়ে fast কাজ করে কারণ id সবসময় unique হয়।

getElementsByClassName

একই class থাকা একাধিক element একসাথে return করে।

এটি একটি HTMLCollection return করে (array-এর মতো, কিন্তু পুরোপুরি array না)।

Live থাকে → DOM-এ কিছু add/remove করলে সাথে সাথে update হয়।

আলাদা element নিতে হলে index ব্যবহার করতে হয় (যেমন: [0], [1])।

querySelector

এখানে CSS selector ব্যবহার করা যায় (যেমন: .class, #id, div > p)।

শুধুমাত্র প্রথম মিলে যাওয়া element return করে।

querySelectorAll

CSS selector দিয়ে সব matching element return করে।

ফলাফল আসে NodeList আকারে (যেটা loop করা যায়)।

এটি live না → DOM পরিবর্তন হলেও নিজে থেকে update হয় না।




 Question 2: How do you create and insert a new element into the DOM?

Element তৈরি করা → document.createElement("div")

Content যোগ করা → .innerText বা .innerHTML ব্যবহার করে টেক্সট/HTML দেওয়া যায়।

Attribute/Style যোগ করা → .id, .className, .style দিয়ে দেওয়া যায়।

Parent নির্বাচন করা → যেমন document.getElementById("parentId") দিয়ে parent element বের করা।

DOM-এ ঢোকানো → appendChild() বা append() দিয়ে parent-এর মধ্যে নতুন element বসানো হয়।




 Question 3: What is Event Bubbling and how does it work?

Event Bubbling হলো JavaScript-এর একটা mechanism যেখানে event প্রথমে target element-এ ঘটে এবং তারপর ধাপে ধাপে parent → grandparent → document পর্যন্ত propagate হয়।

Example workflow:

তুমি button-এর ভেতরে click করলে → event প্রথমে button-এ trigger হবে।

তারপর সেই event parent element-এ যাবে।

এরপর parent-এর parent-এ যাবে।

এইভাবে DOM-এর root পর্যন্ত উঠতে থাকে।




Question 4: What is Event Delegation in JavaScript? Why is it useful?

Event Delegation হলো একটা technique যেখানে প্রত্যেক child element-এ আলাদা event listener না বসিয়ে parent element-এ একটাই listener বসানো হয়। তারপর event bubbling-এর সাহায্যে বোঝা যায় কোন child element-এ event ঘটেছে।

Why useful?

কোড ছোট ও সহজ হয়।

Performance ভালো থাকে (একটা listener, অনেক child handle করতে পারে)।

Dynamically নতুন element যোগ হলে সেগুলোর উপরেও event কাজ করবে।





 Question 5: Difference between preventDefault() and stopPropagation()

preventDefault()

Element-এর default behavior বন্ধ করে দেয়।

উদাহরণ: Form submit করলে page reload হয় → preventDefault() দিলে আর reload হবে না।

stopPropagation()

Event-এর propagation বন্ধ করে দেয়।

মানে, event টা আর parent element-এর দিকে bubble/capture হবে না।