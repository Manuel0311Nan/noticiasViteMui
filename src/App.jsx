import { Container, Typography, Grid } from "@mui/material";
import Formulario from "./components/Formulario";
import { NoticiasProvider } from "./context/NoticiasProvider";
//* SX={{}} => Es un objeto que permite inccluir diferentes estilos dentro de un componente
const App = () => {
  return (
    <NoticiasProvider>
    <Container>
      <header>
        <Typography variant="h2" align="center" sx={{ marginY: 5 }}>
          Buscador de noticias
        </Typography>
      </header>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6} >
          <Formulario />
        </Grid>
      </Grid>
      </Container>
      </NoticiasProvider>
  );
};

export default App;
