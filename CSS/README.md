# CSS #

* Cascading Style Sheets or CSS is a language web developers use to style the HTML content on a web page.
* CSS is the language that provides *style* to the content of an html page.
* This includes colors, fonts, positioning, layout and more!
* CSS contains *selectors* which specify the html elements to which the style should be applied as well as *visual rules* that specify how that content should be displayed.

## Topics ##

* Setup and Syntax
* Selectors
* Visual Rules
* The Box Model

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

#### Hue Saturation and Lightness (HSL) ####

The RGB color scheme is convenient because it’s very close to how computers represent colors internally. There’s another equally powerful system in CSS called the hue-saturation-lightness color scheme, abbreviated as HSL.

The syntax for HSL is similar to the decimal form of RGB, though it differs in important ways. The first number represents the degree of the hue, and can be between 0 and 360. The second and third numbers are percentages representing saturation and lightness respectively. Here is an example:

```CSS
color: hsl(120, 60%, 70%);
```

Hue is the first number. It refers to an angle on a color wheel. Red is 0 degrees, Green is 120 degrees, Blue is 240 degrees, and then back to Red at 360. You can see an example of a color wheel below.

![color wheel](https://content.codecademy.com/courses/learn-css-color/color_wheel_4_background.svg)

Saturation refers to the intensity or purity of the color. The saturation increases towards 100% as the color becomes richer. The saturation decreases towards 0% as the color becomes grayer.

Lightness refers to how light or dark the color is. Halfway, or 50%, is normal lightness. Imagine a sliding dimmer on a light switch that starts halfway. Sliding the dimmer up towards 100% makes the color lighter, closer to white. Sliding the dimmer down towards 0% makes the color darker, closer to black.

HSL is convenient for adjusting colors. In RGB, making the color a little darker may affect all three color components. In HSL, that’s as easy as changing the lightness value. HSL is also useful for making a set of colors that work well together by selecting various colors that have the same lightness and saturation but different hues.

#### Opacity and Alpha ####

All of the colors we’ve seen so far have been opaque, or non-transparent. When we overlap two opaque elements, nothing from the bottom element shows through the top element. In this exercise, we’ll change the opacity, or the amount of transparency, of some colors so that some or all of the bottom elements are visible through a covering element.

To use opacity in the HSL color scheme, use hsla instead of hsl, and four values instead of three. For example:

```CSS
color: hsla(34, 100%, 50%, 0.1);
```

The first three values work the same as hsl. The fourth value (which we have not seen before) is the alpha. This last value is sometimes called opacity.

Alpha is a decimal number from zero to one. If alpha is zero, the color will be completely transparent. If alpha is one, the color will be opaque. The value for half-transparent would be `0.5`.

You can think of the alpha value as, “the amount of the background to mix with the foreground”. When a color’s alpha is below one, any color behind it will be blended in. The blending happens for each pixel; no blurring occurs.

The RGB color scheme has a similar syntax for opacity, rgba. Again, the first three values work the same as rgb and the last value is the alpha. Here’s an example:

```CSS
color: rgba(234, 45, 98, 0.33);
```

A little unconventional, but still worth mentioning is how hex colors can also have an alpha value. By adding a two-digit hexadecimal value to the end of the six-digit representation `(#52BC8280)`, or a one-digit hexadecimal value to the end of the three-digit representation `(#F003)`, you can change the opacity of a hexadecimal color. Hex opacity ranges from `00` (transparent) to `FF` (opaque).

Alpha can only be used with HSL, RGB, and hex colors; we cannot add the alpha value to name colors like green.

There is, however, a named color keyword for zero opacity, transparent. It’s equivalent to `rgba(0, 0, 0, 0)`, and it’s used like any other color keyword:

```CSS
color: transparent;
```

#### Review ####

There are four ways to represent color in CSS:

* `Named colors`—there are more than 140 named colors, which you can review here.
* Hexadecimal or hex colors
* Hexadecimal is a number system with has sixteen digits, 0 to 9 followed by “A” to “F”.
* Hex values always begin with # and specify values of red, blue, and green using hexadecimal numbers such as #23F41A.
* Six-digit hex values with duplicate values for each RGB value can be shorted to three digits.

RGB

* RGB colors use the `rgb()` syntax with one value for red, one value for blue and one value for green.
* RGB values range from 0 to 255 and look like this: `rgb(7, 210, 50)`.

HSL

* HSL stands for hue (the color itself), saturation (the intensity of the color), and lightness (how light or dark a color is).
* Hue ranges from 0 to 360 and saturation and lightness are both represented as percentages like this: `hsl(200, 20%, 50%)`.
* You can add opacity to color in RGB and HSL by adding a fourth value, a, which is represented as a percentage.

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

## The Box Model ##

* The box model comprises the set of properties that define parts of an element that take up space on a web page. The model includes the content area’s size (*width* and *height*) and the element’s padding, *border*, and *margin*.

The properties include:

* `width` and `height`: The width and height of the content area.
* `padding`: The amount of space between the content area and the border.
* `border`: The thickness and style of the border surrounding the content area and padding.
* `margin`: The amount of space between the border and the outside edge of the element.

![The Box Model](https://content.codecademy.com/courses/updated_images/diagram-boxmodel_Updated_1-01.svg)

## Box Model Topics ##

1. Height and width
2. Borders
3. Padding
4. Margin
5. Minimum and Maximum Height and Width
6. Overflow
7. Resetting Defaults
8. Visibility
9. Review CSS: The Box Model

### 1. Height and width ###

An element’s content has two dimensions: a `height` and a `width`. By default, the dimensions of an HTML box are set to hold the raw contents of the box.

The CSS `height` and `width` properties can be used to modify these default dimensions.

```CSS
p {
  height: 80px;
  width: 240px;
}
```

> Note

Pixels allow you to set the exact size of an element’s box (width and height). When the width and height of an element are set in pixels, it will be the same size on all devices — an element that fills a laptop screen will overflow a mobile screen.

### 2. Borders ###

A border is a line that surrounds an element, like a frame around a painting. Borders can be set with a specific `width`, `style`, and `color`:

* `width`—The thickness of the border. A border’s thickness can be set in pixels or with one of the following keywords: `thin`, `medium`, or `thick`.
* `style`—The design of the border. Web browsers can render any of [10 different styles](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values). Some of these styles include: `none`, `dotted`, and `solid`.
* `color`—The color of the border. Web browsers can render colors using a few different formats, including [140 built-in color keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).

```CSS
p {
  border: 3px solid coral;
}
```

In the example above, the border has a width of 3 pixels, a style of `solid`, and a `color` of coral. All three properties are set in one line of code.

* The default border is `medium none color`, where `color` is the current color of the element. If `width`, `style`, or `color` are not set in the CSS file, the web browser assigns the default value for that property.

```CSS
p.content-header {
  height: 80px;
  width: 240px;
  border: solid coral;
}
```

In this example, the border style is set to `solid` and the color is set to `coral`. The width is not set, so it defaults to `medium`.

#### Border Radius ####

You can modify the corners of an element’s border box with the border-radius property.

```CSS
div.container {
  border: 3px solid blue;
  border-radius: 5px;
}
```

The code in the example above will set all four corners of the border to a radius of 5 pixels (i.e. the same curvature that a circle with a radius of 5 pixels would have).

You can create a border that is a perfect circle by first creating an element with the same width and height, and then setting the radius equal to half the width of the box, which is 50%.

```CSS
div.container {
  height: 60px;
  width: 60px;
  border: 3px solid blue;
  border-radius: 50%;
}
```

The code in the example above creates a `<div>` that is a perfect circle.

### 3. Padding ###

The space between the contents of a box and the borders of a box is known as padding. Padding is like the space between a picture and the frame surrounding it. In CSS, you can modify this space with the `padding` property.

```CSS
p.content-header {
  border: 3px solid coral;
  padding: 10px;
}
```

The code in this example puts 10 pixels of space between the content of the paragraph (the text) and the borders, on all four sides.

* The padding property is often used to expand the background color and make the content look less cramped.

If you want to be more specific about the amount of padding on each side of a box’s content, you can use the following properties:

* `padding-top`
* `padding-right`
* `padding-bottom`
* `padding-left`

#### Padding Shorthand ####

Another implementation of the padding property lets you specify exactly how much padding there should be on each side of the content in a single declaration. A declaration that uses multiple properties as values is known as a shorthand property.

Padding shorthand lets you specify all of the padding properties as values on a single line:

* `padding-top`
* `padding-right`
* `padding-bottom`
* `padding-left`
You can specify these properties in a few different ways:

4 Values

```CSS
p.content-header {
  padding: 6px 11px 4px 9px;
}
```

In the example above, the four values 6px 11px 4px 9px correspond to the amount of padding on each side, in a clockwise rotation. In order, it specifies the padding-top value (6px), the padding-right value (11px), the padding-bottom value (4px), and the padding-left value (9px) of the content.

3 Values

```CSS
p.content-header {
  padding: 5px 10px 20px;
}
```

If the left and right sides of the content can be equal, the padding shorthand property allows for 3 values to be specified. The first value sets the padding-top value (5px), the second value sets the padding-left and padding-right values (10px), and the third value sets the padding-bottom value (20px).

2 Values

```CSS
p.content-header {
  padding: 5px 10px;
}
```

And finally, if the top and bottom sides can be equal, and the left and right sides can be equal, you can specify 2 values. The first value sets the padding-top and padding-bottom values (5px), and the second value sets the padding-left and padding-right values (10px).

### 4. Margin ###

Margin refers to the space directly outside of the box. The `margin` property is used to specify the size of this space.

```CSS
p {
  border: 1px solid aquamarine;
  margin: 20px;
}
```

The code in the example above will place 20 pixels of space on the outside of the paragraph’s box on all four sides. This means that other HTML elements on the page cannot come within 20 pixels of the paragraph’s border.

If you want to be even more specific about the amount of margin on each side of a box, you can use the following properties:

* margin-top
* margin-right
* margin-bottom
* margin-left

#### Margin Shorthand ####

Similar to padding shorthand, margin shorthand lets you specify all of the margin properties as values on a single line.

You can specify these properties in a few different ways:

* 4 Values

```CSS
p {
  margin: 6px 10px 5px 12px;
}
```

In the example above, the four values 6px 10px 5px 12px correspond to the thickness of the margin on each side, in a clockwise rotation. In order, it specifies the margin-top value (6px), the margin-right value (10px), the margin-bottom value (5px), and the margin-left value (12px) of the content.

* 3 Values

```CSS
p {
  margin: 5px 12px 4px;
}
```

If the left and right sides of the content can be equal, the margin shorthand property allows for 3 values to be specified. The first value sets the margin-top value (5px), the second value sets the margin-left and margin-right values (12px), and the third value sets the margin-bottom value (4px).

* 2 Values

```CSS
p {
  margin: 20px 10px;
}
```

And finally, if the top and bottom sides can be equal, and the left and right sides can be equal, you can specify 2 values. The first value sets the margin-top and margin-bottom values (20px), and the second value sets the margin-left and margin-right values (10px).

#### Auto ####

The margin property also lets you center content. However, you must follow a few syntax requirements. Take a look at the following example:

```CSS
div.headline {
  width: 400px;
  margin: 0 auto;
}
```

In the example above, `margin: 0 auto`; will center the divs in their containing elements. The 0 sets the top and bottom margins to 0 pixels. The `auto` value instructs the browser to adjust the left and right margins until the element is centered within its containing element.

In order to center an element, a width must be set for that element. Otherwise, the width of the div will be automatically set to the full width of its containing element, like the `<body>`, for example. It’s not possible to center an element that takes up the full width of the page, since the width of the page can change due to display and/or browser window size.

In the example above, the width of the `div` is set to 400 pixels, which is less than the width of most screens. This will cause the div to center within a containing element that is greater than 400 pixels wide.

#### Margin Collapse ####

As you have seen, padding is space added inside an element’s border, while margin is space added outside an element’s border. One additional difference is that top and bottom margins, also called vertical margins, collapse, while top and bottom padding does not.

Horizontal margins (left and right), like padding, are always displayed and added together. For example, if two divs with ids `#div-one` and `#div-two`, are next to each other, they will be as far apart as the sum of their adjacent margins.

![Vertical and Horizontal Margins](https://content.codecademy.com/courses/updated_images/diagram-verticalmargins_Updated_1-01.svg)

```CSS
#img-one {
  margin-right: 20px;
}
 
#img-two {
  margin-left: 20px;
}
```

In this example, the space between the `#img-one` and `#img-two` borders is 40 pixels. The right margin of #img-one (20px) and the left margin of `#img-two` (20px) add to make a total margin of 40 pixels.

Unlike horizontal margins, vertical margins do not add. Instead, the larger of the two vertical margins sets the distance between adjacent elements.

```CSS
#img-one {
  margin-bottom: 30px;
}
 
#img-two {
  margin-top: 20px;
}
```

In this example, the vertical margin between the `#img-one` and `#img-two` elements is 30 pixels. Although the sum of the margins is 50 pixels, the margin collapses so the spacing is only dependent on the #img-one bottom margin.

It may be helpful to think of collapsing vertical margins as a short person trying to push a taller person. The tall person has longer arms and can easily push the short person, while the person with short arms cannot reach the person with long arms.

### 5. Minimum and Maximum Height and Width ###

Because a web page can be viewed through displays of differing screen size, the content on the web page can suffer from those changes in size. To avoid this problem, CSS offers two properties that can limit how narrow or how wide an element’s box can be sized to:

* `min-width`—this property ensures a minimum width of an element’s box.
* `max-width`—this property ensures a maximum width of an element’s box.

```CSS
p {
  min-width: 300px;
  max-width: 600px;
}
```

In the example above, the width of all paragraphs will not shrink below 300 pixels, nor will the width exceed 600 pixels.

Content, like text, can become difficult to read when a browser window is narrowed or expanded. These two properties ensure that content is legible by limiting the minimum and maximum widths of an element.

You can also limit the minimum and maximum height of an element:

* `min-height` — this property ensures a minimum height for an element’s box.
* `max-height` — this property ensures a maximum height of an element’s box.

```CSS
p {
  min-height: 150px;
  max-height: 300px;
}
```

In the example above, the height of all paragraphs will not shrink below 150 pixels and the height will not exceed 300 pixels.

What will happen to the contents of an element’s box if the max-height property is set too low? It’s possible for the content to spill outside of the box, resulting in content that is not legible.

### 6.Overflow ###

All of the components of the box model comprise an element’s size. For example, an image that has the following dimensions is `364` pixels wide and `244` pixels tall.

* 300 pixels wide
* 200 pixels tall
* 10 pixels padding on the left and right
* 10 pixels padding on the top and bottom
* 2 pixels border on the left and right
* 2 pixels border on the top and bottom
* 20 pixels margin on the left and right
* 10 pixels margin on the top and bottom

The total dimensions (364px by 244px) are calculated by adding all of the vertical dimensions together and all of the horizontal dimensions together. Sometimes, these components result in an element that is larger than the parent’s containing area.

How can we ensure that we can view all of an element that is larger than its parent’s containing area?

The overflow property controls what happens to content that spills, or overflows, outside its box. The most commonly used values are:

* `hidden`—when set to this value, any content that overflows will be hidden from view.
* `scroll`—when set to this value, a scrollbar will be added to the element’s box so that the rest of the content can be viewed by scrolling.
* `visible`—when set to this value, the overflow content will be displayed outside of the containing element. Note, this is the default value.

```CSS
p {
  overflow: scroll; 
}
```

In the example above, if any of the paragraph content overflows (perhaps a user resizes their browser window), a scrollbar will appear so that users can view the rest of the content.

The overflow property is set on a parent element to instruct a web browser on how to render child elements. For example, if a div’s overflow property is set to scroll, all children of this div will display overflowing content with a scroll bar.

For a more in-depth look at overflow, including additional properties like `overflow-x` and `overflow-y` that separate out the horizontal and vertical values, head over to the MDN [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow).

### 7. Resetting Defaults ###

All major web browsers have a default stylesheet they use in the absence of an external stylesheet. These default stylesheets are known as user agent stylesheets. In this case, the term user agent is a technical term for the browser.

User agent stylesheets often have default CSS rules that set default values for padding and margin. This affects how the browser displays HTML elements, which can make it difficult for a developer to design or style a web page.

Many developers choose to reset these default values so that they can truly work with a clean slate.

```CSS
* {
  margin: 0;
  padding: 0;
}
```

The code in the example above resets the default margin and padding values of all HTML elements. It is often the first CSS rule in an external stylesheet.

Note that both properties are both set to 0. When these properties are set to 0, they do not require a unit of measurement.

### 8. Visibility ###

Elements can be hidden from view with the visibility property.

The visibility property can be set to one of the following values:

* `hidden` — hides an element.
* `visible` — displays an element.
* `collapse` — collapses an element.

```CSS
<ul>
  <li>Explore</li>
  <li>Connect</li>
  <li class="future">Donate</li>
</ul>
```

```CSS
.future {
  visibility: hidden;
}
```

In the example above, the list item with a class of future will be hidden from view in the browser.

Keep in mind, however, that users can still view the contents of the list item (e.g., Donate) by viewing the source code in their browser. Furthermore, the web page will only hide the contents of the element. It will still leave an empty space where the element is intended to display.

Note: What’s the difference between display: none and visibility: hidden? An element with display: none will be completely removed from the web page. An element with visibility: hidden, however, will not be visible on the web page, but the space reserved for it will.

### 9. Review CSS: The Box Model ###

Understanding the box model is an important step towards learning more advanced HTML and CSS topics. Let’s review what we learned:

* The box model comprises a set of properties used to create space around and between HTML elements.
* The height and width of a content area can be set in pixels or percentages.
* Borders surround the content area and padding of an element. The color, style, and thickness of a border can be set with CSS properties.
* Padding is the space between the content area and the border. It can be set in pixels or percent.
* Margin is the amount of spacing outside of an element’s border.
* Horizontal margins add, so the total space between the borders of adjacent elements is equal to the sum of the right margin of one element and the left margin of the adjacent element.
* Vertical margins collapse, so the space between vertically adjacent elements is equal to the larger margin.
* `margin: 0 auto` horizontally centers an element inside of its parent content area, if it has a width.
* The `overflow` property can be set to display, `hide`, or `scroll`, and dictates how HTML will render content that overflows its parent’s content area.
* The `visibility` property can hide or show elements.

---

## Changing The Box Model ##

The box model, however, has an awkward limitation regarding box dimensions.

This limitation is best illustrated with an example.

```CSS
<h1>Hello World</h1>
h1 {
  border: 1px solid black;
  height: 200px;
  width: 300px;
  padding: 10px;
}
```

In the example above, a heading element’s box has solid, black, 1 pixel thick borders. The height of the box is 200 pixels, while the width of the box is 300 pixels. A padding of 10 pixels has also been set on all four sides of the box’s content.

Unfortunately, under the current box model, the border thickness and the padding will affect the dimensions of the box.

* The 10 pixels of padding increases the height of the box to 220 pixels and the width to 320 pixels. Next, the 1-pixel thick border increases the height to 222 pixels and the width to 322 pixels.

Under this box model, the border thickness and padding are added to the overall dimensions of the box. This makes it difficult to accurately size a box. Over time, this can also make all of a web page’s content difficult to position and manage.

In this brief lesson, you’ll learn how to use a different technique that avoids this problem altogether.

> Types and Topics:

1. Content-Box
2. Border-Box
3. Review: Changing The Box Model

### 1. Content-Box ###

Many properties in CSS have a default value and don’t have to be explicitly set in the stylesheet.

For example, the default `font-weight` of text is `normal`, but this property-value pair is not typically specified in a stylesheet.

The same can be said about the box model that browsers assume. In CSS, the box-sizing property controls the type of box model the browser should use when interpreting a web page.

The default value of this property is content-box. This is the same box model that is affected by border thickness and padding.

![box model](https://content.codecademy.com/courses/updated_images/htmlcssdiagram_contentbox_Updated_1.svg)

### 2. Border-Box ###

Box Model: Border-Box
Fortunately, we can reset the entire box model and specify a new one: border-box.

```CSS
* {
  box-sizing: border-box;
}
```

The code in the example above resets the box model to border-box for all HTML elements. This new box model avoids the dimensional issues that exist in the former box model you learned about.

In this box model, the height and width of the box will remain fixed. The border thickness and padding will be included inside of the box, which means the overall dimensions of the box do not change.

```CSS
<h1>Hello World</h1>
* {
  box-sizing: border-box;
}
 
h1 {
  border: 1px solid black;
  height: 200px;
  width: 300px;
  padding: 10px;
}
```

In the example above, the height of the box would remain at 200 pixels and the width would remain at 300 pixels. The border thickness and padding would remain entirely inside of the box.

![border box](https://content.codecademy.com/courses/web-101/htmlcss1-diagram__borderbox.svg)

### Review: 3. Changing the Box Model ###

In this lesson, you learned about an important limitation of the default box model: box dimensions are affected by border thickness and padding.

Let’s review what you learned:

* In the default box model, box dimensions are affected by border thickness and padding.
* The `box-sizing` property controls the box model used by the browser.
* The default value of the box-sizing property is `content-box`.
* The value for the new box model is `border-box`.
* The `border-box` model is not affected by border thickness or padding.

## Display and Positioning ##

Flow of HTML
A browser will render the elements of an HTML document that has no CSS from left to right, top to bottom, in the same order as they exist in the document. This is called the flow of elements in HTML.

In addition to the properties that it provides to style HTML elements, CSS includes properties that change how a browser positions elements. These properties specify where an element is located on a page, if the element can share lines with other elements, and other related attributes.

In this lesson, you will learn five properties for adjusting the position of HTML elements in the browser:

### Topic ###

1. position
2. display
3. z-index
4. float
5. clear

Each of these properties will allow us to position and view elements on a web page. They can be used in conjunction with any other styling properties you may know.

#### 1. Position ####

Position
Take a look at the block-level elements in the image below:

![Diagram of block-level elements](https://static-assets.codecademy.com/Courses/Learn-CSS/Display-Position/Position-updated.png)

Block-level elements like these boxes create a block the full width of their parent elements, and they prevent other elements from appearing in the same horizontal space.

Notice the block-level elements in the image above take up their own line of space and therefore don’t overlap each other. In the browser to the right, you can see block-level elements also consistently appear on the left side of the browser. This is the default position for block-level elements.

The default position of an element can be changed by setting its position property. The position property can take one of five values:

* static - the default value (it does not need to be specified)
* relative
* absolute
* fixed
* sticky

In the next few exercises, you’ll learn about the values in the list above. For now, it’s important to understand that if you favor the default position of an HTML element, you don’t need to set its position property.

##### Position: Relative #####

This value allows you to position an element relative to its default static position on the web page.

```CSS
.green-box {
  background-color: green;
  position: relative;
}
```

Although the code in the example above instructs the browser to expect a relative positioning of the .green-box element, it does not specify where the .green-box element should be positioned on the page. This is done by accompanying the position declaration with one or more of the following offset properties that will move the element away from its default static position:

* `top` - moves the element down from the top.
* `bottom` - moves the element up from the bottom.
* `left` - moves the element away from the left side (to the right).
* `right` - moves the element away from the right side (to the left).

You can specify values in pixels, ems, or percentages, among others, to dial in exactly how far you need the element to move. It’s also important to note that offset properties will not work if the element’s position property is the default static.

```CSS
.green-box {
  background-color: green;
  position: relative;
  top: 50px;
  left: 120px;
}
```

In the example above, the element of green-box class will be moved down 50 pixels, and to the right 120 pixels, from its default static position. The image below displays the new position of the box.

![Diagram of an element with relative position](https://static-assets.codecademy.com/Courses/Learn-CSS/Display-Position/Relative.png)

Offsetting the relative element will not affect the positioning of other elements.

##### Position: Absolute #####

When an element’s position is set to `absolute`, all other elements on the page will ignore the element and act like it is not present on the page. The element will be positioned relative to its closest positioned parent element, while offset properties can be used to determine the final position from there. Take a look at the image below:

![Diagram of element with absolute position](https://static-assets.codecademy.com/Courses/Learn-CSS/Display-Position/position-absolute.png)

The “Website building in progress. Please come back later!” text is displaced from its static position at the top left corner of its parent container. It has offset property declarations of top: 300px; and right: 0px;, positioning it 300 pixels down, and 0 pixels from the right side of the page.

##### Position: Fixed #####

When an element’s position is set to absolute, as in the last exercise, the element will scroll with the rest of the document when a user scrolls.

We can fix an element to a specific position on the page (regardless of user scrolling) by setting its position to fixed, and accompanying it with the familiar offset properties top, bottom, left, and right.

```CSS
.title {
  position: fixed;
  top: 0px;
  left: 0px;
}
```

In the example above, the .title element will remain fixed to its position no matter where the user scrolls on the page, like in the image below:

![Diagram of position fixed](https://static-assets.codecademy.com/Courses/Learn-CSS/Display-Position/Fixed.gif)

This technique is often used for navigation bars on a web page.

##### Position: Sticky #####

Since static and relative positioned elements stay in the normal flow of the document, when a user scrolls the page (or parent element) these elements will scroll too. And since fixed and absolute positioned elements are removed from the document flow, when a user scrolls, these elements will stay at their specified offset position.

The sticky value is another position value that keeps an element in the document flow as the user scrolls, but sticks to a specified position as the page is scrolled further. This is done by using the sticky value along with the familiar offset properties, as well as one new one.

```CSS
.box-bottom {
  background-color: darkgreen;
  position: sticky;
  top: 240px;
}
```

In the example above, the `.box-bottom` `<div>` will remain in its relative position, and scroll as usual. When it reaches 240 pixels from the top, it will stick to that position until it reaches the bottom of its parent container where it will “unstick” and rejoin the flow of the document.

![Diagram of position sticky](https://static-assets.codecademy.com/Courses/Learn-CSS/Display-Position/Sticky.gif)

##### Z-Index #####

When boxes on a web page have a combination of different positions, the boxes (and therefore, their content) can overlap with each other, making the content difficult to read or consume.

```CSS
.blue-box {
  background-color: blue;
}
 
.green-box {
  background-color: green;
  position: relative;
  top: -170px;
  left: 170px;
}
```

In the example above, the .green-box element overlaps on top of the .blue-box element.

The z-index property controls how far back or how far forward an element should appear on the web page when elements overlap. This can be thought of as the depth of elements, with deeper elements appearing behind shallower elements.

The z-index property accepts integer values. Depending on their values, the integers instruct the browser on the order in which elements should be layered on the web page.

```CSS
.blue-box {
  background-color: blue;
  position: relative;
  z-index: 1;
}
 
.green-box {
  background-color: green;
  position: relative;
  top: -170px;
  left: 170px;
}
```

In the example above, we set the .blue-box position to relative and the z-index to 1. We changed position to relative, because the z-index property does not work on static elements. The z-index of 1 moves the .blue-box element forward, because the z-index value has not been explicitly specified for the .green-box element, which means it has a default z-index value of 0. Take a look the example image below:

![Diagram of z-index](https://static-assets.codecademy.com/Courses/Learn-CSS/Display-Position/Z-index.png)

#### 2. Inline Display ####

Every HTML element has a default display value that dictates if it can share horizontal space with other elements. Some elements fill the entire browser from left to right regardless of the size of their content. Other elements only take up as much horizontal space as their content requires and can be directly next to other elements.

In this lesson, we’ll cover three values for the display property: `inline, block, and inline-block`.

The default display for some elements, such as `<em>`, `<strong>`, and `<a>`, is called inline. Inline elements have a box that wraps tightly around their content, only taking up the amount of space necessary to display their content and not requiring a new line after each element. The height and width of these elements cannot be specified in the CSS document. For example, the text of an anchor tag `(<a>)` will, by default, be displayed on the same line as the surrounding text, and it will only be as wide as necessary to contain its content. inline elements cannot be altered in size with the height or width CSS properties.

```HTML
To learn more about <em>inline</em> elements, read <a href="#">MDN documentation</a>.
```

In the example above, the `<em>` element is inline, because it displays its content on the same line as the content surrounding it, including the anchor tag. This example will display:

To learn more about inline elements, read [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements).

The CSS display property provides the ability to make any element an inline element. This includes elements that are not inline by default such as paragraphs, divs, and headings.

```CSS
h1 {
  display: inline;
}
```

The CSS in the example above will change the display of all `<h1>` elements to inline. The browser will render `<h1>` elements on the same line as other inline elements immediately before or after them (if there are any).

##### Display: Block #####

Some elements are not displayed in the same line as the content around them. These are called block-level elements. These elements fill the entire width of the page by default, but their width property can also be set. Unless otherwise specified, they are the height necessary to accommodate their content.

Elements that are block-level by default include all levels of heading elements `(<h1> through <h6>), <p>, <div>` and `<footer>`. For a complete list of block level elements, visit the MDN documentation.

```CSS
strong {
  display: block;
}
```

In the example above, all `<strong>` elements will be displayed on their own line, with no content directly on either side of them even though their contents may not fill the width of most computer screens.

##### Display: Inline-Block #####

The third value for the display property is inline-block. Inline-block display combines features of both inline and block elements. Inline-block elements can appear next to each other and we can specify their dimensions using the width and height properties. Images are the best example of default inline-block elements.

For example, the `<div>`s below will be displayed on the same line and with the specified dimensions:

![inline block example](https://static-assets.codecademy.com/Courses/Learn-CSS/Display-Position/display-inline-block.png)

Let’s take a look at the code:

```CSS
<div class="rectangle">
  <p>I’m a rectangle!</p>
</div>
<div class="rectangle">
  <p>So am I!</p>
</div>
<div class="rectangle">
  <p>Me three!</p>
</div>
.rectangle {
  display: inline-block;
  width: 200px;
  height: 300px;
}
```

There are three rectangular divs that each contain a paragraph of text. The .rectangle `<div>`s will all appear inline (provided there is enough space from left to right) with a width of 200 pixels and height of 300 pixels, even though the text inside of them may not require 200 pixels by `300 pixels` of space.

##### Float #####

So far, you’ve learned how to specify the exact position of an element using offset properties. If you’re simply interested in moving an element as far left or as far right as possible in the container, you can use the float property.

The float property is commonly used for wrapping text around an image. Note, however, that moving elements left or right for layout purposes is better suited for tools like `CSS grid` and `flexbox`, which you’ll learn about later on.

The float property is often set using one of the values below:

`left` - moves, or floats, elements as far left as possible.
`right` - moves elements as far right as possible.

```CSS
.green-section {
  width: 50%;
  height: 150px;
}
 
.orange-section {
  background-color: orange;
  width: 50%;
  float: right;
}
```

In the example above, we float the `.orange-section` element to the right. This works for static and relative positioned elements. See the result of the code below:

![Diagram of an element floating on the right](https://static-assets.codecademy.com/Courses/Learn-CSS/Display-Position/Float.png)

Floated elements must have a width specified, as in the example above. Otherwise, the element will assume the full width of its containing element, and changing the float value will not yield any visible results.

##### Clear #####

The float property can also be used to float multiple elements at once. However, when multiple floated elements have different heights, it can affect their layout on the page. Specifically, elements can “bump” into each other and not allow other elements to properly move to the left or right.

The clear property specifies how elements should behave when they bump into each  other on the page. It can take on one of the following values:

`left`—the left side of the element will not touch any other element within the same containing element.

`right`—the right side of the element will not touch any other element within the same containing element.

`both`—neither side of the element will touch any other element within the same containing element.

`none`—the element can touch either side.

```CSS
div {
  width: 200px;
  float: left;
}
 
div.special {
  clear: left;
}
```

In the example above, all `<div>`s on the page are floated to the left side. The element with class special did not move all the way to the left because a taller `<div>` blocked its positioning. By setting its clear property to left, the special `<div>` will be moved all the way to the left side of the page.

## Review: Display and Positioning ##

Great job! In this lesson, you learned how to control the positioning of elements on a web page.
Let’s review what you’ve learned so far:

* The `position` property allows you to specify the position of an element.
* When set to `relative`, an element’s position is relative to its default position on the page.
* When set to `absolute`, an element’s position is relative to its closest positioned parent element. It can be pinned to any part of the web page, but the element will still move with the rest of the document when the page is scrolled.
* When set to `fixed`, an element’s position can be pinned to any part of the web page. The element will remain in view no matter what.
* When set to `sticky`, an element can stick to a defined offset position when the user scrolls its parent container.
* The `z-index` of an element specifies how far back or how far forward an element appears on the page when it overlaps other elements.
* The `display` property allows you to control how an element flows vertically and horizontally in a document.
* `inline` elements take up as little space as possible, and they cannot have manually adjusted width or height.
* `block` elements take up the width of their container and can have manually adjusted heights.
* `inline-block` elements can have set width and height, but they can also appear next to each other and do not take up their entire container width.
* The `float` property can move elements as far left or as far right as possible on a web page.
* You can `clear` an element’s left or right side (or both) using the clear property.
