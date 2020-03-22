### react-easy-ui

Simple full themeable component system specially useful for white label apps that need to set theme on page load, not at build time.

## Why this?

I was building a white label website so the client color theme should be setted on page load and not in build time, I just didn't find an easy way to do this with current alternatives, also I never done one of these so here I am.

### Development

```
yarn start
```

### Storybook

Run inside another terminal:

```
yarn storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Example

Then run the example inside another:

```
cd example
yarn
yarn start
```
