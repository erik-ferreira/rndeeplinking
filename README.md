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

`npx uri-scheme open url_to_redirect --android` - Comando para abrir diretamente o app, estando aberto ou não
