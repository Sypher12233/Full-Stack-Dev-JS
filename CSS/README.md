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

### Type ###

* A selector is used to target the specific HTML element(s) to be styled by the declaration. One selector you may already be familiar with is the type selector.
* This is an instance of using the type selector! The element type is p, which comes from the HTML `<p>` tag.

> Some important notes on the type selector:

* The type selector does not include the angle brackets.
* Since element types are often referred to by their opening tag name, the type selector is sometimes referred to as the tag name or element selector.
* .
