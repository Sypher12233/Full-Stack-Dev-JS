# CSS #

* Cascading Style Sheets or CSS is a language web developers use to style the HTML content on a web page.
* CSS is the language that provides *style* to the content of an html page.
* This includes colors, fonts, positioning, layout and more!
* CSS contains *selectors* which specify the html elements to which the style should be applied as well as *visual rules* that specify how that content should be displayed.

## Setup and Syntax ##

1. CSS Anatomy
1. Inline Styles
1. Internal Stylesheet
1. External Stylesheet
1. Linking CSS file

### CSS Anatomy ###

* We have two different syntaxes or methods for writing CSS code.
* The first syntax shows CSS applies as a ruleset, while the second shows it written as an inline style.

```CSS
/* First method: Ruleset */
p {
  color:blue;
}
/* Second method: Inline Style */
<p style='color:blue;'>Hello World!</p>
```

![CSS Anatomy](https://static-assets.codecademy.com/Courses/Learn-CSS/Setup-and-Syntax/CSS_Anatomy-v2-nobgfill.svg)

> Ruleset Terms:

* Selector—The beginning of the ruleset used to target the element that will be styled.
* Declaration Block—The code in-between (and including) the curly braces `{ }` that contains the CSS declaration(s).
* Declaration—The group name for a property and value pair that applies a style to the selected element.
* Property—The first part of the declaration that signifies what visual characteristic of the element is to be modified.
* Value—The second part of the declaration that signifies the value of the property.

> Inline Style Terms:

* Opening Tag—The start of an HTML element. This is the element that will be styled.
* Attribute—The style attribute is used to add CSS inline styles to an HTML element.
* Declaration—The group name for a property and value pair that applies a style to the selected element.
* Property—The first part of the declaration that signifies what visual characteristic of the element is to be modified.
* Value—The second part of the declaration that signifies the value of the property.

### Inline Style ###

* It is not the best way to style an HTML element but, it is possible to write CSS code directly within HTML code using inline styles.

```HTML
<p style='color: red; font-size: 20px;'>I'm learning to code!</p>
```

### Internal Stylesheet ###

* HTML allows you to write CSS code in its own dedicated section with a `<style>` element nested inside of the `<head>` element. The CSS code inside the `<style>` element is often referred to as an internal stylesheet.

```HTML
<head>
  <style>
    p {
      color: red;
      font-size: 20px;
    }
  </style>
</head>
```

### External Stylesheet ###

* Developers avoid mixing code by storing `HTML` and `CSS` code in separate files (HTML files contain only HTML code, and CSS files contain only CSS code).
* You can create an external stylesheet by using the `.css` file name extension, like so: `style.css`

### Linking CSS File ###

* When HTML and CSS codes are in separate files, the files must be linked. Otherwise, the HTML file won’t be able to locate the CSS code, and the styling will not be applied.
* You can use the `<link>` element to link HTML and CSS files together. The `<link>` element must be placed within the head of the HTML file. It is a self-closing tag and requires the following attributes:
* `href` — like the anchor element, the value of this attribute must be the address, or path, to the CSS file.
* `rel` — this attribute describes the relationship between the HTML file and the CSS file. Because you are linking to a stylesheet, the value should be set to stylesheet.

```HTML
<link href='https://www.codecademy.com/stylesheets/style.css' rel='stylesheet'>
```

### Review: CSS Setup and Syntax ###

> Let’s review what you learned so far:

* The basic anatomy of CSS syntax written for both inline styles and stylesheets.
* Some commonly used CSS terms, such as ruleset, selector, and declaration.
* CSS inline styles can be written inside the opening HTML tag using the style attribute.
* Inline styles can be used to style HTML, but it is not the best practice.
* An internal stylesheet is written using the `<style>` element inside the `<head>` element of an HTML file.
* Internal stylesheets can be used to style HTML but are also not best practice.
* An external stylesheet separates CSS code from HTML, by using the “.css”.file extension.
* External stylesheets are the best approach when it comes to using HTML and CSS.
* External stylesheets are linked to HTML using the `<link>` element.

## Selectors ##

1. Type
1. Universal
1. Class
1. Multiple Classes
1. ID
1. Attributes
1. Pseudo-Code
1. Specificity
1. Chaining
1. Descendent Combinator
1. Review: CSS Selectors

### 1. Type ###

* The type selector selects all elements of a given type.
* A selector is used to target the specific HTML element(s) to be styled by the declaration. One selector you may already be familiar with is the type selector.
* This is an instance of using the type selector! The element type is p, which comes from the HTML `<p>` tag.

> Some important notes on the type selector:

* The type selector does not include the angle brackets.
* Since element types are often referred to by their opening tag name, the type selector is sometimes referred to as the tag name or element selector.

### 2. Universal ###

* The universal selector selects all elements of any type.
* The universal selector uses the `*` character in the same place where you specified the type selector in a ruleset, like so:

```CSS
* { 
  font-family: Verdana;
}
```

### 3. Class ###

* CSS is not limited to selecting elements by their type. As you know, HTML elements can also have attributes. When working with HTML and CSS a class attribute is one of the most common ways to select an element.

```CSS
* <p class='brand'>Sole Shoe Company</p>
```

* The paragraph element in the example above has a class attribute within the opening tag of the `<p>` element. The class attribute is set to `'brand'`. To select this element using CSS, we can create a ruleset with a class selector of `.brand`.

```CSS
.brand {
 
}
```

### 4. Multiple Classes ###

* If there’s a heading element that needs to be green and bold. You could write two CSS rulesets like so:

```CSS
.green {
  color: green;
}
 
.bold {
  font-weight: bold;
}
```

Then, you could include both of these classes on one HTML element like this:

```CSS
<h1 class='green bold'> ... </h1>
```

* We can add multiple classes to an HTML element’s class attribute by separating them with a space. This enables us to mix and match CSS classes to create many unique styles without writing a custom class for every style combination needed.

### 5. ID ###

```HTML
* <h1 id='large-title'> ... </h1>
```

* In contrast to class which accepts multiple values, and can be used broadly throughout an HTML document, an element’s `id` can only have a single value, and only be used once per page.
* To select an element’s ID with CSS, we prepend the id name with a number sign `#`. For instance, if we wanted to select the HTML element in the example above, it would look like this:

```CSS
#large-title {
 
}
```

### 6. Attributes ###

* Some HTML elements use attributes to add extra detail or functionality to the element. Some familiar attributes may be href and src, but there are [many more](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)—including `class` and `id`!
* The attribute selector can be used to target HTML elements that already contain attributes.
* Elements of the same type can be targeted differently by their attribute or attribute value.
* This alleviates the need to add new code, like the `class` or `id` attributes.
* Attributes can be selected similarly to types, classes, and IDs.

```CSS
[href]{
  color: magenta;
}
```

* The most basic syntax is an attribute surrounded by square brackets. In the above example: `[href]` would target all elements with an href attribute and set the color to magenta.

---

* And it can get more granular from there by adding type and/or attribute values. One way is by using type`[attribute*=value]`. In short, this code selects an element where the attribute contains any instance of the specified value. Let’s take a look at an example.

```CSS
<img src='/images/seasons/cold/winter.jpg'>
<img src='/images/seasons/warm/summer.jpg'>

img[src*='winter'] {
  height: 50px;
}
 
img[src*='summer'] {
  height: 100px;
}
```

Now take a look at the above CSS code. The attribute selector is used to target each image individually.

* The first ruleset looks for an img element with an attribute of src that contains the string 'winter', and sets the height to 50px.
* The second ruleset looks for an img element with an attribute of src that contains the string 'summer', and sets the height to 100px.

### 7. Pseudo-Code ###

* A pseudo-class can be attached to any selector. It is always written as a colon : followed by a name. For example `p:hover`.

```CSS
p:hover {
  background-color: lime;
}
```

* In the above code, whenever the mouse hovers over a paragraph element, that paragraph will have a lime-colored background.

#### Classes and IDs ####

* CSS can select HTML elements by their type, class, and ID. CSS classes and IDs have different purposes, which can affect which one you use to style HTML elements.
* CSS classes are meant to be reused over many elements. By writing CSS classes, you can style elements in a variety of ways by mixing classes. For instance, imagine a page with two headlines. One headline needs to be bold and blue, and the other needs to be bold and green. Instead of writing separate CSS rules for each headline that repeat each other’s code, it’s better to write a .bold CSS rule, a .green CSS rule, and a .blue CSS rule. Then you can give one headline the bold green classes, and the other the bold blue classes.

### 8. Specificity ###

* Specificity is the order by which the browser decides which CSS styles will be displayed. A best practice in CSS is to style elements while using the lowest degree of specificity so that if an element needs a new style, it is easy to override.
* IDs are the most specific selector in CSS, followed by classes, and finally, type. For example, consider the following HTML and CSS:

```CSS
<h1 class='headline'>Breaking News</h1>
h1 {
  color: red;
}
 
.headline {
  color: firebrick;
}
```

* In the example code above, the color of the heading would be set to firebrick, as the class selector is more specific than the type selector. If an ID attribute (and selector) were added to the code above, the styles within the ID selector’s body would override all other styles for the heading.
* To make styles easy to edit, it’s best to style with a type selector, if possible. If not, add a class selector. If that is not specific enough, then consider using an ID selector.

### 9. Chaining ###

* When writing CSS rules, it’s possible to require an HTML element to have two or more CSS selectors at the same time.

This is done by combining multiple selectors, which we will refer to as chaining. For instance, if there was a special class for `<h1>` elements, the CSS would look like below:

```CSS
h1.special {
 
}
```

* The code above would select only the `<h1>` elements with a class of special. If a `<p>` element also had a class of special, the rule in the example would not style the paragraph.

### 10. Descendent Combinator ###

* In addition to chaining selectors to select elements, CSS also supports selecting elements that are nested within other HTML elements, also known as descendants. For instance, consider the following HTML:

```CSS
<ul class='main-list'>
  <li> ... </li>
  <li> ... </li>
  <li> ... </li>
</ul>
```

The nested `<li>` elements are descendants of the `<ul>` element and can be selected with the descendant combinator like so:

```CSS
.main-list li {
 
}
```

In the example above, .main-list selects the element with the.main-list class (the `<ul>` element). The descendant `<li>`‘s are selected by adding li to the selector, separated by a space. This results in .main-list li as the final selector.

#### Chaining and Specificity ####

* Adding more than one tag, class, or ID to a CSS selector increases the specificity of the CSS selector.

For instance, consider the following CSS:

```CSS
p {
  color: blue;
}
 
.main p {
  color: red;
}
```

* Both of these CSS rules define what a `<p>` element should look like. Since .main p has a class and a p type as its selector, only the `<p>` elements inside the .main element will appear red. This occurs despite there being another more general rule that states `<p>` elements should be blue.

#### Multiple Selectors ####

* It’s possible to add CSS styles to multiple CSS selectors all at once. This prevents writing repetitive code.

For instance, the following code has repetitive style attributes:

```CSS
h1 {
  font-family: Georgia;
}
 
.menu {
  font-family: Georgia;
}
```

Instead of writing font-family: Georgia twice for two selectors, we can separate the selectors by a comma to apply the same style to both, like this:

```CSS
h1, 
.menu {
  font-family: Georgia;
}
```

By separating the CSS selectors with a comma, both the `<h1>` elements and the elements with the menu class will receive the font-family: Georgia styling.

### 11. Review: CSS Selectors ###

We learned how to select HTML elements with CSS and apply styles to them. Let’s review:

* CSS can select HTML elements by type, class, ID, and attribute.
* All elements can be selected using the universal selector.
* An element can have different states using the pseudo-class selector.
* Multiple CSS classes can be applied to one HTML element.
* Classes can be reusable, while IDs can only be used once.
* IDs are more specific than classes, and classes are more specific than type. That means IDs will override any styles from a class, and classes will override any styles from a type selector.
* Multiple selectors can be chained together to select an element. This raises the specificity but can be necessary.
* Nested elements can be selected by separating selectors with a space.
* Multiple unrelated selectors can receive the same styles by separating the selector names with commas.

## Visual Rules ##

1. Font Family
1. Font Size
1. Font Weight
1. Font Align
1. Color and Background color
1. Opacity
1. Background Image
1. Important
1. Review: Visual Rules

### 1. Font Family ###

To change the typeface of text on your web page, you can use the font-family property.

```CSS
h1 {
  font-family: Garamond;
}
```

In the example above, the font family for all main heading elements has been set to Garamond.

> When setting typefaces on a web page, keep the following points in mind:

* The font specified must be installed on the user’s computer or downloaded with the site.
* [Web safe fonts](http://www.cssfontstack.com/) are a group of fonts supported across most browsers and operating systems.
* Unless you are using web safe fonts, the font you choose may not appear the same between all browsers and operating systems.
* When the name of a typeface consists of more than one word, it’s a best practice to enclose the typeface’s name in quotes, like so:

```CSS
h1 {
  font-family: 'Courier New';
}
```

### 2. Font Size ###

To change the size of text on your web page, you can use the font-size property.

```CSS
p {
  font-size: 18px;
}
```

In the example above, the font-size of all paragraphs was set to 18px. px means pixels, which is one way to measure font size.

### 3. Font Weight ###

In CSS, the font-weight property controls how bold or thin text appears.

```CSS
p {
  font-weight: bold;
}
```

In the example above, all paragraphs on the web page would appear bolded.

* The font-weight property has another value: normal. Why does it exist?

### 4. Font Align ###

* No matter how much styling is applied to text (typeface, size, weight, etc.), the text always appears on the left side of the container in which it resides.
* To align text we can use the text-align property. The text-align property will align text to the element that holds it, otherwise known as its parent.

```CSS
h1 {
  text-align: right;
}.
```

#### Options ####

The text-align property can be set to one of the following commonly used values:

* `left` — aligns text to the left side of its parent element, which in this case is the browser.
* `center` — centers text inside of its parent element.
* `right` — aligns text to the right side of its parent element.
* `justify—` spaces out text in order to align with the right and left side of the parent element.

### 5. Color and Background color ###

Before discussing the specifics of color, it’s important to make two distinctions about color. Color can affect the following design aspects:

1. Foreground color
1. Background color

* `Foreground color` is the color that an element appears in. For example, when a heading is styled to appear green, the foreground color of the heading has been styled.
* `Background color` is when a heading is styled so that its background appears yellow, the background color of the heading has been styled.

In CSS, these two design aspects can be styled with the following two properties:

`color`: this property styles an element’s foreground color.

`background-color`: this property styles an element’s background color

```CSS
h1 {
  color: red;
  background-color: blue;
}
```

In the example above, the text of the heading will appear in red, and the background of the heading will appear blue.

### 6. Opacity ###

Opacity is the measure of how transparent an element is. It’s measured from 0 to 1, with 1 representing 100%, or fully visible and opaque, and 0 representing 0%, or fully invisible.

Opacity can be used to make elements fade into others for a nice overlay effect. To adjust the opacity of an element, the syntax looks like this:

```CSS
.overlay {
  opacity: 0.5;
}
```

In the example above, the `.overlay` element would be 50% visible, letting whatever is positioned behind it show through.

### 7. Background Image ###

* CSS has the ability to change the background of an element. One option is to make the background of an element an image. This is done through the CSS property background-image. Its syntax looks like this:

```CSS
.main-banner {
  background-image: url('https://www.example.com/image.jpg');
}
```

* The background-image property will set the element’s background to display an image.
* The value provided to background-image is a url. The url should be a URL to an image. The url can be a file within your project, or it can be a link to an external site. To link to an image inside an existing project, you must provide a relative file path. If there was an image folder in the project, with an image named mountains.jpg, the relative file path would look like below:

```CSS
.main-banner {
  background-image: url('images/mountains.jpg');
}
```

### 8. Important ###

* `!important` can be applied to specific declarations, instead of full rules. It will override any style no matter how specific it is. As a result, it should almost never be used. Once !important is used, it is very hard to override.

The syntax of !important in CSS looks like this:

```CSS
p {
  color: blue !important;
}
 
.main p {
  color: red;
}
```

### 9. Review: Visual Rules ###

We learned about;

* The `font-family` property defines the typeface of an element.
* `font-size` controls the size of text displayed.
* `font-weight` defines how thin or thick text is displayed.
* The `text-align` property places text in the left, right, or center of its parent container.
* Text can have two different color attributes: `color` and `background-color`. color defines the color of the text, while background-color defines the color behind the text.
* CSS can make an element transparent with the `opacity` property.
* CSS can also set the background of an element to an image with the `background-image` property.
* The `!important` flag will override any style, however it should almost never be used, as it is extremely difficult to override.
