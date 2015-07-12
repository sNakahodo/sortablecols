# About

This is a Twitter Bootstrap 3 plugin that enables an HTML5 drag-and-drop sort feature for columns (aka .col-\*) contained in the grid layout (aka .row).

# Installation

Simply grab the file sortablecols.js and load in your web page, after jQuery and Bootstrap core files.

# Usage

1. Simply add an id to the .row where you want to allow the columns to be sorted.
```html
<div id="sortablecols" class="row">
  ...
</div>
```

2. Initialise the plugin in the $(document).ready().
```js
$('#sortablecols').sortablecols();
```

# Options

Sometimes child elements in .col-* element run generic drag-and-drop feature and prevent the sort to occur.
Most of the time, this happens with <img> and <a> tags. You can disable the default drag-and-drop of these elements by setting the option below.
(Divide the tag names with a space.)

```js
$('#sortablecols').sortablecols({
  lockdrag: 'a img'
});
```

You can specify selectors as well.

```js
$('#sortablecols').sortablecols({
  lockdrag: '.column-image .link'
});
```

# Supported browsers

This plugin works on HTML5-compatible browsers such as:
* Chrome 
* Firefox
* Safari
* IE 10+
