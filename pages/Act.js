import Header from "../components/Header";
import Layout from "../components/MyLayout";

const Act = ({ name }) => (
  <div>
    <Header backgroundColor="blueToPurple" />
    <h1>{name}</h1>
    <p>Welcome to our product page for {name}!</p>
  </div>
);

Act.getInitialProps = async ({ query }) => {
  return { name: query.name };
};

export default Act;
