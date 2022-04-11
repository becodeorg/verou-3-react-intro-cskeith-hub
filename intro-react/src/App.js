function App() {
  const testJsx = <h1>Hello World</h1>; // jsx
  const testJsx1 = "<h1>Hello World</h1>";// not jsx its a string
  const name = "Colin";
  const title1 = <h1>Hello, {name}</h1>; // will print out title + const name
  const title2 = <h1>Hello, name</h1>;
  const name2 = "peter";
  const morning = false;
  return (
    <>
    {testJsx}
    {testJsx1}
    {title1}
    {title2}
    {title3}
    </>
  );
}

export default App;
