## Schema

O schema é o identificador do app. Dentro do arquivo app.json

```json
{ "scheme": "rndeeplinking" }
```

Para fazer com que o app entenda que esse schema se refere a ele mesmo:
`npx expo prebuild` - Vai ler o arquivo app.json e configurar o scheme

`npx uri-scheme list` - Para verificar o scheme do projeto

```js
const url = createURL("product", {});
// o primeiro parâmetro do createURL é para onde eu quero redirecionar, e no segundo, dentro do objeto eu envio algum parâmetro caso queira

const redirectURL = useURL();
// o useURL me devolve a url que foi usada para entrar dentro do app
```

`npx uri-scheme open url_to_redirect --android` - Comando para abrir diretamente o app, estando aberto ou não. `url_to_redirect = exp://192.168.1.9:19000/--/`

## Conectando o Deep Linking com o React Navigation

```js
const linking = {
  prefixes: ["exp://192.168.1.9:19000/--/rndeeplinking/product"],
  config: {
    screens: {
      home: {
        path: "home",
      },
      product: {
        path: "product",
      },
    },
  },
};

// Passo essa const linking para o NavigationContainer como propriedade
// O rndeeplinking é o scheme do meu app, e o product é a minha página

const linking = {
  ...,
  product: {
    path: "product/:id",
    parse: {
      id: (id: string) => id,
    },
  },
}

// Dessa forma eu posso enviar o id de um produto específico e através dele pegar os dados do produto. Para recuperar o id basta usar o hook useRoute do react navigation
```
