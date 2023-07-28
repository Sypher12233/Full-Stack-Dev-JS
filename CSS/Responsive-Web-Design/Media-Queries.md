# Media Queries #

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

## 1. Responsive Web Design ##

When someone visits a website, it’s possible they are viewing it on a phone, tablet, computer, or even a TV monitor. Because screen sizes can vary greatly across different devices, it’s important for websites to resize and reorganize their content to best fit screens of all sizes.

When a website doesn’t respond to different screen sizes, the website may look odd or become indecipherable on certain devices. This usually occurs on smaller screens, like phones. When a website responds to the size of the screen it’s viewed on, it’s called a responsive website.

Because websites can be displayed on thousands of different screen sizes, they must be able to respond to a change in screen size and adapt the content so that users can access it.
When someone visits a website, it’s possible they are viewing it on a phone, tablet, computer, or even a TV monitor. Because screen sizes can vary greatly across different devices, it’s important for websites to resize and reorganize their content to best fit screens of all sizes.

When a website doesn’t respond to different screen sizes, the website may look odd or become indecipherable on certain devices. This usually occurs on smaller screens, like phones. When a website responds to the size of the screen it’s viewed on, it’s called a responsive website.

Because websites can be displayed on thousands of different screen sizes, they must be able to respond to a change in screen size and adapt the content so that users can access it.

## 2. Viewport Meta Tag ##

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

## 3. Range ##

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

## 4. Dots Per Inch (DPI) ##

Another media feature we can target is screen resolution. Many times we will want to supply higher quality media (images, video, etc.) only to users with screens that can support high resolution media. Targeting screen resolution also helps users avoid downloading high resolution (large file size) images that their screen may not be able to properly display.

To target by resolution, we can use `the min-resolution` and `max-resolution` media features. These media features accept a resolution value in either `dots per inch (dpi)` or `dots per centimeter (dpc)`. Learn more about resolution measurements here.

```CSS
@media only screen and (min-resolution: 300dpi) {
    /* CSS for high resolution screens */
}
```

The media query in the example above targets high resolution screens by making sure the screen resolution is at least 300 dots per inch. If the screen resolution query is met, then we can use CSS to display high resolution images and other media.

## 5. And Operator ##

In previous exercises, we chained multiple media features of the same type in one media query by using the __and__ operator. It allowed us to create a range by using `min-width` and `max-width` in the same media query.

The __and__ operator can be used to require multiple media features. Therefore, we can use the __and__ operator to require both a `max-width` of `480px` and to have a `min-resolution` of `300dpi`.

For example:

```CSS
@media only screen and (max-width: 480px) and (min-resolution: 300dpi) {
    /* CSS ruleset */
}
```

By placing the __and__ operator between the two media features, the browser will require __both__ media features to be true before it renders the CSS within the media query. The __and__ operator can be used to chain as many media features as necessary.

## 6. Comma Separated List ##

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

## 7. Breakpoints ##

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

## 8. Review: Media Queries ##

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
