# Props to you

## Story

Your friend is learning React and tried to create a small page where they want to introduce themselves. Unfortunately they couldn't finish so they asked you to fix and finish it and also include both your and your friend's introduction.

## What are you going to learn?

- JSX
- Components and Props
- onClick event

## Tasks

1. Uncomment the Header component in App.js and change the name of the logo.
    - The Header component is uncommented in App.js and gets the logo variable with a new name
    - When the app is running the Header is on the page

2. Import the IntroductionCard component from the components folder and put it after the Header component,  and give it the _name_, _school_, _age_, _hobbyList_ variables and 3 other variables created by you as prop.  Create an IntroductionCard for someone else too under yours.
    - The IntroductionCard component is imported and it shows up under the Header
    - The IntroductionCard component gets the _name_, _school_, _age_ and _hobbyList_ variables
    - The IntroductionCard component gets 3 other variables as props (e.g. hair color, height, etc.)
    - The IntroductionCard component contains a short introduction about the student
    - There is a 2nd IntroductionCard with different variables

3. Create and import a Footer component that has the current date. When the footer is clicked it should disappear for 2 seconds and than reappear.
    - There is a Footer with fixed position at the bottom of the screen
    - The Footer component gets the date and the day as props from App.js
    - The Footer shows the current date and day (e.g. 2020-1-1, Wednesday) in the center
    - When the Footer is clicked, it disappears for 2 seconds and reappears

## General requirements

None

## Hints

- The easiest way to hide a component is to change it's class

## Background materials

- <i class="far fa-exclamation"></i> [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- <i class="far fa-exclamation"></i> [Components and Props](https://reactjs.org/docs/components-and-props.html)
- <i class="far fa-exclamation"></i> [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- <i class="far fa-exclamation"></i> [Handling Events](https://reactjs.org/docs/handling-events.html)
- <i class="far fa-book-open"></i> [How to toggle class in React](https://devdojo.com/krissanawat101/3-ways-for-toggle-a-class-in-react)
