import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import IngredientsSelector from "./components/IngredientsSelector";
import styled from "styled-components";

export default function App() {
  const [options, setOptions] = useState([]);

  async function fetchIngridients() {
    const response = await fetch("http://localhost:3000/ingredients");
    const items = await response.json();
    const listOptions = items.map((item) => ({
      label: item,
      id: item.toLowerCase().replaceAll(" ", "-"),
    }));
    setOptions(listOptions);
  }

  useEffect(() => {
    fetchIngridients();
  }, []);

  return (
    <CenteredContainer maxWidth="md">
      <IngredientsSelector options={options} />
    </CenteredContainer>
  );
}

const CenteredContainer = styled(Container)`
  margin-top: 50px;
`;
