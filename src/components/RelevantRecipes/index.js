import {
  Box,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
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
    <RecipesBox>
      {recipes.map((recipe) => (
        <Card sx={{ maxWidth: 345 }} key={recipe.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </RecipesBox>
  );
}

const CenteredContainer = styled(Container)`
  margin-top: 50px;
`;

const RecipesBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
`;
