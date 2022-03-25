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
9. Tables

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

## Table Element ##

* Some data is naturally tabular in nature, meaning that a table is often the best way of presenting the data.

### Creating a Table ###

* Before displaying data, we must first create the table that will contain the data by using the `<table>` element.
* The `<table>` element will contain all of the tabular data we plan on displaying.

### Table Rows ###

* The first step in entering data into the table is to add rows using the table row element: `<tr>`.

### Table Data ###

* Each cell element must also be defined. In HTML, you can add data using the table data element: `<td>`.
* Like the following:

```HTML
<tr>
  <td>Adam's Greenwoods</td>
    <td>14</td>
    <td>Package Items</td>
    </tr>
```

### Table Headings ###

* To add titles to rows and columns, you can use the table heading element: `<th>`.
* The table heading element is used just like a table data element, except with a relevant title. Just like table data, a table heading must be placed within a table row.
* Note, also, the use of the scope attribute, which can take one of two values:

```TEXT
row - this value makes it clear that the heading is for a row.
col - this value makes it clear that the heading is for a column.
```

```HTML
<tr>
  <th scope='col'>Company Name</th>
    <th scope='col'>Number of Items to Ship</th>
    <th scope='col'>Next Action</th>
    </tr>
```

### Spanning Columns ###

* Data can span columns using the `colspan` attribute. The attribute accepts an integer (greater than or equal to 1) to denote the number of columns it spans across.
* In the example below the data 'Adam's Greenwoods' spans two(2) columns.

```HTML
<td colspan='2'>Adam's Greenwoods</td>
```

### Spanning Rows ###

* Data can also span multiple rows using the rowspan attribute.
* The rowspan attribute is used for data that spans multiple rows (perhaps an event goes on for multiple hours on a certain day). It accepts an integer (greater than or equal to 1) to denote the number of rows it spans across.

```HTML
<tr> <!-- Row 2 -->
    <th>Morning</th>
    <td rowspan="2">Work</td>
    <td rowspan="3">Relax</td>
  </tr>
```

### Table Body ###

* Over time, a table can grow to contain a lot of data and become very long. When this happens, the table can be sectioned off so that it is easier to manage.
* Long tables can be sectioned off using the table body element: `<tbody>`.

### Table Head ###

* When a table’s body is sectioned off, however, it also makes sense to section off the table’s column headings using the `<thead>` element.

```HTML
<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col">Saturday</th>
      <th scope="col">Sunday</th>
    </tr>
  </thead>
  <tbody>
    </tbody>
```

### Table Footer ###

* The bottom part of a long table can also be sectioned off using the `<tfoot>` element.

```HTML
<table>
  <tfoot>
    <tr>
      <th>Total</th>
      <td>$22M</td>
      <td>$12.5M</td>
    </tr>
  </tfoot>
</table>
```

### Styling with CSS ###

* Tables, by default, are very bland. They have no borders, the font color is black, and the typeface is the same type used for other HTML elements.
* CSS, or Cascading Style Sheets, is a language that web developers use to style the HTML content on a web page. You can use CSS to style tables.

```CSS
table, th, td {
  border: 1px solid black;
  font-family: Arial, sans-serif;
  font-size: 18px;
  text-align: center;
}
```

#### Review: HTML Tables ###

* Let’s review what we’ve learned so far:

* The `<table>` element creates a table.
* The `<tr>` element adds rows to a table.
* To add data to a row, you can use the `<td>` element.
* Table headings clarify the meaning of data. Headings are added with the `<th>` element.
* Table data can span columns using the colspan attribute.
* Table data can span rows using the rowspan attribute.
* Tables can be split into three main sections: a head, a body, and a footer.
* A table’s head is created with the `<thead>` element.
* A table’s body is created with the `<tbody>` element.
* A table’s footer is created with the `<tfoot>` element.
* All the CSS properties you learned about in this course can be applied to tables and their data.

## Semantic HTML ##

> Introduction;

* Introduction to Semantic HTML
When building web pages, we use a combination of non-semantic HTML and Semantic HTML. The word semantic means “relating to meaning,” so semantic elements provide information about the content between the opening and closing tags.

### Elements ###

1. `<header>`
2. `<nav>`
3. `<Main>`
4. `<Footer>`
5. `<Section>`
6. `<Article>`
7. `<Aside>`
8. `<Audio>`
9. `<video>`

* Elements such as `<div>` and `<span>` are not semantic elements since they provide no context as to what is inside of those tags.
* For example, instead of using a `<div>` element to contain our header information, we could use a `<header>` element, which is used as a heading section.

### Header and Nav ###

* A `<header>` is a container usually for either navigational links or introductory content containing `<h1>` to `<h6>` headings.
* A `<nav>` is used to define a block of navigation links such as menus and tables of contents. It is important to note tha `<nav>` can be used inside of the `<header>` element but can also be used on its own.

* Let’s take a look at the example below:

```HTML
<header> 
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>      
    </ul>
  </nav>
</header>.
```

### Main and Footer ###

* These elements along with `<nav>` and `<header>` help describe where an element is located based on conventional web development standards.
* The element `<main>` is used to encapsulate the dominant content within a webpage. This tag is separate from the `<footer>` and the `<nav>` of a web page since these elements don’t contain the principal content.
* The content at the bottom of the subject information is known as the footer, indicated by the `<footer>` element. The footer contains information such as:

```HTML
* Contact information
* Copyright information
* Terms of use
* Site Map
* Reference to top of page links
For example:

<footer>
  <p>Email me at Codey@Codecademy.com</p>
</footer>
```

* The `<footer>` tag is separate from the `<main>` element and typically located at the bottom of the content.

### Article and Section ###

* `<section> and <article>` tags go into the `<body>` tag.
* `<section>` defines elements in a document, such as chapters, headings, or any other area of the document with the same theme. For example, content with the same theme such as articles about cricket can go under a single `<section>`.
* The `<article>` element holds content that makes sense on its own. `<article>` can hold content such as articles, blogs, comments, magazines, etc.

```HTML
<section>
  <h2>Fun Facts About Cricket</h2>
  <article>
    <p>A single match of cricket can last up to 5 days.</p>
  </article>
</section>
```

* It is important to note that a `<section>` element could also be placed in an `<article>` element depending on the context.
* The `<aside>` element is used to mark additional information that can enhance another element but isn’t required in order to understand the main content. This element can be used alongside other elements such as `<article>` or `<section>`.
* With `<aside>`, we learned that we can put additional information next to a main piece of content, but what if we wanted to add an image or illustration? That is where `<figure>` and `<figcaption>` come in.
* `<figure>` is an element used to encapsulate media such as an image, illustration, diagram, code snippet, etc, which is referenced in the main flow of the document.
* `<figcaption>` is an element used to describe the media in the `<figure>` tag. Usually, `<figcaption>` will go inside `<figure>`. This is different than using a `<p>` element to describe the content; if we decide to change the location of `<figure>`, the paragraph tag may get displaced from the figure while a `<figcaption>` will move with the figure. This is useful for grouping an image with a caption.

```HTML
<figure>
  <img src="overwatch.jpg">
  <figcaption>This picture shows characters from Overwatch.</figcaption>
</figure>
```

## Audio and Attributes ##

* The `<audio>` element is used to embed audio content into a document. Like `<video>`, `<audio>` uses src to link the audio source.
* Most attributes go in the opening tag of `<audio>`. For example, here’s how we could add both autoplay functionality and audio controls:

```HTML
<audio autoplay controls>
  <source src="iAmAnAudioFile.mp3" type="audio/mp3">
</audio>
```

## Video and Embed ##

* We can use a `<video>` attribute to add a video to our webpage.
* Some attributes that can alter a video playback include:
* controls: When added in, a play/pause button will be added onto the video along with volume control and a fullscreen option.
* autoplay: The attribute which results in a video automatically playing as soon as the page is loaded.
* loop: This attribute results in the video continuously playing on repeat.
* Below is an example of `<video>` being used with the controls attribute:
* Another tag that can be used to incorporate media content into a page is the `<embed>` tag, which can embed any media content including videos, audio files, and gifs from an external source.

```HTML
<video src="coding.mp4" controls>Video not supported</video>
<embed src="download.gif"/>
```

### Review: Semantic HTML ###

* `<header>`, `<nav>` , `<main>` and `<footer>` create the basic structure of the webpage.
* `<section>` defines elements in a document, such as chapters, headings, or any other area of the document with the same theme.
* `<article>` holds content that makes sense on its own such as articles, blogs, comments, etc.
* `<aside>` contains information that is related to the main content, but not required in order to understand the dominant information.
* `<figure>` encapsulates all types of media.
* `<figcaption>` is used to describe the media in `<figure>`.
* `<video>`, `<embed>`, and `<audio>` elements are used for media files.
