## Schema

O schema é o identificador do app. Dentro do arquivo app.json

```json
{
  "scheme": "deeplinking"
}
```

Para fazer com que o app entenda que esse schema se refere a ele mesmo:
`npx expo prebuild` - Vai ler o arquivo app.json e entender que tem um scheme
