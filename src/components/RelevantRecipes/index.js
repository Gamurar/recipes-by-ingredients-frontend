import { Box, Container } from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function RelevantRecipes({ selectedIngredients }) {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    const ingredientsQuery = selectedIngredients
      .map((ingredient) => ingredient.label)
      .toString();
    const response = await fetch(
      "http://localhost:3000/recipes?ingredients=" + ingredientsQuery,
    );
    const items = await response.json();
    setRecipes(items);
  };

  useEffect(() => {
    fetchRecipes();
  }, [selectedIngredients]);

  return (
    <Box>
      {recipes.map((recipe) => (
        <div>{recipe.name}</div>
      ))}
    </Box>
  );
}

const CenteredContainer = styled(Container)`
  margin-top: 50px;
`;
