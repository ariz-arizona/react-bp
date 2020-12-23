## Структура

Структура приложения с генерацией ssr взята из https://vc.ru/dev/160177-sozdanie-i-nastroyka-proekta-react-webpack-s-nulya-do-ssr

## Внешний вид

Используется [MATERIAL UI](https://material-ui.com/)

## Особенности запуска

Для запуска на heroku надо дополнительно настроить buildpacks

```
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-chromedriver
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-google-chrome
```

Команда для запуска прописана в Procfile. (Плюс команда `heroku-prebuild` в `package.json`)

## TODO

* сохранение скриншотов на диск и последующее их удаление
* нормальный лоадер во время загрузки теста
* добавить еще тестов