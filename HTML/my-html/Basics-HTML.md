# HTML #

* HTML, CSS, JavaScript and SQL are the languages that form the core of the World Wide Web today!
* HTML stand for *H*yper *T*ext *M*arkup *L*anguage.
* The *ML* in HTML stands for *Markup Language*.
* Markup refers to a way of annotating text that is distinguishable from the text itself. The same way that a teacher might “markup” a student essay by underlining topic sentences and circling spelling errors, HTML annotates the content within a web page.
* The first step to building a website is learning HTML.
* HTML is a practical place to start learning to code.
* You can build basic websites after learning a little html, with text, images and videos.
* You can always open up your work-in-progress website with your browser and see what you are building.

## HTML Structure ##

* The relationship between elements and their ancestor and descendent elements is known as *hierarchy*.
* Understanding HTML hierarchy is important because child elements can inherit styling and behavior from their parent element.

## Standards ##

* Whitespace
* Indentation
* Comments

## HTML tags ##

* A full list of available HTML tags can be found in [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

1. Emphasize `<em>`
2. Bold `<strong>`
3. Ordered `<ol>`and Unordered `<ul>` Lists
4. Image `<img>`
5. Video `<video>`

* An html tag is - the element name, surrounded by an opening `<` and closing `>` angle bracket.
* HTML separates content and annotation by using HTML tags.

## HTML Elements ##

1. Headings
2. Body
3. Link
4. Div
5. Attributes
6. Line Break
7. Head
8. Anchor

> Simply an element is - a unit of content in an HTML document formed by HTML tags and the text or media it contains.

* HTML tags are the "markup" for HTML.
* A tag and the content between these tags is called an html element.
* HTML paragraph element is made up of  an `<p>` opening tag, the content and  a `</p>` closing tag and inside these tags is where the content .
* When an element is contained inside another element, it is considered the *child* of that element.
* The *child* element is said to be *nested* inside the parent element.

## HTML Headings ##

* Headings in HTML is similar to headings in other types of media.
* Some times headings are used to describe the content like; the title of the movie or an educational article.
* There are six different headings in HTML.
* Headings can be used for a variety of purposes, like titling sections, articles, or other forms of content.

## HTML Body Element ##

* Only the content inside the opening and closing body tags can displayed to the screen.
* Many different type of content like text, images and buttons can be added to the body.

## HTML Link Element ##

* An html link element can be used to apply the *CSS* files to the current website.
* Example: `<a href=/resume/style.css>`.
* An HTML link tag is often used to create a connection between an HTML file and the CSS file and tells the browser to apply the CSS styles to the HTML.

## Div Element ##

* Div is a short for *Division* or a container that divides the page into sections.
* These sections are very useful for grouping elements in your HTML together.
* `<div>`s allow us to group HTML elements to apply the same styles for all HTML elements inside. We can also style the `<div>` element as a whole..
* `<div>`s can contain any text or other HTML elements, such as links, images, or videos.

## Attributes ##

1. Attributes are content added to the opening tag of an element, and can be used in different ways from providing information to styling the element.
2. Attributes are formed of the following two parts;

* The name of the attribute.
* The value of the attribute.

1. One commonly used attribute is the `id` attribute.
2. We can use the id attribute to specify different content (such as `<div>`s) and is really helpful when you use an element more than once, ids have several different purposes in HTML.
3. When we add an id to a `<div>`, we place it in the opening tag:

```HTML
<div id="intro">
  <h1>Introduction</h1>
</div>
```

### Displaying Text ###

* Paragraphs (`<p>`) contain a block of plain text.
* `<span>` contains short pieces of text or other HTML. They are used to separate small pieces of content that are on the same line as other content.

### Styling Text ###

* You can also style text using HTML tags. The `<em>` tag emphasizes text, while the `<strong>` tag highlights important text.
* The `<em>` tag will generally render as italic emphasis.
* The `<strong>` will generally render as bold emphasis.

## Line Break `<br>` ##

* The spacing between code in an HTML file doesn’t affect the positioning of elements in the browser. If you are interested in modifying the spacing in the browser, you can use HTML’s line break element: `<br>`.

## Ordered `<ol>`and Unordered `<ul>` Lists ##

* Individual list items must be added to the unordered list using the `<li>` tag. The `<li>` or list item tag is used to describe an item in a list.

## Image `<img>` ##

* Most elements require both opening and closing tags, but the `<img>` tag is a self-closing tag.

```HTML
<img src="image-location.jpg" />
```

* The `<img>` tag has a required attribute called src. The src attribute must be set to the image’s source, or the location of the image.
* The value of src must be the uniform resource locator (URL) of the image. A URL is the web address or local address where a file is stored.

### Image Alts ###

* The alt attribute, which means alternative text, brings meaning to the images on our sites.

```HTML
<img src="#" alt="A field of yellow sunflowers" />
```

> If the image on the web page is not one that conveys any meaningful information to a user (visually impaired or otherwise), the alt attribute should be left empty.

## Video `<video>` ##

* Like the `<img>` element, the `<video>` element requires a src attribute with a link to the video source.
* Unlike the `<img>` element however, the `<video>` element requires an opening and a closing tag.

```HTML
<video src="myVideo.mp4" width="320" height="240" controls>
  Video not supported
</video>
```

* After the src attribute, the `width` and `height` attributes are used to set the size of the video displayed in the browser. The `controls` attribute instructs the browser to include basic video controls such as pausing and playing.
* The text, `Video not supported`, between the opening and closing video tags will only be displayed if the browser is unable to load the video.

## Head Element ##

* The `<head>` element is used to give the browser some information about our webpage itself.
* The `<head>` element goes above our `<body>` tag.
* The `<head>` element contains the *metadata* for webpage. Metadata information about the page that is not displayed directly on the webpage.
* Unlike the information inside of the `<body>` tag, the metadata in the he888ad is information about the page itself.
* A browser’s tab displays the title specified in the `<title>` tag. The `<title>` tag is always inside of the `<head>`.

## Anchor Element ##

> Linking to external websites;

* You can add links to a web page by adding an anchor element `<a>` and including the text of the link in between the opening and closing tags.

```HTML
<a>This Is A Link To Google</a>
```

* he anchor element in the example above is incomplete without the href attribute. This attribute stands for hyperlink reference and is used to link to a path, or the address to where a file is located (whether it is on your computer or another location). The paths provided to the href attribute are often URLs.

```HTML
<a href="https://www.google.com/"> This is a link to Google</a>
```

* If you want a link to open in a new tab or in the existing one, you can use the  `<a>` element's `target` attribute.
* For a link to open in a new window, the `target` attribute requires a value of `_blank`, which can be directly added to the opening tag of the `<a>` (anchor) element.

```HTML
<a href="https://google.com" target="_blank">Google</a>
```

* The `target="_blank"` attribute, when used in modern browsers, will open new websites in a new tab.

> Linking to Relative Page

* Many sites also link to internal web pages like Home, About, and Contact.
* HTML files are often stored in the same folder, as shown in the example above. If the browser is currently displaying index.html, it also knows that about.html and contact.html are in the same folder. Because the files are stored in the same folder, we can link web pages together using a relative path.

```HTML
<a href="./contact.html">Contact</a>
```

* The `./` in `./index.html` tells the browser to look for the file in the current folder.
* A relative path is a filename that shows the path to a local file.

> Adding different content to a link:

* HTML allows you to turn nearly any element into a link by wrapping that element with an anchor element. With this technique, it’s possible to turn images into links by simply wrapping the `<img>` element with an `<a>` element.

```HTML
<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank"><img src="https://www.Prickly_Pear_Closeup.jpg" alt="A red prickly pear fruit"/></a>
```

> Linking to Same Page:

* When users visit our site, we want them to be able to click a link and have the page automatically scroll to a specific section.
* In order to link to a *target* on the same page, we must give the target an *id*, like this:

```HTML
<p id="top">This is the top of the page!</p>
<h1 id="bottom">This is the bottom! </h1>
```

* In this example, the `<p>` element is assigned an id of “top” and the `<h1>` element is assigned “bottom.” An id can be added to most elements on a webpage.
* An id should be descriptive to make it easier to remember the purpose of a link. The target link is a string containing the # character and the target element’s id.

```HTML
<ol>
  <li><a href="#top">Top</a></li>
  <li><a href="#bottom">Bottom</a></li>
</ol>
```

* In the example above, the links to `<p id="top">` and `<h1 id="bottom">` are embedded in an ordered list. These links appear in the browser as a numbered list of links. An id is especially helpful for organizing content belonging to a `div!`.

## Whitespace ##

* As the code in an HTML file grows, it becomes increasingly difficult to keep track of how elements are related. Programmers use two tools to visualize the relationship between elements: *whitespace* and *indentation*.
* We can use whitespace and indentation as the browser ignores the space between the code in index.html file, there fore you can use whitespace to make your code easier to read.

## Indentation ##

* Indentation is the second tool web devs use to make their code easier to read.
* The spaces are inserted by using `TAB` and `SPACE` bars on the keyboard.
* The [World Wide Web Consortium](https://www.w3.org/Consortium/), or W3C, is responsible for maintaining the style standards of HTML.

## Comments ##

* Comments begin with `<!-- and end with -->`. Any characters in between will be ignored by your browser.

```HTML
<!-- This is a comment that the browser will not display. -->
```

* In the example below, a valid HTML element (a paragraph element) has been “commented out.” This practice is useful when there is code you want to experiment with, or return to, in the future.

```HTML
<!-- <p> Test Code </p> -->
```

### Review: HTML Tags ###

Let’s review what you’ve learned this lesson:

* The `<!DOCTYPE html>` declaration should always be the first line of code in your HTML files. This lets the browser know what version of HTML to expect.
* The `<html>` element will contain all of your HTML code.
* Information about the web page, like the title, belongs within the `<head>` of the page.
* You can add a title to your web page by using the `<title>` element, inside of the head.
* A webpage’s title appears in a browser’s tab.
* Anchor tags `<a>` are used to link to internal pages, external pages or content on the same page.
* You can create sections on a webpage and jump to them using `<a>` tags and adding ids to the elements you wish to jump to.
* Whitespace between HTML elements helps make code easier to read while not changing how elements appear in the browser.
* Indentation also helps make code easier to read. It makes parent-child relationships visible.
* Comments are written in HTML using the following syntax: `<!-- comment -->`.

## Debugging ##

> The [Markup Validation Service](https://validator.w3.org/) webpage takes an HTML document as an input, goes through it, and gives you a report to tell you what is wrong with your HTML.
