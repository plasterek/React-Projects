import headerImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={headerImage} alt="Gold coins pile with green money bag with gold dollar sign" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
