import AvatarElem from "./components/Avatar";
import FormElem from "./components/Form";

function App() {
  
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold mb-8 mt-10">Welcome</h1>
      <AvatarElem/>
      <FormElem/>
      <div className="mt-[3rem]">
        <p># Forgot <a className="text-green-500" href="#u">username | password</a></p>
      </div>
    </div>
  );
}

export default App;
