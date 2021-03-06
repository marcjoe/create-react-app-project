import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from './footer';

function App() {
const [date, setDate] = useState(null);
useEffect(() => {
async function getDate() {
const res = await fetch("/api/date");
const newDate = await res.text();
setDate(newDate);
}
getDate();
}, []);
return (
<main>
<h1>Create React App + Go API</h1>
<h2>Deployed with 4everland!</h2>
<p>
This project was bootstrapped with{" "}
< a href=" ">
Create React App
</ a>{" "}
and contains three directories, <code>/public</code> for static assets,{" "}
<code>/src</code> for components and content, and <code>/api</code>{" "}
which contains a serverless < a href="https://golang.org/">Go</ a>{" "}
function. See{" "}
< a href="/api/date">
<code>api/date</code> for the Date API with Go
</ a>
.
</p >
<br />
<Footer/>
</main>
);
}

export default App;
