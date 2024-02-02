import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <p className="paragraph">Hello World</p>
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
