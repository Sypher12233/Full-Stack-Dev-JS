# CSS #

* Cascading Style Sheets or CSS is a language web developers use to style the HTML content on a web page.
* CSS is the language that provides *style* to the content of an html page.
* This includes colors, fonts, positioning, layout and more!
* CSS contains *selectors* which specify the html elements to which the style should be applied as well as *visual rules* that specify how that content should be displayed.

## Setup and Syntax ##

* CSS Anatomy
* Inline Styles
* Internal Stylesheet
* External Stylesheet

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

### Review: CSS: Setup and Syntax ###

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
2. Universal
3. Class
4. Multiple Classes
5. ID
6. Attributes
7. Pseudo-Code

### Type ###

* The type selector selects all elements of a given type.
* A selector is used to target the specific HTML element(s) to be styled by the declaration. One selector you may already be familiar with is the type selector.
* This is an instance of using the type selector! The element type is p, which comes from the HTML `<p>` tag.

> Some important notes on the type selector:

* The type selector does not include the angle brackets.
* Since element types are often referred to by their opening tag name, the type selector is sometimes referred to as the tag name or element selector.

### Universal ###

* the universal selector selects all elements of any type.
* The universal selector uses the `*` character in the same place where you specified the type selector in a ruleset, like so:

```CSS
* { 
  font-family: Verdana;
}
```

### Class ###

* CSS is not limited to selecting elements by their type. As you know, HTML elements can also have attributes. When working with HTML and CSS a class attribute is one of the most common ways to select an element.

```CSS
* <p class='brand'>Sole Shoe Company</p>
```

* The paragraph element in the example above has a class attribute within the opening tag of the `<p>` element. The class attribute is set to `'brand'`. To select this element using CSS, we can create a ruleset with a class selector of `.brand`.

```CSS
.brand {
 
}
```

### Multiple Classes ###

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

### ID ###

```HTML
* <h1 id='large-title'> ... </h1>
```

* In contrast to class which accepts multiple values, and can be used broadly throughout an HTML document, an element’s `id` can only have a single value, and only be used once per page.
* To select an element’s ID with CSS, we prepend the id name with a number sign `#`. For instance, if we wanted to select the HTML element in the example above, it would look like this:

```CSS
#large-title {
 
}
```

### Attributes ###

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

### Pseudo-Code ###

* A pseudo-class can be attached to any selector. It is always written as a colon : followed by a name. For example `p:hover`.

```CSS
p:hover {
  background-color: lime;
}
```

* In the above code, whenever the mouse hovers over a paragraph element, that paragraph will have a lime-colored background.

#### Classes and IDs ####

* Classes and IDs

* CSS can select HTML elements by their type, class, and ID. CSS classes and IDs have different purposes, which can affect which one you use to style HTML elements.
* CSS classes are meant to be reused over many elements. By writing CSS classes, you can style elements in a variety of ways by mixing classes. For instance, imagine a page with two headlines. One headline needs to be bold and blue, and the other needs to be bold and green. Instead of writing separate CSS rules for each headline that repeat each other’s code, it’s better to write a .bold CSS rule, a .green CSS rule, and a .blue CSS rule. Then you can give one headline the bold green classes, and the other the bold blue classes.
