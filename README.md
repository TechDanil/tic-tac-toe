# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Задание 3
- сверстать поле для игры, ссылка (https://www.figma.com/file/YA2RnlSNBin2fVK18cBpaP/%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(Copy)?node-id=2-824&t=yi9iDZoMOX2QvqpF-0), обязательные элементы: таймер, поле, шапка с навигацией, какой игрок ходит и текущие игроки, чат
- игровое поле должно быть играбильным
  — открыв его я нажимаю начать и могу сам с собой поиграть
  — в итоге игры должно быть выведено сообщение о победители и предложить сыграть еще раз
  — также должен запускаться таймер и сбрасываться при новой игре
  — отображение кто сейчас ходит
- чат
  — отображается сообщения которые написали
  — можно написать сообщение и выбрать от кого его отправить, т.е. поле с вводом имени (на дизайнах такого нет, по этому верстка на ваше усмотрение)
- сверстать авторизацию, ссылка
  (https://www.figma.com/file/YA2RnlSNBin2fVK18cBpaP/%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(Copy)?node-id=2-8&t=yi9iDZoMOX2QvqpF-0)— заложить какой нибудь логин и пароль чтобы могли воспроизвести ситуации когда ввели не верный логин и пароль, чтобы увидеть текст об ошибке
- сверстать историю игр, ссылка
  (https://www.figma.com/file/YA2RnlSNBin2fVK18cBpaP/%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(Copy)?node-id=21-1516&t=yi9iDZoMOX2QvqpF-0)— все сыгранные игры должны отображаться в списке в полном формате как на дизайнах
