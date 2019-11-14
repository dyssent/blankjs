# Blank.JS

Beautiful placeholders for your avatars, documents, and other lists.
No server needed, works offline! Works with React.
See a live editor and preview:
[](https://www.blankjs.com)

## How to use

1. Install the library:
`yarn add @dyssent/blankjs`
or
`npm install @dyssent/blankjs`

2. Create a style for your placeholders (the easiest using the online editor)
3. Assign your style as default for all blanks

```import { DefaultSettings } from '@dyssent/blankjs';
DefaultSettings.config = ... paste here your config ...
```

4. Render your blank placeholder:
`<Blank id="john.doe.id" />`

## FAQ

### How does it work

We use a deterministic randomizer, which allows to generate the same placeholder shape and style for the same user ID. Each render we set the seed to a user ID hash, guaranteeing the same output. Result is rendered into a 128x128 SVG viewport, but scales without artifacts after that.

### What can serve as a user ID

Anything that doesn't change throughout user's existence will work. If email is expected to remain permanently - it is a good option. Otherwise, any internal ID will work, a number, a guid, or so.

### Can I use multiple styles in the same app

Absolutely. Each component allows you to specify a custom config, which will result in a different output. Default config is used only when none is provided to an instance of a blank component. You can have as many configs as there are different types of entities - users, organizations, projects, etc. Here is an example:

`<Blank id="userID" config={userStyleConfig} />`
`<Blank id="orgID" config={orgStyleConfig} />`

### Is it fast

We use SVG under the hood, which has very good performance in modern browsers. There is no pre-compute work done, configs are not prepared, but just interpreted during a render pass. Plus everything is cached and will remain as is unless user ID or config changes on the component.

It is generally a good rule of thumb to keep number of shapes as low as possible to achieve the desired style. If there are too many of them - it will have impact on the first render pass.

### Can I use it to display actual avatars

Sure! If you provide a URL for the avatar - it'll be used instead of the generated shape. Additionally, it is possible to provide a File type, which is usually helpful when you change an avatar and need to immediately show the preview of it before uploading the file.

`<Blank id="userID" avatar="https://userID.avatar.jpg" />`

### Can I display custom shapes and Logos

If you use Path shape, it will accept typical SVG shape path, therefore custom logos, shapes, or anything else can be used. They are still customizable with style, replication, and other modifiers.

### Is it possible to use it for other use cases

Probably, if overflow is not hidden - it possible to use it for some backgrounds, or some abstract shapes on the page. Imagination is the limit.

### Can I use it without React

Unfortunately no, at the moment the library is only working for React. If you need other frameworks - feel free to make a pull request.

### Do you provide Typescript bindings

The library is written in typescript, so types are all available out of the box.

### Can I help somehow

Spreading the word is the best help :) Or a star on github!
