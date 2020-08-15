# Roadmap

## Notes

- Targeted screen sizes for this app are those that web designers typically use, which means anything from medium to extra large screens. Nevertheless, a quick attemps was made to have a responsive design which fits small and extra-small screens, however without satisfaction. It was therefore considered that this app really isn't suitable for small screens such as smartphones.

- The PaletteList (the home screen) Navbar has not been worked for responsive design, so the "Create Palette" button will sometimes, depending on the screen width, not be aligned vertically with the palettes columns below

## New functionalities

- [ ] have sliding (instead of fading) route transitions ([see here for starting with this](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14384860#overview) @6:59)

- [ ] drag-n-drop + saving new positions on every screen where there are color boxes (be careful with style file being wrapped in "props" when using D-n-D lib, see [this commit](https://github.com/boostup/react-colors-app/commit/eec11eb1580535a8adda9aaf0db05f9e1b995f15) for fix)

- [ ] persist HEX/RGBA/RGBA select value across Palette and ShadesPalette screens

- [ ] ColorPickerForm.js -> second validator checks only on hex and not RGB|RGBA colors...must be handled

- [ ] When deleting a color while composing a new palette, have on-exit fade transitions like those on the PaletteList (Home screen)

- [ ] When clicking on "GO BACK" button on the new palette screen, a dialog should ask the user to confirm that all changes will be lost

## Refactoring && Cleaning up

- [ ] App.js could get smaller by :
  - extracting route definitions
  - extracting the data handling with a combination of useContext + useReducer + localStorage ([see this repo where this was achieved](https://github.com/boostup/react-hooks-mui-todo-app/blob/master/src/contexts/todos.context.js))

* [ ] extract @global .fade-exit currently found in PaletteListStyles.jsx to App.css

* [ ] extract "delete confirmation dialog" from PaletteList component into its own component

## Bugs

- [ ] The "Save new palette" dialog is hidden behind tablets touch keyboards How can I get it to scroll into the viewport when keyboard slides up ?

- [ ] Make the COPY hover buttons touch friendly

- [x] Must add a default Route to avoid displaying blank pages when unaccounted parameters are passed in the app's URL, i.e. :

  - http://localhost:3000/react-colors-app/sfsdfsdf/sdfsdfsd
  - or http://localhost:3000/react-colors-app/sfsdfsdf/sdfsdfsd/asdasd

- [x] ~~Is it by design that the JSS of every colorbox being displayed generates a duplicate `<style>` tag in the head html tag ?~~ Yes, it seems to be part of the makeStyles function from material-ui.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
