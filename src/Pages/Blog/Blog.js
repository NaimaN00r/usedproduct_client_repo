import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border-2 border-black bg-red-50 p-3 m-5'>
                <h1 className='text-center text-xl'>1.What are the different ways to manage a state in a React application?

                </h1>
                <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                    There are four main types of state you need to properly manage in your React apps:

                    Local state
                    Global state
                    Server state
                    URL state

                    Local state is most often managed in React using the useState hook.
                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                    Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>

            </div>
            <div className='border-2 border-black bg-red-50 p-3 m-5'>
                <h1 className='text-center text-xl'>2.How does prototypical inheritance work?</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    The most important difference between class- and prototype-based inheritance is that a class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance.
                    For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written

                </p>

            </div>
            <div className='border-2 border-black bg-red-50 p-3 m-5'>
                <h1 className='text-center text-xl'>3.What is a unit test? Why should we write unit tests?</h1>
                <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                </p>

            </div>
            <div className='border-2 border-black bg-red-50 p-3 m-5'>
                <h1 className='text-center text-xl'>4.React vs. Angular vs. Vue?</h1>
                <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                    One of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also uses the virtual DOM, but compared to React, Vue has better performance and stability. According to this data, Vue and React's performance difference is subtle since it is only a few milliseconds.
                    Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.J
                </p>

            </div>

        </div>

    );
};

export default Blog;