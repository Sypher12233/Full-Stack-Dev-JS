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
* Typography
* Links and Buttons
* Breadcrumbs
* Grids and Spacing
* Grid Essentials
* Flexbox
* Sizing Elements
* Media Queries

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

```HTML
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

1. Font-Family
2. Font-Size
3. Font-Weight
4. Font-Align
5. Text-Layout
6. Color and Background color
7. Opacity
8. Background Image
9. Important
10. Review: Visual Rules

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

* Multi-Word Values

When specifying a typeface with multiple words, like Times New Roman, it is recommended to use quotation marks `(' ')` to group the words together, like so:

```CSS
h1 {
  font-family: 'Times New Roman';
}
```

* Web Safe Fonts

There is a selection of fonts that will appear the same across all browsers and operating systems. These fonts are referred to as web safe fonts. You can check out a complete list of web safe fonts here.

* Fallback Fonts and Font Stacks

Web safe fonts are good fallback fonts that can be used if your preferred font is not available.

```CSS
h1 {
  font-family: Caslon, Georgia, 'Times New Roman';
}
```

In the example above, Georgia and Times New Roman are fallback fonts to Caslon. When you specify a group of fonts, you have what is known as a font stack. A font stack usually contains a list of similar-looking fonts. Here, the browser will first try to use the Caslon font. If that’s not available, it will try to use a similar font, Georgia. And if Georgia is not available, it will try to use Times New Roman.

* Serif and Sans-Serif

You may be wondering what features make a font similar to another font. The fonts Caslon, Georgia, and Times New Roman are Serif fonts. Serif fonts have extra details on the ends of each letter, as opposed to Sans-Serif fonts, which do not have the extra details.

![Serif and Sans-Serif fonts](https://content.codecademy.com/courses/web-101/htmlcss1-diagram__fontanatomy.svg)

serif and sans-serif are also keyword values that can be added as a final fallback font if nothing else in the font stack is available.

```CSS
h1 {
  font-family: Caslon, Georgia, 'Times New Roman', serif;
}
```

In this final example, the font stack has 4 fonts. If the first 3 fonts aren’t available, the browser will use whatever serif font is available on the system.

#### Web Fonts Using `<link>` ####

Online font services, like [Google Fonts](https://fonts.google.com/), make it easy to find and link to fonts from your site. You can browse and select fonts that match the style of your website.

![Google Fonts Roboto Styles Page](https://static-assets.codecademy.com/Courses/Learn-CSS/Typography/google-fonts-styles-page.png)

When you select a font in Google Fonts, you’ll be shown all of the different styles available for that particular font. You can then select the styles you want to use on your site.

![Showing Selected Font Families](https://static-assets.codecademy.com/Courses/Learn-CSS/Typography/google-fonts-font-families.png)

When you’re done selecting a font and its styles, you can review your selected font family, and a `<link>` element will be automatically generated for you to use on your site!

```HTML
<head>
  <!-- Add the link element for Google Fonts along with other metadata -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
</head>
```

The generated `<link>` element needs to be added to the `<head>` element in your HTML document for it to be ready to be used in your CSS.

```CSS
p {
  font-family: 'Roboto', sans-serif;
}
```

You can then create font-family declarations in your CSS, just like how you learned to do with other fonts!

#### Web Fonts Using @font-face ####

Fonts can also be added using a [@font-face ruleset](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) in your CSS stylesheet instead of using a `<link>` element in your HTML document. As mentioned earlier, fonts can be downloaded just like any other file on the web. They come in a few different file formats, such as:

* OTF (OpenType Font)
* TTF (TrueType Font)
* WOFF (Web Open Font Format)
* WOFF2 (Web Open Font Format 2)

The different formats are a progression of standards for how fonts will work with different browsers, with `WOFF2` being the most progressive. It’s a good idea to include `TTF`, `WOFF`, and `WOFF2` formats with your `@font-face` rule to ensure compatibility on all browsers.

Let’s take a look at how to use @font-face using the same Roboto font as before:

![Google Fonts Download](https://static-assets.codecademy.com/Courses/Learn-CSS/Typography/google-fonts-download.png)

Within the “Selected Families” section, you can use the “Download” button to download the font files to your computer. The files will be downloaded as a single format, in this case, TTF. You can use a tool such as [Google Web Fonts Helper](https://google-webfonts-helper.herokuapp.com/fonts) to generate additional file types for WOFF and WOFF2.

When you have the files you need, move them to a folder inside your website’s working directory, and you’re ready to use them in a `@font-face` ruleset!

```CSS
@font-face {
  font-family: 'MyParagraphFont';
  src: url('fonts/Roboto.woff2') format('woff2'),
       url('fonts/Roboto.woff') format('woff'),
       url('fonts/Roboto.ttf') format('truetype');
}
```

Let’s take a look at the example above, line by line:

* The @font-face at-rule is used as the selector. It’s recommended to define the @font-face ruleset at the top of your CSS stylesheet.
* Inside the declaration block, the font-family property is used to set a custom name for the downloaded font. The name can be anything you choose, but it must be surrounded by quotation marks. In the example, the font is named 'MyParagraphFont', as this font will be used for all paragraphs.
* The src property contains three values, each specifying the relative path to the font file and its format. In this example, the font files are stored inside a folder named fonts within the working directory.
* Note that the ordering for the different formats is important because our browser will start from the top of the list and search until it finds a font format that it supports. Read more on format prioritization on CSS-Tricks.
* Once the `@font-face` at-rule is defined, you can use the font in your stylesheet!

```CSS
p {
  font-family: 'MyParagraphFont', sans-serif;
}
```

Like using any other fonts, you can use the font-family property to set the font on any HTML element. The downloaded font can be referenced with the name you provided as the font-family property’s value in the @font-face ruleset—in this case, 'MyParagraphFont'.

#### Review: Typography ####

Let’s review what you’ve learned so far:

* *__Typography__* is the art of arranging text on a page.
* Text can appear bold or thin with the `font-weight` property.
* Text can appear in italics with the `font-style` property.
* The vertical spacing between lines of text can be modified with the `line-height` property.
* *__Serif__* fonts have extra details on the ends of each letter. *__Sans-Serif__* fonts do not.
* *__Fallback fonts__* are used when a certain font is not installed on a user’s computer.
* The `word-spacing` property changes how far apart individual words are.
* The `letter-spacing` property changes how far apart individual letters are.
* The `text-align` property changes the horizontal alignment of text.
* `Google Fonts` provides free fonts that can be used in an HTML file with the `<link>` tag or the `@font-face` property.
* Local fonts can be added to a document with the `@font-face` property and the path to the font’s source.

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

### 5. Text Layout ###

You’ve learned how text can be defined by font family, weight, style, and transformations. Now you’ll learn about some ways text can be displayed or laid out within the element’s container.

* Letter Spacing

The letter-spacing property is used to set the horizontal spacing between the individual characters in an element. It’s not common to set the spacing between letters, but it can sometimes help the readability of certain fonts or styles. The letter-spacing property takes length values in units, such as 2px or 0.5em.

```CSS
p {
  letter-spacing: 2px;
}
```

In the example above, each character in the paragraph element will be separated by 2 pixels.

* Word Spacing

You can set the space between words with the word-spacing property. It’s also not common to increase the spacing between words, but it may help enhance the readability of bolded or enlarged text. The word-spacing property also takes length values in units, such as 3px or 0.2em.

```CSS
h1 {
  word-spacing: 0.3em;
}
```

In the example above, the word spacing is set to 0.3em. For word spacing, using em values are recommended because the spacing can be set based on the size of the font.

* Line Height

![diagram of line height property](https://content.codecademy.com/courses/updated_images/htmlcss1-diagram__leading_updated_1-01.svg)

We can use the line-height property to set how tall we want each line containing our text to be. Line height values can be a unitless number, such as 1.2, or a length value, such as 12px, 5% or 2em.

```CSS
p {
  line-height: 1.4;
}
```

In the example above, the height between lines is set to 1.4. Generally, the unitless value is preferred since it is responsive based on the current font size. In other words, if the `line-height` is specified by a unitless number, changing the font size will automatically readjust the line height.

* Text Alignment

The text-align property, which you may already be familiar with from the CSS Visual Rules lesson, aligns text to its parent element.

```CSS
h1 {
  text-align: right;
}
```

In the example above, the `<h1>` element is aligned to the right side, instead of the default left.

### 6. Color and Background color ###

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

### 7. Opacity ###

Opacity is the measure of how transparent an element is. It’s measured from 0 to 1, with 1 representing 100%, or fully visible and opaque, and 0 representing 0%, or fully invisible.

Opacity can be used to make elements fade into others for a nice overlay effect. To adjust the opacity of an element, the syntax looks like this:

```CSS
.overlay {
  opacity: 0.5;
}
```

In the example above, the `.overlay` element would be 50% visible, letting whatever is positioned behind it show through.

### 8. Background Image ###

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

### 9. Important ###

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

### 10. Review: Visual Rules ###

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

### Review: Display and Positioning ###

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

## Typography ##

Typography is the art of arranging text on a page. We'll look at:

* How to style and transform fonts.
* How to lay text out on a page.
* How to add external fonts to your web pages.

## Links and Buttons ##

Part of the reason it is so hard to know how to interact with this website is that there are few to no signifiers. To simplify an admittedly complex concept, signifiers (and the related [concept of affordances](https://en.wikipedia.org/wiki/Affordance)) are indicators that offer clues about how to interact with new objects or situations. For example, a drawer handle’s shape helps indicate to a user how they might interact with it (grab it with their hand and pull to open).

Showing interactivity and clickability through signifiers is a fundamental aspect of user interface design.

## L & B Topics ##

1. Browser Link Styles
2. Link Styling
3. Tooltips and Titles
4. Hover States and Cursors
5. Link States
6. Skeuomorphism and Flat Design
7. Review: Links and Buttons

### 1. Browser Link Styles ###

it’s important to note that maintaining a consistent user experience pattern, like the default behavior applied by browsers, is important for creating a consistent experience.

Traditionally, links are differentiated from regular text using blue text and underlines to draw users’ attention to their clickability. Many websites and user agent stylesheets still use these link styles.

Browsers also style two other link states: clicked (‘active’), and previously visited. In most user agent stylesheets, clicked (but not yet followed) links appear with red text, and previously visited links are styled with purple text.

> Adding Underlines to links

Add an underline to the link text inside `<a>` tags using the CSS [`text-decoration` property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration).

### 2. Link Styling ###

The most important aspect of styling links is differentiating links from surrounding text. The default blue-text, underlined link style accomplishes this differentiation using two CSS properties: color and text-decoration. These are both good ways to differentiate a link, and they are strong, familiar signifiers to most web users. Additionally, you could use CSS properties for `background-color`, `font-weight`, or `border`.

Link styles should not be replicated in other page text. Link color should sufficiently contrast the text colors in the rest of the design. For example, if links are underlined, other text should not be.

Anchor text, the text itself of a link, should be descriptive of the linked resource. Although this is not strictly a design problem, it is important for usability, accessibility, and SEO.

### 3. Tooltips and Titles ###

In addition to providing descriptive anchor text, it is sometimes helpful to provide additional context to explain links. This context can be particularly helpful when a link contains or consists of an image, icon, or another non-text element.

Additional context can be provided as text using the HTML `title` attribute. Although the `title` attribute can be provided to any HTML element, it is often extremely useful as additional context or advisory text for clickable elements.

Most browsers will display the text of a `title` attribute as a tooltip, meaning when a user hovers their cursor over an element, the text will appear in a small box near the cursor.

To add tooltips to a clickable element like a link, add it as the `title` attribute.

```HTML
<p>
  <a href="https://www.codecademy.com" title="Codecademy is an online learning platform">Codecademy</a> is the best place to learn to code!
</p>
```

### 4. Hover States and Cursors ###

In addition to styling elements themselves, other signifiers and visual feedback can be utilized during user interaction. The CSS pseudo-class :hover can be used to style elements on mouse hover. For instance, to change the color of link anchor text from blue to orange when a user hovers over it, the following CSS could be used:

```CSS
a {
  color: blue;
}
 
a:hover {
  color: orange;
}
```

The first rule sets link colors to blue by default, and when a user mouses over a link, the second rule will override the color attribute of the `<a>` tag and cause the text to turn orange. When the user moves the cursor away from the link, the text color will revert to blue.

In addition to any text style changes when hovering over a link, the user’s cursor should change from the default appearance to a pointng hand. The CSS `cursor` property is used to control this behavior. For example, to add this behavior to all `<a>` tags, the following rule could be used:

```CSS
a {
  cursor: pointer;
}
```

Luckily, this behavior is generally included in browser user agent stylesheets, and it also exists in the HTML5 default styles.

Hover state styling should never be used as the sole indication that something is a link. Users should not be forced to move their mouse over an entire document to tell what might be clickable. Additionally, hover states are not accessible in mobile browsers. Mobile devices do not generally have on-screen cursors, and users must actually touch the device (and possibly trigger a click event) to interact.

### 5. Link States ###

Links have four main states: `normal` (not clicked), `hover`, `active` (clicked), and `visited`. These four states have associated CSS pseudo-classes: `:link`, `:hover`, `:active`, and `:visited`. These four states can be used to give a full range of visual feedback to users about the status of their link interaction.

Each state should still make it clear that the element in question is a link, meaning it should not make text identical to non-link text or alter the link’s appearance so much that users could perceive its behavior differently.

The ordering of link state pseudo-class rules is important to reveal the proper information. When a user hovers and then clicks a link, those styles should always override the static styling surrounding a user’s history with the link (unvisited :link and :visited). The proper order of these rules is:

```TEXT
:link
:visited
:hover
:active
```

This ordering will ensure that the rules cascade properly and the user can receive the most applicable visual feedback about the state of the link.

### 6. Skeuomorphism and Flat Design ###

Buttons are another fundamental element of user interaction and navigation. They are called ‘buttons’ because they are often modeled on the appearance and behavior of real-life buttons. The concept of UI elements that replicate or imitate real-life counterparts is known as __*skeuomorphism*__.

In design, skeuomorphism is helpful for lowering the learning curve for users. If users can draw a metaphor between a familiar real-life object and an interface element, they are more likely to know how to use it without training. In the example of the button, if a web button appears similar to a real-life button on a physical interface, users can reliably figure out that the way to interact with the button is to press it.

__*Flat design*__ is an alternative approach to skeuomorphism which embraces the fact that computer interfaces do not necessarily need to model real-life interfaces. As users grow more familiar with digital displays and interfaces, designers have felt less need to model physical interactions and instead rely on other signifiers to indicate interactive elements. To generalize, flat design uses simplicity and lack of clutter for its UI elements.

#### Buttons: Skeuomorphic styling ####

Skeuomorphic button design aims to imitate the appearance and interactivity of a real-life button, often including a ‘raised’ appearance while the button is unpressed and a ‘pressed’ appearance when clicked.

Skeuomorphic button design can be implemented using image files, CSS rules, or a combination of both. CSS styles should be preferred over image files if possible, since they are faster to load, have smaller file sizes, and allow for a more consistent scaling and appearance across different screen sizes and resolutions. Modern CSS3 has support for many 2-D and 3-D effects and animations and can create many skeuomorphic button designs on its own.

If using CSS rules, the use of hover and/or active states is important in order to model interaction with a real button. For example, to implement a bare minimum 3-D button design, the following CSS ruleset could be used:

```CSS
.button {
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0px 5px;
}

.button:hover {
  cursor: pointer;
}
 
.button:active {
  margin-top: 5px;
  color: black;
  box-shadow: 0px 0px;
}
```

A button element can then be created with the following HTML:

```CSS
<div class="button">Click me</div>
```

The default state of the .button class has some basic ‘buttony’ appearance with a rounded border (border and border-radius properties) and a slightly raised appearance with the use of the box-shadow. The :hover cursor is added for visual feedback. When the button is clicked (:active), the box-shadow is removed, and the margin-top moves the button down by 5px, make it appear to be pressed.

The above example is only one very basic implementation of a 3-D button; there are many additional (and more attractive) ways to create skeuomorphic buttons.

#### Buttons: Flat Design ####

Flat design is so-called because of its 2-D appearance. Elements appear flat on the screen, and designers must rely on other styling and signifiers to indicate clickability.

Flat design buttons commonly appear as rectangles, rounded rectangles, or circles. These shapes are used ubiquitously for button elements, so users often perceive them as buttons and expect them to be clickable.

Since there are fewer obvious signifiers surrounding buttons in a flat design, they should be visually distinct from other page elements.

In flat designs in particular, button text is very important for clarity—the possibility of user confusion is reduced by pairing buttons with specific, descriptive labels. A button with ‘Click here’ leaves many more open questions than a button that reads ‘Submit form’.

#### Buttons: Hover States ####

Just as with links, buttons should make use of hover states and the `cursor: pointer` declaration. All the caveats about the shortcomings of hover states on mobile devices apply to buttons, but their use is still encouraged.

Users expect buttons to be clickable. Since buttons can consist of any number of total elements (rectangular/circular body, text, image(s)), all elements should be clickable, should display their clickability, and should result in the same behavior.

### 7. Review: Links and Buttons ###

* Added styles to make links recognizable and distinguishable from ordinary text.
* Added link styles that depend upon mouse interaction state, providing users with visual feedback for cursor hovering and mouse clicks.
* Added additional context text with the HTML `title` attribute.
* Styled buttons to be easily recognizable (in both skeuomorphic and flat design styles) using box shapes, border, hover, and active states.

Remember that the styles that you implemented here are only one of countless ways to communicate clickability and provide users with visual feedback. There is a huge amount of opportunity for variety and creativity while still following best practices and common user experience patterns.

## Breadcrumb Types ##

There are three major types of breadcrumbs:

1. Location
2. Attribute
3. Path

You’ve seen the first two types in our examples so far:

`Location based` breadcrumbs are based on where you are with respect to the navigation structure of the website. In our shoe shopping example above, the first three li elements are location based. We are in the “shoes” section of the website, which is contained within the “fashion” section, which is contained within the “shopping” section.

`Attribute based` breadcrumbs are based on the attributes of the page or product that you are browsing. In our example above, the final two li elements are attribute based. We are shopping for shoes that are “flats” and “brown”. Since the order of these attributes is not prescriptive, you’ll see some sites display these at the same level in the UI. If you want to allow users to remove attributes, provide an (x) button or similar to indicate they can be removed. Finally, breadcrumbs can be based on a user’s unique path through the site. For example, if they landed on the home page, browsed to the about page and finally the registration page, their breadcrumb trail may look like:

`Home > About > Register`

Note that this breadcrumb trail will be different for each user and each visit. For even mildly complex sites, the number of steps will become large. To simplify the display, the beginning of the trail is often abbreviated:

... > About > Register

## Grids and Spacing ##

> Grid Anatomy

Grid Anatomy
When designing a website, the grid comprises three major components: `columns`, `gutters`, and `margins`.

`Columns` are defined as the vertical sections that span the width of a page. In web design, it’s common to see layouts consisting of 12 or 16 columns, while other may only feature three columns. Defining the number of columns depends on what’s appropriate for your design, device, and or screen viewing size.

Next, a `gutter` is the negative space between each column. Gutters help in ensuring the columns don’t run together, which would negate the purpose of using a column-based grid.

`Margins` appear on the left and right sides of the column-based grid. These ensure the content of your designs doesn’t match up to the edges of the browser window.

It’s important to note, margins may vary depending on the width of the grid, browser window, or device. For larger displays, margins may be very noticeable while on smaller screens, they may have the same width as a gutter.

![Grid Anatomy](https://content.codecademy.com/programs/ui-design/css-grid-design/css_grid_diagram_3.svg)

### Grid Columns ###

Columns are the vertical containers that span the width of the page. They can be dependent on each other, meaning they are used to organize related content such as a continuation of a paragraph. They can also be independent of each other, meaning they are used for organizing the layout of unrelated content such as a sidebar. This allows for the flexibility of organizing information.

Within a grid, content can span multiple columns. What this means is that a website does not need to maintain the same column layout throughout. For example, a section of a website with a 12 column grid can have content that spans 4 columns, three times.

As the designer, you have the option to maintain this layout throughout the website. Or you can choose to use various layouts, including having the content span the whole width of the grid, half the grid or only a small portion of the grid.

While we will talk about this in more detail in just a few exercises, columns are separated by gutters. This design term is referred to as the space or gap between two columns. No content can spill into the gutter unless it is using the next column.

Columns can also be used to push, or offset content. Say you want to only display content on the right 4 columns of a page while using a 12 column grid. To do this, you can easily offset the content by 8 columns so the content is pushed to those right 4 columns.

### Grid Rows ###

Rows are the horizontal lines on a grid. Think of rows as invisible boxes that groups content together by height. Rows are commonly used in web designs to group content together and re-order other content to allow for more whitespace.

For example, let’s say you have a set of items that all span the same amount of columns and you want them to align across the page without being disrupted by other elements. One way to achieve this outcome is to wrap the content in a row component. This will force any content, not inside of the row, to be pushed away.

Again, remember that a row can be used to force content away from an area that has remaining columns not used. What does this mean? Great question.

Let’s say our design uses a 12 column grid and we want one element to span seven columns. That means we still have five unfilled columns to either the left or the right side. Naturally, any new content added to our document will try and fill this unused space. However, by placing a row element around our component that spans 7 columns we can force any new content to start beneath our component and leave the remaining 5 columns empty.

![Grid Rows](https://content.codecademy.com/programs/ui-design/css-grid-design/CSS_diagram_4_v1.svg)

### Grid Gutters ###

Gutters make up the negative space between columns. This design element helps to provide a natural break between elements aligned horizontally, while also helping to break rows of content vertically.

Note, there will always be one less gutter than the total number of columns. For example, if you are designing on a 12 column grid, then you will only have 11 gutters. One for every gap that separates each column.

While there is no set standard for a gutter width, it’s best practice to select a size that visually separates horizontal columns but is significantly thinner than the width of a column. The same can be said for vertical gutters.

Moreover, vertical and horizontal gutters do not need to match in size for a given grid layout. This is because you as a designer may want more vertical spacing than horizontal spacing when separating elements on a page.

Remember, if the gutter space is too tight, it can be hard to visually tell where one element ends and another starts. On the other hand, if the gutter space is too large, the design can be hard to follow.

![Grid Gutters](https://content.codecademy.com/programs/ui-design/css-grid-design/CSS_diagram_4_v1.svg)

## Responsive Grid ##

When designing web content, a designer needs to take into account the different screen-sizes a user might encounter and how that will affect a website’s layout. Many websites utilize responsive design, a set of techniques that allow a website’s content to shift based on the device or screen size. Because of these changes, responsive design requires a different number of total columns based on screen size, in order to accommodate content and keep it from being squished.

Consider your mobile, tablet and desktop devices. Now think about their viewable areas. All are substantially different in size. Thus, it’s common practice in web design to create responsive grid sizes. On a large or desktop device you may start with a 12 column grid, but on a small or mobile device, you adjust the 12 column grid to a 4 column grid.

As a designer, responsive grid design enables you to maximize the content on the screen, ensuring a more accessible experience for users. Additionally, your design elements will have sufficient space to breathe and content can naturally flow across the page.

![Responsive Grid](https://static-assets.codecademy.com/Courses/Learn-CSS/Responsive-Design/responsive_grid.png)

## Whitespace ##

Space is an important aspect of creating balanced and harmonious layouts in web design. As a designer, it’s important to understand how space can enhance as well as hurt your designs.

Whitespace, or negative space, refers to the emptiness between elements. Whether that’s in the gutter of the columns, or additional padding around a block of text. As a designer, don’t be afraid of using space to enhance the usability of your site and prioritize the content.

Let’s explore some examples of good whitespace. If you look at the examples in the workspace, you will notice that the website on the left embraces whitespace on its landing page. It focuses the user’s attention solely on the primary action, which is searching for content. In this case, the whitespace is white in color as well. However, whitespace isn’t always going to be white.

In the example on the right, you’ll notice that too much whitespace can negatively impact the flow of your site. By including too much spacing in between elements, it can cause issues for users trying to navigate seamlessly through the content.

Whitespace is broken up into passive and active, which we’ll explore in the next two exercises!

![Whitespace](https://content.codecademy.com/programs/ui-design/css-grid-design/Css_objective8_final_image_v2.jpg)

### Passive Whitespace ###

The first type of whitespace we will discuss is called passive whitespace or micro whitespace. Used to improve the aesthetics of the layout without guiding the user through a specific reading, flow, or content order, passive whitespace is sometimes referred to as the unconsidered space. The most frequent use of passive whitespace comes within text elements.

Different font families have varying amounts of passive whitespace and you can control aspects of them within your design by altering CSS properties such as line-height or margin when setting type.

By adjusting the space between your lines of text, you can improve the design’s overall legibility and balance.

If a site’s text is too tight or lacks sufficient margin below headings and paragraphs, it can be hard for users to consume the content. However, if the site’s text is too spaced out it can make it just as hard to read.

Finding a healthy balance between text that lacks sufficient spacing and text that has too much is an important task for designers.

![Passive](https://content.codecademy.com/programs/ui-design/css-grid-design/css%20diagram%206.svg)

### Active Whitespace ###

Unlike passive whitespace, which occurs more naturally, active whitespace is intentional. Also called macro whitespace, active whitespace refers to enhancing the overall page structure through space to emphasize content or guide users from one point to the next.

By adding active whitespace to a site’s design, we can spread our different sections out. This technique helps guide the user through the page’s content more effectively, allowing users to consume and absorb content more easily.

Active whitespace comes in many forms. But traditionally, it is achieved by adding space between a site’s elements. For instance, adding space to an article’s sidebar helps to visually separate the content from the page’s main content.

Additionally, this type of whitespace allows readers to quickly understand what they should be focusing on versus what is just supplementary details.

![Active](https://content.codecademy.com/programs/ui-design/css-grid-design/css%20diagram%207.jpg)

## Flexbox ##

There are two important components to a flexbox layout: `flex containers` and `flex items`.

A `flex container` is an element on a page that contains flex items.

All direct child elements of a flex container are `flex items`.

This distinction is important because some of the properties you will learn in this lesson apply to flex containers while others apply to flex items.
To designate an element as a flex container, set the element’s display property to flex or inline-flex. Once an item is a flex container, there are several properties we can use to specify how its children behave. In this lesson we will cover these properties:

1. justify-content
1. align-items
1. flex-grow
1. flex-shrink
1. flex-basis
1. flex
1. flex-wrap
1. align-content
1. flex-direction
1. flex-flow
1. Review: Flexbox

Flexbox is an elegant tool that makes it easy to address positioning issues that may have been difficult before.

### Display: flex ###

Any element can be a flex container. Flex containers are helpful tools for creating websites that respond to changes in screen sizes. Child elements of flex containers will change size and location in response to the size and position of their parent container.

For an element to become a flex container, its `display` property must be set to `flex`.

```CSS
div.container {
  display: flex;
}
```

In the example above, all divs with the class container are flex containers. If they have children, the children are flex items. A div with the declaration display: flex; will remain block level — no other elements will appear on the same line as it.

However, it will change the behavior of its child elements. Child elements will not begin on new lines. In the exercises that follow, we will cover how the flex display property impacts the positioning of child elements.

### Display: inline-flex ###

In the previous exercise, you might have observed that when we gave a div — a block level element — the display value of flex that it remained a block level element. What if we want multiple flex containers to display inline with each other?

If we didn’t want div elements to be block-level elements, we would use display: inline. Flexbox, however, provides the inline-flex value for the display property, which allows us to create flex containers that are also inline elements.

```HTML
<div class='container'>
  <p>I’m inside of a flex container!</p>
  <p>A flex container’s children are flex items!</p>
</div>
<div class='container'>
  <p>I’m also a flex item!</p>
  <p>Me too!</p>
</div>
```

```CSS
.container {
  width: 200px;
  height: 200px;
  display: inline-flex;
}
```

In the example above, there are two container divs. Without a width, each div would stretch the entire width of the page. The paragraphs within each div would also display on top of each other because paragraphs are block-level elements.

When we change the value of the display property to inline-flex, the divs will display inline with each other if the page is wide enough. As we progress through this lesson, we will cover in more detail how flex items are displayed.

Notice that in the example above, the size of the flex container is set. Currently, the size of the parent container will override the size of its child elements. If the parent element is too small, the flex items will shrink to accommodate the parent container’s size. We’ll explain why in a later exercise.

```HTML
<div class='container'>
  <div class='child'>
    <h1>1</h1>
  </div>
  <div class='child'>
    <h1>2</h1>
  </div>
</div>
```

```CSS
.container {
  width: 200px;
}
 
.child {
  display: inline-flex;
  width: 150px;
  height: auto;
}
```

In the example above, the .child divs will take up more width (300 pixels) than the container div allows (200 pixels). The .child divs will shrink to accommodate the container’s size. In later exercises, we will explore several ways to handle this.

### 1. justify-content ###

In previous exercises, when we changed the display value of parent containers to flex or inline-flex, all of the child elements (flex items) moved toward the upper left corner of the parent container. This is the default behavior of flex containers and their children. We can specify how flex items spread out from left to right, along the main axis. We will learn more about axes in a later exercise.

To position the items from left to right, we use a property called justify-content.

```CSS
.container {
  display: flex;
  justify-content: flex-end;
}
```

In the example above, we set the value of justify-content to flex-end. This will cause all of the flex items to shift to the right side of the flex container.

Below are five commonly used values for the justify-content property:

`flex-start` — all items will be positioned in order, starting from the left of the parent container, with no extra space between or before them.
`flex-end` — all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.
`center` — all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them.
`space-around` — items will be positioned with equal space before and after each item, resulting in double the space between elements.
`space-between` — items will be positioned with equal space between them, but no extra space before the first or after the last elements.
In the definitions above, “no extra space” means that margins and borders will be respected, but no more space (than is specified in the style rule for the particular element) will be added between elements. The size of each individual flex item is not changed by this property.

### 2. align-items ###

In the previous exercise, you learned how to justify the content of a flex container from left to right across the page. It is also possible to align flex items vertically within the container. The align-items property makes it possible to space flex items vertically.

```CSS
.container {
  align-items: baseline;
}
```

In the example above, the align-items property is set to baseline. This means that the baseline of the content of each item will be aligned.

Below are five commonly used values for the align-items property:

`flex-start` — all elements will be positioned at the top of the parent container.
`flex-end` — all elements will be positioned at the bottom of the parent container.
`center` — the center of all elements will be positioned halfway between the top and bottom of the parent container.
`baseline` — the bottom of the content of all items will be aligned with each other.
`stretch` — if possible, the items will stretch from top to bottom of the container (this is the default value; elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch).

These five values tell the elements how to behave along the cross axis of the parent container. In these examples, the cross axis stretches from top to bottom of the container. We’ll learn more about this in a future exercise.

You might be unfamiliar with the min-height and max-height properties, but you have used height and width before. min-height, max-height, min-width, and max-width are properties that ensure an element is at least a certain size or at most a certain size. You’ll see how these become useful as you move throughout this lesson.

### 3. flex-grow ###

In Exercise 3, we learned that all flex items shrink proportionally when the flex container is too small. However, if the parent container is larger than necessary then the flex items will not stretch by default. The flex-grow property allows us to specify if items should grow to fill a container and also which items should grow proportionally more or less than others.

```HTML
<div class='container'>
  <div class='side'>
    <h1>I’m on the side of the flex container!</h1>
  </div>
  <div class='center'>
    <h1>I'm in the center of the flex container!</h1>
  </div>
  <div class='side'>
    <h1>I'm on the other side of the flex container!</h1>
  </div>
</div>
```

```CSS
.container {
  display: flex;
}
 
.side {
  width: 100px;
  flex-grow: 1;
}
 
.center {
  width: 100px;
  flex-grow: 2;
}
```

In the example above, the .container div has a display value of flex, so its three child divs will be positioned next to each other. If there is additional space in the .container div (in this case, if it is wider than 300 pixels), the flex items will grow to fill it. The .center div will stretch twice as much as the .side divs. For example, if there were 60 additional pixels of space, the center div would absorb 30 pixels and the side divs would absorb 15 pixels each.

If a max-width is set for an element, it will not grow larger than that even if there is more space for it to absorb.

All of the previous properties we have learned are declared on flex containers, or the parent elements. This property — flex-grow — is the first we have learned that is declared on flex items.

### 4. flex-shrink ###

Just as the flex-grow property proportionally stretches flex items, the flex-shrink property can be used to specify which elements will shrink and in what proportions.

You may have noticed in earlier exercises that flex items shrank when the flex container was too small, even though we had not declared the property. This is because the default value of flex-shrink is 1. However, flex items do not grow unless the flex-grow property is declared because the default value of flex-grow is 0.

```HTML
<div class='container'>
  <div class='side'>
    <h1>I'm on the side of the flex container!</h1>
  </div>
  <div class='center'>
    <h1>I'm in the center of the flex container!</h1>
  </div>
  <div class='side'>
    <h1>I'm on the other side of the flex container!</h1>
  </div>
</div>
```

```CSS
.container {
  display: flex;
}
 
.side {
  width: 100px;
  flex-shrink: 1;
}
 
.center {
  width: 100px;
  flex-shrink: 2;
}
```

In the example above, the .center div will shrink twice as much as the .side divs if the .container div is too small to fit the elements within it. If the content is 60 pixels too large for the flex container that surrounds it, the .center div will shrink by 30 pixels and the outer divs will shrink by 15 pixels each. Margins are unaffected by flex-grow and flex-shrink.

Keep in mind, minimum and maximum widths will take precedence over flex-grow and flex-shrink. As with flex-grow, flex-shrink will only be employed if the parent container is too small or the browser is adjusted.

### 5. flex-basis ###

In the previous two exercises, the dimensions of the divs were determined by heights and widths set with CSS. Another way of specifying the width of a flex item is with the flex-basis property. flex-basis allows us to specify the width of an item before it stretches or shrinks.

```HTML
<div class='container'>
  <div class='side'>
    <h1>Left side!</h1>
  </div>
  <div class='center'>
    <h1>Center!</h1>
  </div>
  <div class='side'>
    <h1>Right side!</h1>
  </div>
</div>
```

```CSS
.container {
  display: flex;
}
 
.side {
  flex-grow: 1;
  flex-basis: 100px;
}
 
.center {
  flex-grow: 2;
  flex-basis: 150px;
}

```

In the example above, the .side divs will be 100 pixels wide and the .center div will be 150 pixels wide if the .container div has just the right amount of space (350 pixels, plus a little extra for margins and borders). If the .container div is larger, the .center div will absorb twice as much space as the .side divs.

The same would hold true if we assigned flex-shrink values to the divs above as well.

### 6. flex ###

The shorthand flex property provides a convenient way for specifying how elements stretch and shrink, while simplifying the CSS required. The flex property allows you to declare flex-grow, flex-shrink, and flex-basis all in one line.

Note: The flex property is different from the flex value used for the display property.

```CSS
.big {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 150px;
}
 
.small {
  flex-grow: 1;
  flex-shrink: 2;
  flex-basis: 100px;
}
```CSS

In the example above, all elements with class big will grow twice as much as elements with class small. Keep in mind, this doesn’t mean big items will be twice as big as small items, they’ll just take up more of the extra space.

The CSS below declares these three properties in one line.

```CSS
.big {
  flex: 2 1 150px;
}
 
.small {
  flex: 1 2 100px;
}
```

In the example above, we use the flex property to declare the values for flex-grow, flex-shrink, and flex-basis (in that order) all in one line.

```CSS
.big {
 flex: 2 1;
}
```

In the example above, we use the flex property to declare flex-grow and flex-shrink, but not flex-basis.

```CSS
.small {
  flex: 1 20px;
}
```

In the example above, we use the flex property to declare flex-grow and flex-basis. Note that there is no way to set only flex-shrink and flex-basis using 2 values.

### 7. align-content ###

Now that elements can wrap to the next line, we might have multiple rows of flex items within the same container. In a previous exercise, we used the align-items property to space flex items from the top to the bottom of a flex container. align-items is for aligning elements within a single row. If a flex container has multiple rows of content, we can use align-content to space the rows from top to bottom.

Below are some of the more commonly used align-content values:

* `flex-start` — all rows of elements will be positioned at the top of the parent container with no extra space between.
* `flex-end` — all rows of elements will be positioned at the bottom of the parent container with no extra space between.
* `center` — all rows of elements will be positioned at the center of the parent element with no extra space between.
* `space-between` — all rows of elements will be spaced evenly from the top to the bottom of the container with no space above the first or below the last.
* `space-around` — all rows of elements will be spaced evenly from the top to the bottom of the container with the same amount of space at the top and bottom and between each element.
* `stretch` — if a minimum height or no height is specified, the rows of elements will stretch to fill the parent container from top to bottom (default value).

```HTML
<div class='container'>
  <div class='child'>
    <h1>1</h1>
  </div>
  <div class='child'>
    <h1>2</h1>
  </div>
  <div class='child'>
    <h1>3</h1>
  </div>
  <div class='child'>
    <h1>4</h1>
  </div>
</div>
```

```CSS
.container {
  display: flex;
  width: 400px;
  height: 400px;
  flex-wrap: wrap;
  align-content: space-around;
}
 
.child {
  width: 150px;
  height: 150px;
}
```

In the example above, there are four flex items inside of a flex container. The flex items are set to be 150 pixels wide each, but the parent container is only 400 pixels wide. This means that no more than two elements can be displayed inline. The other two elements will wrap to the next line and there will be two rows of divs inside of the flex container. The align-content property is set to the value of space-around, which means the two rows of divs will be evenly spaced from top to bottom of the parent container with equal space before the first row and after the second, with double space between the rows.

> Note: The align-content property is declared on flex containers.

### 8. flex-direction ###

Up to this point, we’ve only covered flex items that stretch and shrink horizontally and wrap vertically. As previously stated, flex containers have two axes: a main axis and a cross axis. By default, the main axis is horizontal and the cross axis is vertical.

The main axis is used to position flex items with the following properties:

* justify-content
* flex-wrap
* flex-grow
* flex-shrink
The cross axis is used to position flex items with the following properties:

* align-items
* align-content
The main axis and cross axis are interchangeable. We can switch them using the flex-direction property. If we add the flex-direction property and give it a value of column, the flex items will be ordered vertically, not horizontally.

```HTML
<div class='container'>
  <div class='item'>
    <h1>1</h1>
  </div>
  <div class='item'>
    <h1>2</h1>
  </div>
  <div class='item'>
    <h1>3</h1>
  </div>
  <div class='item'>
    <h1>4</h1>
  </div>
  <div class="item">
    <h1>5</h1>
  </div>
</div>
```

```CSS
.container {
  display: flex;
  flex-direction: column;
  width: 1000px;
}
.item {
  height: 100px;
  width: 100px;
}
```

In the example above, the five divs will be positioned in a vertical column. All of these divs could fit in one horizontal row. However, the column value tells the browser to stack the divs one on top of the other. As explained above, properties like justify-content will not behave the way they did in previous examples.

The flex-direction property can accept four values:

* `row` — elements will be positioned from left to right across the parent element starting from the top left corner (default).
* `row-reverse` — elements will be positioned from right to left across the parent element starting from the top right corner.
* `column` — elements will be positioned from top to bottom of the parent element starting from the top left corner.
* `column-reverse` — elements will be positioned from the bottom to the top of the parent element starting from the bottom left corner.

> Note: The flex-direction property is declared on flex containers.

### 9. flex-flow ###

Like the shorthand flex property, the shorthand flex-flow property is used to declare both the flex-wrap and flex-direction properties in one line.

```CSS
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
```

In the example above, we take two lines to accomplish what can be done with one.

```CSS
.container {
  display: flex;
  flex-flow: column wrap;
}
```

In the example above, the first value in the flex-flow declaration is a flex-direction value and the second is a flex-wrap value. All values for flex-direction and flex-wrap are accepted.

> Note: The flex-flow property is declared on flex containers.

### 10. Nested FlexBoxes ###

So far, we’ve had multiple flex containers on the same page to explore flex item positioning. It is also possible to position flex containers inside of one another.

```HTML
<div class='container'>
  <div class='left'>
    <img class='small' src='#'/>
    <img class='small' src='#'/>
    <img class='small' src='#' />
  </div>
  <div class='right'>
    <img class='large' src='#' />
  </div>
</div>
```

```CSS
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
 
.left {
  display: inline-flex;
  flex: 2 1 200px;
  flex-direction: column;
}
 
.right {
  display: inline-flex;
  flex: 1 2 400px;
  align-items: center;
}
 
.small {
  height: 200px;
  width: auto;
}
 
.large {
  height: 600px; 
  width: auto;
}
```

In the example above, a div with three smaller images will display from top to bottom on the left of the page (.left). There is also a div with one large image that will display on the right side of the page (.right). The left div has a smaller flex-basis but stretches to fill more extra space; the right div has a larger flex-basis but stretches to fill less extra space. Both divs are flex items and flex containers. The items have properties that dictate how they will be positioned in the parent container and how their flex item children will be positioned in them.

### 11. Review: Flexbox ###

* `display: flex` changes an element to a block-level container with flex items inside of it.
* `display: inline-flex` allows multiple flex containers to appear inline with each other.
* `justify-content` is used to space items along the main axis.
* `align-items` is used to space items along the cross axis.
* `flex-grow` is used to specify how much space (and in what proportions) flex items absorb along the main axis.
* `flex-shrink` is used to specify how much flex items shrink and in what proportions along the main axis.
* `flex-basis` is used to specify the initial size of an element styled with flex-grow and/or `flex-shrink`.
* `flex` is used to specify `flex-grow`, `flex-shrink`, and `flex-basis` in one declaration.
* `flex-wrap` specifies that elements should shift along the cross axis if the flex container is not large enough.
* `align-content` is used to space rows along the cross axis.
* `flex-direction` is used to specify the main and cross axes.
* `flex-flow` is used to specify `flex-wrap` and `flex-direction` in one declaration.
* `Flex containers` can be nested inside of each other by declaring `display: flex` or `display: inline-flex` for children of flex containers.

## Sizing Elements ##

Relative Measurements
Modern technology allows users to browse the Internet via multiple devices, such as desktop monitors, mobile phones, tablets, and more. Devices of different screen sizes, however, pose a problem for web developers: how can we ensure that a website is readable and visually appealing across all devices, regardless of screen size?

The answer: responsive design! Responsive design refers to the ability of a website to resize and reorganize its content based on:

* The size of other content on the website.
* The size of the screen the website is being viewed on.

In this lesson, we’ll size HTML content relative to other content on a website.

You’ve probably noticed the unit of `pixels`, or `px`, used in websites. Pixels are used to size content to exact dimensions. For example, if you want a div to be exactly 500 pixels wide and 100 pixels tall, then the unit of px can be used. Pixels, however, are fixed, `hard coded` values. When a screen size changes (like switching from landscape to portrait view on a phone), elements sized with pixels can appear too small, overflow the screen, or become completely illegible.

With CSS, you can avoid hard coded measurements and use *relative measurements* instead. Relative measurements offer an advantage over `hard coded` measurements, as they allow for the proportions of a website to remain intact regardless of screen size or layout.

> Below are a few relative sizing elements;

1. em
2. rem
3. Percentages: Height and Width

### 1. Em ###

Incorporating relative sizing starts by using units other than pixels. One unit of measurement you can use in CSS to create relatively-sized content is the em, written as `em` in CSS.

Historically, the `em` represented the width of a capital letter M in the typeface and size being used. That is no longer the case.

Today, the `em` represents the `font-size` of the current element or the default base font-size set by the browser if none is given. For example, if the base font of a browser is 16 pixels (which is normally the default size of text in a browser), then `1 em` is equal to `16` pixels. `2 ems` would equal `32` pixels, and so on.

Let’s take a look at two examples that show how em can be used in CSS.

```CSS
.heading {
  font-size: 2em;
}
```

In the example above, no base font has been specified, therefore the `font size` of the heading element will be set relative to the default font size of the browser. Assuming the default font size is 16 pixels, then the font size of the heading element will be 32 pixels.

```CSS
.splash-section {
  font-size: 18px;
}
 
.splash-section h1 {
  font-size: 1.5em;
}
```

The example above shows how to use ems without relying on the default font size of the browser. Instead, a base font size (18px) is defined for all text within the splash-section element. The second CSS rule will set the font size of all h1 elements inside of splash-section relative to the base font of splash-section (18 pixels). The resulting font size of h1 elements will be 27 pixels.

### 2. Rem ###

The second relative unit of measurement in CSS is the `rem`, coded as `rem`.

`Rem` stands for `root em`. It acts similar to em, but instead of checking parent elements to size font, it checks the root element. The root element is the `<html>` tag.

Most browsers set the font size of `<html>` to 16 pixels, so by default rem measurements will be compared to that value. To set a different font size for the root element, you can add a CSS rule.

```CSS
html {
  font-size: 20px;
}
 
h1 {
  font-size: 2rem;
}
```

In the example above, the font size of the root element, `<html>`, is set to 20 pixels. All subsequent rem measurements will now be compared to that value and the size of h1 elements in the example will be 40 pixels.

One advantage of using `rems` is that all elements are compared to the same font size value, making it easy to predict how large or small font will appear. If you are interested in sizing elements consistently across an entire website, the `rem` measurement is the best unit for the job. If you’re interested in sizing elements in comparison to other elements nearby, then the `em` unit would be better suited for the job.

### 3. Percentages: Height & Width ###

To size non-text HTML elements relative to their parent elements on the page you can use  `percentages`.

Percentages are often used to size box-model values, like `width` and `height`, `padding`, `border`, and `margins`. They can also be used to set positioning properties (`top`, `bottom`, `left`, `right`).

To start, let’s size the height and width of an element using percentages.

```CSS
.main {
  height: 300px;
  width: 500px;
}
 
.main .subsection {
  height: 50%;
  width: 50%;
}
```

In the example above, `.main` and `.subsection` each represent `divs`. The .subsection div is nested within the .main div. Note that the dimensions of the parent `div (.main)` have been set to a height of 300 pixels and a width of 500 pixels.

When percentages are used, elements are sized relative to the dimensions of their parent element (also known as a container). Therefore, the dimensions of the .subsection div will be 150 pixels tall and 250 pixels wide. Be careful, a child element’s dimensions may be set erroneously if the dimensions of its parent element aren’t set first.

> Note:Because the box model includes padding, borders, and margins, setting an element’s width to 100% may cause content to overflow its parent container. While tempting, 100% should only be used when content will not have `padding`, `border`, or `margin`.

### 4. Percentages: Padding & Margin ###

Percentages can also be used to set the `padding` and `margin` of elements.

When `height` and `width` are set using percentages, you learned that the dimensions of child elements are calculated based on the dimensions of the parent element.

When percentages are used to set `padding` and `margin`, however, they are calculated based only on the width of the parent element.

For example, when a property like `margin-left` is set using a percentage (say 50%), the element will be moved halfway to the right in the parent container (as opposed to the child element receiving a margin half of its parent’s margin).

Vertical padding and margin are also calculated based on the width of the parent. Why? Consider the following scenario:

* A container div is defined, but its height is not set (meaning it’s flat).
* The container then has a child element added within. The child element does have a set height. This causes the height of its parent container to stretch to that height.
* The child element requires a change, and its height is modified. This causes the parent container’s height to also stretch to the new height. This cycle occurs endlessly whenever the child element’s height is changed!

In the scenario above, an unset height (the parent’s) results in a constantly changing height due to changes to the child element. This is why vertical padding and margin are based on the width of the parent, and not the height.

> Note: When using relative sizing, ems and rems should be used to size text and dimensions on the page related to text size (i.e. padding around text). This creates a consistent layout based on text size. Otherwise, percentages should be used.

## Other Topics ##
  
1. Width: Minimum & Maximum
1. Height: Minimum & Maximum
1. Scalling Images & Videos
1. Scaling Background Images
1. Review: Relative Measurements

### 1. Width: Minimum & Maximum ###

Although relative measurements provide consistent layouts across devices of different screen sizes, elements on a website can lose their integrity when they become too small or large. You can limit how wide an element becomes with the following properties:

* `min-width` — ensures a minimum width for an element.
* `max-width` — ensures a maximum width for an element.

```CSS
p {
  min-width: 300px;
  max-width: 600px;
}
```

In the example above, when the browser is resized, the width of paragraph elements will not fall below 300 pixels, nor will their width exceed 600 pixels.

When a browser window is narrowed or widened, text can become either very compressed or very spread out, making it difficult to read. These two properties ensure that content is legible by limiting the minimum and maximum widths.

Note: The unit of `pixels` is used to ensure hard limits on the dimensions of the element(s).

### 2. Height: Minimum & Maximum ###

You can also limit the minimum and maximum height of an element.

* `min-height` — ensures a minimum height for an element’s box.
* `max-height` — ensures a maximum height for an element’s box.

```CSS
p {
  min-height: 150px;
  max-height: 300px;
}
```

In the example above, the height of all paragraphs will not shrink below 150 pixels and the height will not exceed 300 pixels.

What will happen to the contents of an element if the `max-height` property is set too low for that element? It’s possible that content will overflow outside of the element, resulting in content that is not legible.

### 3. Scaling Images and Videos ###

Many websites contain a variety of different media, like images and videos. When a website contains such media, it’s important to make sure that it is scaled proportionally so that users can correctly view it.

```CSS
.container {
  width: 50%;
  height: 200px;
  overflow: hidden;
}
 
.container img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

In the example above, `.container` represents a `container div`. It is set to a width of `50%` (half of the browser’s width, in this example) and a height of `200 pixels`. Setting overflow to hidden ensures that any content with dimensions larger than the container will be hidden from view.

The second CSS rule ensures that images scale with the width of the container. The height property is set to auto, meaning an image’s height will automatically scale proportionally with the width. Finally, the last line will display images as block level elements (rather than inline-block, their default state). This will prevent images from attempting to align with other content on the page (like text), which can add unintended margin to the images.

It’s worth memorizing the entire example above. It represents a very common design pattern used to scale images and videos proportionally.

> Note: The example above scales the width of an image (or video) to the width of a container. If the image is larger than the container, the vertical portion of the image will overflow and will not display. To swap this behavior, you can set `max-height` to `100%` and `width` to `auto` (essentially swapping the values). This will scale the height of the image with the height of the container instead. If the image is larger than the container, the horizontal portion of the image will overflow and not display.

### 4. Scaling Background Images ###

Background images of HTML elements can also be scaled responsively using CSS properties.

```CSS
body {
  background-image: url('#');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

In the example above, the first CSS declaration sets the background image (# is a placeholder for an image URL in this example). The second declaration instructs the CSS compiler to not repeat the image (by default, images will repeat). The third declaration centers the image within the element.

The final declaration, however, is the focus of the example above. It’s what scales the background image. The image will cover the entire background of the element, all while keeping the image in proportion. If the dimensions of the image exceed the dimensions of the container then only a portion of the image will display.

### 5. Review: Relative Measurements ###

Let’s review what you learned:

* Content on a website can be sized relative to other elements on the page using relative measurements.
* The unit of `em` sizes font relative to the font size of a parent element.
* The unit of `rem` sizes font relative to the font size of a root element. That root element is the `<html>` element.
* `Percentages` are commonly used to size `box-model features`, like the `width`, `height`, `padding`, or `margin` of an element.
* When percentages are used to size width and height, child elements will be sized relative to the dimensions of their parent (remember that parent dimensions must first be set).
* Percentages can be used to set padding and margin. Horizontal and vertical padding and margin are set relative to the width of a parent element.
* The minimum and maximum width of elements can be set using `min-width` and `max-width`.
* The minimum and maximum height of elements can be set using `min-height` and `max-height`.
* When the height of an image or video is set, then its width can be set to `auto` so that the media scales proportionally. Reversing these two properties and values will also achieve the same result.
* A background image of an HTML element will scale proportionally when its `background-size` property is set to `cover`.

Relative units of measurement are a first step towards incorporating responsive design in a website. When combined with more advanced responsive techniques, you can create a seamless user experience regardless of a device’s screen size.

## Media Queries ##

CSS uses media queries to adapt a website’s content to different screen sizes. With media queries, CSS can detect the size of the current screen and apply different CSS styles depending on the width of the screen.

```CSS
@media only screen and (max-width: 480px) {
  body {
    font-size: 12px;
  }
}
```

The example above demonstrates how a media query is applied. The media query defines a rule for screens smaller than 480 pixels (approximately the width of many smartphones in landscape orientation).

> Let’s break this example down into its parts:

* `@media` — This keyword begins a media query rule and instructs the CSS compiler on how to parse the rest of the rule.
* `only screen` — Indicates what types of devices should use this rule. In early attempts to target different devices, CSS incorporated different media types (screen, print, handheld). The rationale was that by knowing the media type, the proper CSS rules could be applied. However, `“handheld”` and `“screen”` devices began to occupy a much wider range of sizes and having only one CSS rule per media device was not sufficient. screen is the media type always used for displaying content, no matter the type of device. The `only` keyword is added to indicate that this rule only applies to one media type (screen).
* and `(max-width : 480px)` — This part of the rule is called a media feature, and instructs the CSS compiler to apply the CSS styles to devices with a width of `480` pixels or `smaller`. Media features are the conditions that must be met in order to render the CSS within a media query.
* CSS rules are nested inside of the media query’s curly braces. The rules will be applied when the media query is met. In the example above, the text in the `body` element is set to a `font-size` of 12px when the user’s screen is less than `480px`.

1. Responsive Web Design
2. Viewport Meta Tag
3. Range
4. Dots Per Inch (DPI)
5. And Operator
6. Comma separated list
7. Breakpoints
8. Review: Media Queries

### 1. Responsive Web Design ###

When someone visits a website, it’s possible they are viewing it on a phone, tablet, computer, or even a TV monitor. Because screen sizes can vary greatly across different devices, it’s important for websites to resize and reorganize their content to best fit screens of all sizes.

When a website doesn’t respond to different screen sizes, the website may look odd or become indecipherable on certain devices. This usually occurs on smaller screens, like phones. When a website responds to the size of the screen it’s viewed on, it’s called a responsive website.

Because websites can be displayed on thousands of different screen sizes, they must be able to respond to a change in screen size and adapt the content so that users can access it.
When someone visits a website, it’s possible they are viewing it on a phone, tablet, computer, or even a TV monitor. Because screen sizes can vary greatly across different devices, it’s important for websites to resize and reorganize their content to best fit screens of all sizes.

When a website doesn’t respond to different screen sizes, the website may look odd or become indecipherable on certain devices. This usually occurs on smaller screens, like phones. When a website responds to the size of the screen it’s viewed on, it’s called a responsive website.

Because websites can be displayed on thousands of different screen sizes, they must be able to respond to a change in screen size and adapt the content so that users can access it.

### 2. Viewport Meta Tag ###

Thus far, we have been learning about creating responsive web designs with CSS. However, in order for us to enable this responsive CSS to work, we need to get familiar with the HTML viewport meta tag!

Let’s start with the viewport, which is the total viewable area for a user, this area varies depending on device. The viewport is smaller on a mobile device and larger on a desktop.

Based on the size of the viewport, the meta tag `(<meta>)` is used to instruct the browser on how to render the webpage’s scale and dimensions. For instance, say if a web page is 960px and the device is 320px wide. Adding the viewport meta tag will squish the content down until it is 320px — there is no need for the user to zoom out and view the whole page!

Inside the `<head>` element, we will find where the `<meta>` tag syntax is implemented:

```HTML
<!DOCTYPE html> 
<html lang="en"> 
  <head> 
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ...
  </head> 
```

We can break down the added  `<meta>` tag into the following essential components:

* the `name="viewport"` attribute: tells the browser to display the web page at the same width as its screen
* the content attribute: defines the values for the `<meta>` tag, including width and `initial-scale` the `width=device-width` key-value pair: controls the size of the viewport in which it sets the width of the viewport to equal the width of the device
* the `initial-scale=1` key-value pair: sets the initial zoom level (Read more about scale at [MDN’s viewport documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#viewport_basics) .

The viewport meta tag allows our web pages to be responsive and adapt a site’s contents to the users’ screen size. We’ll explore more on actually implementing this responsiveness in the later exercises, but for now, we need to first include the meta tag in our HTML file!

### 3. Range ###

Specific screen sizes can be targeted by setting multiple `width` and `height` media features. `min-width` and `min-height` are used to set the `minimum width` and `minimum height`, respectively. Conversely, `max-width` and `max-height` set the `maximum width` and `maximum height`, respectively.

By using multiple widths and heights, a range can be set for a media query.

```CSS
@media only screen and (min-width: 320px) and (max-width: 480px) {
    /* ruleset for 320px - 480px */
}
```

The example above would apply its CSS rules only when the screen size is between 320 pixels and 480 pixels. Notice the use of a second `and` keyword after the min-width media feature. This allows us to chain two requirements together.

The example above can be written using two separate rules as well:

```CSS
@media only screen and (min-width: 320px) { 
    /* ruleset for >= 320px */
}
 
 
@media only screen and (min-width: 480px) { 
    /* ruleset for >= 480px */
}
```

The first media query in the example above will apply CSS rules when the size of the screen meets or exceeds 320 pixels. The second media query will then apply CSS rules when the size of the screen meets or exceeds 480 pixels, meaning that it can override CSS rules present in the first media query or apply additional CSS rules that are not already present in the first.

Both examples above are valid, and it is likely that you will see both patterns used when reading another developer’s code.

### 4. Dots Per Inch (DPI) ###

Another media feature we can target is screen resolution. Many times we will want to supply higher quality media (images, video, etc.) only to users with screens that can support high resolution media. Targeting screen resolution also helps users avoid downloading high resolution (large file size) images that their screen may not be able to properly display.

To target by resolution, we can use `the min-resolution` and `max-resolution` media features. These media features accept a resolution value in either `dots per inch (dpi)` or `dots per centimeter (dpc)`. Learn more about resolution measurements here.

```CSS
@media only screen and (min-resolution: 300dpi) {
    /* CSS for high resolution screens */
}
```

The media query in the example above targets high resolution screens by making sure the screen resolution is at least 300 dots per inch. If the screen resolution query is met, then we can use CSS to display high resolution images and other media.

### 5. And Operator ###

In previous exercises, we chained multiple media features of the same type in one media query by using the __and__ operator. It allowed us to create a range by using `min-width` and `max-width` in the same media query.

The __and__ operator can be used to require multiple media features. Therefore, we can use the __and__ operator to require both a `max-width` of `480px` and to have a `min-resolution` of `300dpi`.

For example:

```CSS
@media only screen and (max-width: 480px) and (min-resolution: 300dpi) {
    /* CSS ruleset */
}
```

By placing the __and__ operator between the two media features, the browser will require __both__ media features to be true before it renders the CSS within the media query. The __and__ operator can be used to chain as many media features as necessary.

### 6. Comma Separated List ###

If only __one__ of multiple media features in a media query must be met, media features can be separated in a __comma separated__ list.

For example, if we needed to apply a style when only one of the below is true:

* The screen is more than 480 pixels wide
* The screen is in landscape mode
We could write:

```CSS
@media only screen and (min-width: 480px), (orientation: landscape) {
    /* CSS ruleset */
}
```

In the example above, we used a comma (`,`) to separate multiple rules. The example above requires only one of the media features to be true for its CSS to apply.

Note that the second media feature is orientation. The orientation media feature detects if the page has more width than height. If a page is wider, it’s considered landscape, and if a page is taller, it’s considered portrait.

### 7. Breakpoints ###

We know how to use media queries to apply CSS rules based on screen size and resolution, but how do we determine what queries to set?

The points at which media queries are set are called __breakpoints__. Breakpoints are the screen sizes at which your web page does not appear properly. For example, if we want to target tablets that are in landscape orientation, we can create the following breakpoint:

```CSS
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    /* CSS ruleset */
}
```

The example above creates a screen size range the size of a tablet in landscape mode and also identifies the orientation.

However, setting breakpoints for every device imaginable would be incredibly difficult because there are many devices of differing shapes and sizes. In addition, new devices are released with new screen sizes every year.

Rather than set breakpoints based on specific devices, the best practice is to resize your browser to view where the website naturally breaks based on its content. The dimensions at which the layout breaks or looks odd become your media query breakpoints. Within those breakpoints, we can adjust the CSS to make the page resize and reorganize.

By observing the dimensions at which a website naturally breaks, you can set media query breakpoints that create the best possible user experience on a project by project basis, rather than forcing every project to fit a certain screen size. Different projects have different needs, and creating a responsive design should be no different.

Check out this [list](https://content.codecademy.com/courses/freelance-1/unit-5/screen-sizes.png?_gl=1*x9bmy8*_ga*NDY3MTkyNDQyMi4xNjU2MTU0NDI3*_ga_3LRZM6TM9L*MTY1NjUxODQ1Ny4yMC4xLjE2NTY1MTkxMzUuNjA.) of breakpoints by device widths. Use it as a reference of screen widths to test your website to make certain it looks great across a variety of devices.

### 8. Review: Media Queries ###

Throughout this lesson, you learned:

* When a website responds to the size of the screen it’s viewed on, it’s called a __responsive website__.
* You can write __media queries__ to help with different screen sizes.
* Adding the viewport `<meta>` tag to our code allows us to control the width and scaling of the viewport so that it’s sized and scaled correctly on all devices.
* Media queries require __media features__. Media features are the conditions that must be met to render the CSS within a media query.
* Media features can detect many aspects of a user’s browser, including the screen’s width, height, resolution, orientation, and more.
* The and operator requires multiple media features to be true at once.
* A comma separated list of media features only requires one media feature to be true for the code within to be applied.
* The best practice for identifying where media queries should be set is by resizing the browser to determine where the content naturally breaks. Natural breakpoints are found by resizing the browser.
* With your knowledge of media queries and CSS, you can make websites that look great on any device, from a small phone to a huge television. By making your websites responsive, you’ll make it possible for any of your users to have a great experience.
