# Component Library
A React Component Library for building components in isolation.
This library will be consumed in the another repo as a dependency via private NPM package hosted via GitHub Packages.

# Stack Information
This library is built to support the following tools:
- React
- Typescript
- CSS Modules
- StoryBook
- Jest React Testing Library
- Provides two basic example components:
  - `SampleButton` which is a simple button that uses one prop named `label` 
  - `TextComponent` which outputs some static content with one prop named `headingText`
- Chromatic (This can optionally be removed by removing the chromatic dependency and any related files)
 

# Prerequisites for setup
- Code editor / IDE setup (Any IDE will work)
- NodeJS installed on your machine (This will be used for the development server for this library)
- NPM (NPM is installed when you install Node.js on your machine)
- Terminal (bash or another terminal you are comfortable with for running commands)
- Git (we will be creating a git repository on our machine and publishing it to Github in the guide but cloning in the instructions in this README)
- React (How to create simple components)
- Typescript (how to create an object interface with simple properties)
- Storybook (Understanding of what it is and its purpose and how it works to some extent)

# NPM and Chromatic Publishing Token Files
- An example version of the `npmrc` file, which will be used for Package access, and `env` file, which will be used for manually publishing to Chromatic, are included in this repo. 
- If you use these two file examples than you should rename them to their appropriate file names which are `.npmrc` and `.env`. Both files should live in your project root.


# Guide to pull Component Library to local to develop components

### Project Setup
- Create new folder for project `mkdir component-library`
- Initialise git `git init`
- Create an `.npmrc` file in the root project directory
	- These credentials will look something like below and will be set up in github as a personal access token
```javascript
registry=https://registry.npmjs.org/
@github-user:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=PUBLISH_AUTH_TOKEN
```

##### Generating a GitHub Token
- Go to your Github profile: Settings -> Developer Settings -> Personal access tokens. Or just click this [Link](https://github.com/settings/tokens)
- Click Generate new token. Give it a name that suits the project you are building. Give it an expiry date (Github recommends you don't create tokens with an infinite lifespan for security reasons, so use 30 days).
- The most important thing is to click the `write:packages` access option. This will give your token permission to read & write packages to your Github account.
- Click create the Token
- **GITHUB WILL ONLY SHOW YOUR TOKEN ONCE SO MAKE SURE YOU STORE IT SOMEWHERE SAFE**
- Use the generated token in place of `PUBLISH_AUTH_TOKEN` in the `.npmrc` file
- NOTE: Ideally you would create a github secret which stores your token and use the github variable in the .npmrc file above (This will be outlined in the guide)

##### Clone library from repo
- Clone The Repository
```Terminal
git clone git@github.com:github-user/component-library-name.git
```
- You can use a `.` at the end of the above command to clone into current folder
```Terminal
git clone git@github.com:github-user/component-library-name.git .
```

##### NPM install to install all dependencies required for project
`npm install`

##### What will be installed with the component library?
- React
- TypeScript
- Storybook 7 (NextJS Support)
- Jest React Testing Library
- CSS Modules (to make use of .module.css files which support variables, and more)
- Chromatic (for component testing, storybook hosting, and more)

### Commands that can be used in the library

##### Storybook Dev Server
- Run command `npm run storybook`
- This will start a local dev server for storybook on `localhost:6006` by default and allow you to view and use the Storybook locally for testing, etc

##### Jest React Testing Library
- Currently we are only using a very small part of the library in the sample components, this can be customised to systematically test components in specific ways. See more at [Jest · 🃏 Delightful JavaScript Testing](https://jestjs.io/)
- Run command `npm run test`
- This will run tests on all components in the library and output success or error results to make sure components are functionally correct.

##### Build Component Cibrary in Preparation of Packaging and Publishing
- Run command `npm run build`
- This will run the compiler and process all components and export them for the NPM package.
- You will need to use `npm publish` to publish the component library when you are finished with the build. 

##### Package Publishing with NPM Publish
- Ensure you have your `.npmrc` file set up
- Run command below with your choice of version (patch|minor|major or see official documentation)
```Terminal
npm version patch|minor|major
```
- Run command below to publish library manually
```Terminal
npm publish
```

##### Storybook Static Build
- Run command `npm run build-storybook`
- This will build a static version of storybook for deploying to pipelines, etc. This will be used by Chromatic for this library.

##### Chromatic Publish Manually
- Run command `npm run chromatic`
- This will trigger a manual publish of your library/storybook to Chromatic.
- You will need to ensure you have a `.env` file set up in your project root.


# Guide to Import and Use The Component Library in A Project

NOTE: Ensure you have the `.npmrc` file created and set up in order to be able to access the library

- Create NextJS/React project (or use an already existing project of your choice)
	  `npx create-next-app PROJECT_NAME`

- Install dependency on the component library through npm
	- Run command `npm install @github-user/component-library-name`
	- Check it is added as a "dependencies" in `package.json` file with the correct version

- Import compiled styles via CSS in main file with following line:
	e.g. Add line below to `src/pages/index.tsx` to import styles at a global level
```javascript
  import '@github-user/component-library-name/dist/esm/index.css'
```
	  
- Import components that you need to use with the following line:
```javascript
 import { SampleButton, TextComponent } from '@github-user/component-library-name'
```
	 
- Use components after importing with the following line:
```javascript
<SampleButton label="OurRepoButtonLabel">Using component library SampleButton in our repo</SampleButton>
<TextComponent headingText="TextComponent Consumed From Component Library!" />
```
