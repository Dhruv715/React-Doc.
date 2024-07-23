import { useState } from "react";
import './Section2.css';
const content = [
    [
        "React is a JavaScript library for building user interfaces.",
        "It is maintained by Facebook and a community of individual developers and companies.",
        "React can be used as a base in the development of single-page or mobile applications.",
        "The primary goal of React is to be fast, scalable, and simple."
    ],
    [
        "React is a library, whereas Angular is a full-fledged framework.",
        "React uses a virtual DOM, while Angular uses a real DOM.",
        "React is considered more flexible but requires additional libraries for certain functionalities.",
        "Angular comes with a lot of built-in features like dependency injection, routing, etc."
    ],
    [
        "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
        "Angular is developed by Google.",
        "It provides a way to build applications from scratch with a comprehensive set of tools and libraries.",
        "Angular is used for developing dynamic web apps and has a steep learning curve compared to React."
    ],
    [
        "A React component is a reusable piece of code that represents a part of the user interface.",
        "Components can be functional or class-based.",
        "They can maintain their own state and lifecycle methods.",
        "Components make it easy to break down complex UIs into simpler pieces."
    ]
];

function Section2() {
    const [activeContent, setActiveContent] = useState(0);
    return (
        <>
           <div className="section2box">
           <h1 id="section-title">ReactJS Concepts</h1>
            <button className={activeContent === 0 ? 'active' : ''} onClick={() => setActiveContent(0)}>Why Use React?</button>
            <button onClick={() => setActiveContent(1)} className={activeContent === 1 ? 'active' : ''}>React vs Angular</button>
            <button onClick={() => setActiveContent(2)} className={activeContent === 2 ? 'active' : ''}>What is Angular?</button>
            <button onClick={() => setActiveContent(3)} className={activeContent === 3 ? 'active' : ''}>React Components</button>
            <div id="content-list" className='contents'>
                {
                    content[activeContent].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </div>
           </div>
        </>
    );
}

export default Section2;
