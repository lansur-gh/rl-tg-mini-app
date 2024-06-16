import Container from "@mui/material/Container";

import { useTelegram } from "./hooks/useTelegram";

import './App.css';
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";


export default function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <Container maxWidth="sm" sx={{height: '100vh'}}>
      <CssBaseline />
      <Header />
      <Footer />
    </Container>
  );
}
