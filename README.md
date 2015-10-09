# jQuery Render

Simple Handlebars render plugin for jQuery

## Usage

First, initialize the template.

```js
  $('#my-placeholder').render('Here is a {{Handlebar}} template');
```

Or with the content inside an element

```html
<div id="my-placeholder">Hello {{name}}!</div>
```

And apply the plugin without parameters.

```js
  $('#my-placeholder').render();
```

Then simply render the template with some data.


```js
  $('#my-template').render({ name: 'World!' });
```

Also you can initialize the template and render at the same time.

```js
  $('#my-template').render({ name: 'World' }, 'This is another hello {{name}}!');
```

Once initialized the template, the render can be run again with new data.

```js
  $('#my-template').render({ name: 'Another World' });
```
