import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Hero section */}
      <section className="relative w-full h-96 mb-8">
        {/* Camada escura por cima da imagem */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Imagem de fundo */}
        <img
          src="./assets/3352058.jpg"
          alt="Background Hero"
          className="w-full h-full object-cover relative z-0"
        />

        {/* Conteúdo da hero */}
        <div className="relative z-20 flex items-center justify-center h-full text-white text-4xl font-bold text-center px-4">
          Portfólio de Kelly Alves Robson
        </div>
      </section>

      {/* Conteúdo principal */}
      <main id="root" className="max-w-[1280px] mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-6">
          Bem-vindo(a) ao meu projeto!
        </h1>

        {/* Exemplo de logo */}
        <img
          src="./logo.svg"
          alt="Logo"
          className="logo mx-auto mb-6 cursor-pointer"
        />

        {/* Card de Apresentação */}
        <div className="rounded-lg p-6 shadow-md max-w-lg mx-auto bg-white text-black dark:bg-[#09090B] dark:text-white">
          <h2 className="text-2xl font-bold mb-2">Sobre Mim</h2>
          <p className="mb-4">
            Olá! Me chamo Kelly Alves Robson, sou desenvolvedora full stack com foco em React, JavaScript, Python e segurança da informação.
            Apaixonada por criar interfaces modernas e funcionais, estou sempre em busca de novos desafios e aprendizados.
          </p>
          <a
            href="mailto:kellyalvesrobson15@gmail.com"
            className="inline-block mt-2 bg-primary text-primary-foreground dark:bg-white dark:text-black font-medium px-4 py-2 rounded hover:opacity-90 transition"
          >
            Fale comigo
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
