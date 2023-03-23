# Atividade Prática da Semana 3  

Na atividade prática da semana 2, você foi desafiado a criar um site de portfólio pessoal do zero! Na atividade da semana 3, o foco será no CSS. Você está recebendo o código-fonte de um site de portfólio pessoal semiacabado. Sua tarefa será concluí-lo. Para isso, você deverá abrir o arquivo "estilos.css" e completar os seletores CSS nos trechos comentados usando as proprieades adequadas para o que é pedido. Depois disso, altere o conteúdo da página HTML para criar o seu próprio portfólio pessoal. Analise cada uma das seções e substitua as fotos e textos por seus próprios dados. Você também pode trocar cores e fontes de letra para deixar adequado ao seu gosto. 

Para começar, selecione o arquivo "index.html" e clique no botão "Run" no cabeçalho para visualizar a renderização da página no navegador incorporado do Repl.it. Depois disso, selecione o arquivo "estilos.css" e comece a trabalhar nele. Enquanto estiver fazendo as alterações no código CSS, você pode pressionar "Ctrl+S" para aplicá-las à visualização do arquivo "index.html". Faça isso a cada alteração e observe o impacto causado. Isso te ajudará a compreender a utilidade de cada uma das propriedades CSS que estão sendo trabalhadas. Para concluir, não deixe também de assistir ao vídeo de apresentação dessa atividade, pois ele tem dicas valiosas. A figura abaixo mostra a versão concluída do site. Bons estudos!

## Site Pronto

<img src="assets/site.png" alt="Site Pronto" />

<details>
  <summary>Gabarito</summary>

```css
/* 1. trocar a cor de fundo para #eee 
ESSA PROPRIEDADE CSS É DADA NO VÍDEO, PORTANTO, ELA NÃO DEVE SER PONTUADA */
background-color: #eee;

/* 2. remover sublinhado dos links */
text-decoration: none;

/* 3. centralizar no elemento pai */
margin: 0 auto;

/* 4. altura MÍNIMA de 100% da altura da área de visualização */
min-height: 100vh;

/* 5. posicionamento fixo */
position: fixed;

/* 6. altura de 100% da área de visualização */
height: 100vh;

/* 7. largura de 100% do elemento pai */
width: 100%;

/* 8. cantos arredondados de 10 pixels */
border-radius: 10px;

/* 9. mostrar como blocos em linha */
display: inline-block;

/* 10. largura de 20 pixels */
width: 20px;

/* 11. mostrar como blocos em linha */
display: inline-block;

/* 12. largura de 62% da área de visualização */
width: 62vw;

/* 13. posicionamento relativo */
position: relative;

/* 14. afastamento esquerdo de 18% */
left: 18vw;

/* 15. margem superior e inferior de 15px e de 0px nas laterais */
margin: 15px 0;

/* 16. mostrar como blocos em linha */
display: inline-block;

/* 17. flutuação à esquerda */
float: left;

/* 18. alinhamento vertical superior */
vertical-align: top;

/* 19. flutuação à esquerda */
float: left;

/* 20. margens internas superiores e inferiores de 15px e laterais de 30px */
padding: 15px 30px;

/* 21. cor igual à variável "corEscura" */
color: var(--corEscura);

/* 22. largura de 100% do pai */
width: 100%;

/* 23. altura de 3% da área de visualização */
height: 3vw;

/* 24. linha de texto com de 3% de altura da área de visualização */
line-height: 3vw;

/* 25. remoção de espaços entre células da tabela */
border-collapse: collapse;

/* 26. largura de 1/3 do elemento pai */
width: 33.33%;

/* 27. borda cinza clara de 1px */
border: solid 1px #ccc;

/* 28. largura de 1/3 do elemento pai */
width: 33.33%;

/* 30. margem interna de 15px */
padding: 15px;

/* 31. texto centralizado */
text-align: center;
```

</details>