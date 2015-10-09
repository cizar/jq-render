# jQuery Render

Handlebars render plugin for jQuery

## Usage

Initialize the template

```js
  $('#my-template').render('Here is a {{Handlebar}} template');
```

Or with HTML inside a element

```html
<div id="my-template">Hello {{name}}!</div>
```

```js
  $('#my-template').render();
```

Then simply render the template with some data.


```js
  $('#my-template').render({ name: 'World!' });
```

Also you can initialize the template and render

```html
<div id="my-placeholder"></div>
```

```js
  $('#my-template').render({ name: 'World' }, 'This is another hello {{name}}!');
```

Once initialized the template, the render can be run again with new data.

```js
  $('#my-template').render({ name: 'Another World' });
```
