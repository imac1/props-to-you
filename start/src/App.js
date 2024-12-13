import "./App.css";

import Header from "./components/Header";
import IntroductionCard from "./components/IntroductionCard";

function App() {
	const logoName = "My Logo";

	const name = ["John", "Mills"];
	const school = ["High School Peaks", "High School Dew"];
	const age = ["27", "32"];
	const hobbyList = [
		{ name: "John", hobbies: ["running", "walking"] },
		{ name: "Mills", hobbies: ["stuff", "otherstuff"] },
	];

	return (
		<div className="App">
			<Header logo={logoName} />
      {name.map((personName, index) => {
        console.log(`Rendering: ${personName}`); // Debugging output
        return (
          <IntroductionCard
            key={index}
            name={personName}
            school={school[index]}
            age={age[index]}
            hobbyList={hobbyList[index].hobbies}
          />
        );
      })}
		</div>
	);
}

export default App;
