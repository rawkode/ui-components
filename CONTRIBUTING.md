# Contributing

## Proposing a UI Component

No one likes to do a bunch of work, proudly open a pull request, and then receive a bunch of requests for fundamental changes to how the component works. We want to avoid that. In an effort to make sure that never happens to you, we have a process to for creating a new component. The nitty-gritty of this process might change as we approach our 1.0 milestone, but here are the broad strokes.

In order to reduce wasted work and the need to refactor after the fact, we're going to treat new components.

- Open a new Github issue.
- Propose a component along with its inteface and example of how it would be used.
- Solicit feedback from the members of the guild.
- Apply recommendations.
- Get approval.
- Build the component!

Eventually, we aim to move this into pull requests and engage in [documentation-driven development][ddd], but we don't have the documentation system totally set up yet. So, stay tuned on that.

[ddd]: https://medium.com/blacklane-engineering/documentation-driven-development-8b2ff119104f

### Component Folder Structure

When creating new components, please follow the structure below. This pattern has components organized by folder, with all the related files for that component within the folder (stories, styles, and types).

```
ui-components/
├── src/
│   ├── component-name/
│       └── component-name.stories.tsx
│       └── component-name.module.scss
│       └── component-name.module.scss.d.ts
│       └── index.tsx
```
## Building and Testing

The build and test structure is fairly primitive at the moment. There are various npm scripts that can be run:

- `start`: runs the storybook development server. Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files. The storybook allows you to interact with your component.
- `test`: runs tests with `npm run test`, must have built prior to running.
- `build`: build artifacts will be stored in the `dist/` directory.

1. Make sure your changes do not break ui-components by running `npm run test`
1. Add it to the storybook by creating a story in `stories` folder
1. Add the component export to `src/index.ts`
1. Update the `README.md` where appropriate
1. Make a PR detailing your changes with a [semver](#semver-versioning) Tag and get it code reviewed.

You do not need to bump versions. Whoever does the deploy will handle bumping the version.


### Best Practices: A Living List

The follow are best practices that we have learned over the course of building components. You might not see them consistently just yet, but we should be implementing these patterns in new components going forward.

We're keeping a running list of inconsistencies in the API [here](https://github.com/sendgrid/ui-components/issues/96).

#### Follow the "Principle of Least Surprise"

When in doubt, try to follow common web conventions. For example, if your component takes a custom event handler, make sure the first argument passed to that event handler is the event itself. If you want to pass additional arguments, you can pass them after the event object.

#### Pass Common HTML Properties to the Parent Element

You component should have a `classNames` property. If your component does not have custom classes, then this should be passed directly to either the parent component—unless it is more appropriate to pass it to another element.

Your component should accept a `styles` property. The same rules apply. This should be passed to to the parent element or another component if appropriate.

**Disclaimer**: We're working on providing a better pattern that allows you to pass all additional properties to the parent element. Stay tuned.

#### Prefer Render Props

It's impossible to predict what every team will need out of a component. It's helpful to allow consumers of your components to pass in a function that allows futher customization. You can [read about renderprops in React's official documentation].

[renderprops]: https://reactjs.org/docs/render-props.html

#### Naming Event Handlers and Methods

If you component is receiving an event handler, it should use the `on` prefix (e.g. `onClick`, `onChange`).

If you are writing a method that handles an event, it should be prefixed with `handle` (e.g. `handleClick`, `handleChange`).

#### Prefer Functional setState

Example:

```js
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```

See [the official React documentation](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous).

#### Use Fragments Instead of Useless Divs

If you find yourself using `<div>` elements just to get React to stop yelling at your about needing a single DOM node, consider using [fragments][].

```js
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```

#### Capture Additional Props in attributes

If you're creating a new component, allow the consumer of that component to pass in whatever attributes they may want on the element(s).  You can accomplish this by accepting props with object deconstruction and the spread operator.  Then spread the unnamed props on the most important element.

```js
const {
  label,
  thin,
  ...attributes
} = props;

return (
  <hr
    className={cn({
      'has-label': !!label,
      'is-thin': thin,
    })}
    data-label={label}
    {...attributes}
  />
);
```

[fragments]: https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html

## Submitting a Component

- **Storybook**: Make sure that you have added stories for your new component. When possible try to create stories that capture all of the different combinations of properties and options that can be passed to your component.
- **Test Coverage**: Be sure that you're not causing a regression in test coverage. A coverage report is generated every time you run `yarn test`. We are aiming for 100% test coverage in components. This is _very_ important as we want to make sure we're not accidentally implementing a breaking change to a cross-team dependency.
- **Linting and Formatting**: UI Components makes use of TSLint to verify the quality of the code and look for easily-missed mistakes through static analysis.
- **Versioning**: Do not bump the version of the library in the `package.json`. This will either be done automatically or done manually to batch a number of breaking changes or new features.

## [RAPID Decision Making Framework][rapid]

| Role          | Person or People                                             |
|---------------|--------------------------------------------------------------|
| R (Recommend) | Jason Walker                                                 |
| A (Agree)     | Chris Chalstrom, Alex Wicks                                  |
| P (Perform)   | All FE Engineers across EI, CL, and MC, Jason Walker (UI/UX) |
| I (Input)     | Alex Abreu, Alex Thomsen, Eric Tjossem, Alan Smith           |
| D (Decide)    | Steve Kinney                                                 |

[rapid]: https://www.bridgespan.org/insights/library/organizational-effectiveness/rapid-decision-making

## Where to get Help or Report a Problem

[Open an issue](https://github.com/sendgrid/ui-components/issues) and then ping the Front End Guild in HipChat.
