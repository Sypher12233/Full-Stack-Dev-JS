# Git and GitGub, Part I #

## 1. Introduction: Git and GitHub, Part I ##

**See what you’ll be learning in the Git and GitHub, Part I Unit.**

The goal of this unit is to introduce you to the Git versioning technology. Understanding Git is a crucial tool in your developer toolkit—but don’t worry if it doesn’t stick right away! Practice is crucial with Git, which is why we’re introducing it early in the Path. Additionally, you’ll understand how to take the repositories on your computer and put them online with GitHub. Having your work on Github will be important when you apply for jobs, and crucial to that will be having a solid README.md, which you’ll write with markdown.

After this unit, you will be able to:

* Version control projects using Git
* Backtrack in Git
* Host a codebase online using GitHub repositories
* Use markdown to author a good README.md file

You will put all of this knowledge into practice with an upcoming Portfolio Project. You can complete the Portfolio Project either in parallel with or after taking the prerequisite content—it’s up to you!

## 1. Basic Git Workflow ##

1. Hello Git
2. git init
3. Git Workflow
4. git status
5. git add
6. git diff
7. git commit
8. git log
9. Generalizations

### 1. Hello Git ###

Git is a software that allows you to keep track of changes made to a project over time. Git works by recording the changes you make to a project, storing those changes, then allowing you to reference them as needed.

We’ll learn Git by using it to help us write a screenplay called **Harry Programmer and the Sorcerer’s Code.**

### 2. git init ###

Now that we have started working on the screenplay, let’s turn the **sorcerers-code** directory into a Git project. We do this with:

```zsh
git init
```

The word `init` means **initialize**. The command sets up all the tools Git needs to begin tracking changes made to the project.

### 3. Git Workflow ###

Nice! We have a Git project. A Git project can be thought of as having three parts:

* A **Working Directory**: where you’ll be doing all the work: creating, editing, deleting and organizing files
* A **Staging Area**: where you’ll list changes you make to the working directory
* A **Repository**: where Git permanently stores those changes as different **versions** of the project

The Git workflow consists of editing files in the working directory, adding files to the staging area, and saving changes to a Git repository. In Git, we save changes with a **commit**, which we will learn more about in this lesson.

![Basic Git Workflow](https://content.codecademy.com/courses/learn-git/revised-git-diagram/git%20workflow_fullwidth.svg)

### 4. git status ###

As you write the screenplay, you will be changing the contents of the working directory. You can check the status of those changes with:

```zsh
git status
```

### 5. git add ###

In order for Git to start tracking **scene-1.txt**, the file needs to be added to the staging area.

We can add a file to the staging area with:

```gh
git add filename
```

The word filename here refers to the name of the file you are editing, such as **scene-1.txt**.

### 6. git diff ###

Good work! Now you know how to add a file to the staging area.

Imagine that we type another line in **scene-1.txt**. Since the file is tracked, we can check the differences between the working directory and the staging area with:

```gh
git diff filename
```

Here, filename is the actual name of the file. If the name of my file was **changes.txt** the command would be

```gh
git diff changes.txt
```

### 7. git commit ###

A **commit** is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository.

`git commit` is the command we’ll do next. However, one more bit of code is needed for a commit: the option `-m` followed by a message. Here’s an example:

```gh
git commit -m "Complete first line of dialogue"
```

Standard Conventions for Commit Messages:

* Must be in quotation marks
* Written in the present tense
* Should be brief (50 characters or less) when using `-m`

### 8. git log ###

Often with Git, you’ll need to refer back to an earlier version of a project. Commits are stored chronologically in the repository and can be viewed with:

```gh
git log
```

In the output, we get:

* A 40-character code, called a SHA, that uniquely identifies the commit. This appears in orange text.
* The commit author (you!)
* The date and time of the commit
* The commit message

### 9. Generalizations ###

You have now been introduced to the fundamental Git workflow. You learned a lot! Let’s take a moment to generalize:

1. Git is the industry-standard version control system for web developers
2. Use Git commands to help keep track of changes made to a project:

* `git init` creates a new Git repository
* `git status` inspects the contents of the working directory and staging area
* `git add` adds files from the working directory to the staging area
* `git diff` shows the difference between the working directory and the staging area
* `git commit` permanently stores file changes from the staging area in the repository
* `git log` shows a list of all previous commits

## 2. Important Git Operations ##

1. Backtracking Intro
2. head commit
3. git checkout
4. more git add
5. git reset I
6. git reset II
7. git reset review
8. Generalizations

### 1. Backtracking Intro ###

When working on a Git project, sometimes we make changes that we want to get rid of. Git offers a few eraser-like features that allow us to undo mistakes during project creation. In this lesson, we’ll learn some of these features.

To start out, let’s review the basic Git workflow.

### 2. head commit ###

In Git, the commit you are currently on is known as the `HEAD` commit. In many cases, the most recently made commit is the `HEAD` commit.

To see the `HEAD` commit, enter:

```gh
git show HEAD
```

The output of this command will display everything the git log command displays for the HEAD commit, plus all the file changes that were committed.

### 3. git checkout ###

What if you decide to change the ghost’s line in the working directory, but then decide you wanted to discard that change?

You could rewrite the line how it was originally, but what if you forgot the exact wording? The command

```gh
git checkout HEAD filename
```

will restore the file in your working directory to look exactly as it did when you last made a commit.

Here, `filename` again is the actual name of the file. If the file is named **changes.txt**, the command would be

```gh
git checkout HEAD changes.txt
```

### 4. more git add ###

The `hamlet` repository we are working on contains five files. In Git, it’s common to change many files, add those files to the staging area, and commit them to a repository in a single commit.

For example, say you want to change the character “LARRY” to “LAERTES” in the script. The name currently appears in two files. After you change the name in both files, you could add the changed files to the staging area with:

```gh
git add filename_1 filename_2
```

Note the word `filename` above refers to the name of the file you are adding to the staging area, such as **scene-3.txt**.

### 5. git reset I ###

Great! The files you’ve added to the staging area belong in the same commit.

What if, before you commit, you accidentally delete an important line from **scene-2.txt**? Unthinkingly, you add **scene-2.txt** to the staging area. The file change is unrelated to the Larry/Laertes swap and you don’t want to include it in the commit.

We can **unstage** that file from the staging area using

```gh
git reset HEAD filename
```

This command **resets** the file in the staging area to be the same as the `HEAD` commit. It does not discard file changes from the working directory, it just removes them from the staging area.

### 6. git reset II ###

Creating a project is like hiking in a forest. Sometimes you take a wrong turn and find yourself lost.

Just like retracing your steps on that hike, Git enables you to rewind to the part before you made the wrong turn. You can do this with:

```gh
git reset commit_SHA
```

This command works by using the first 7 characters of the SHA of a previous commit. For example, if the SHA of the previous commit is `5d692065cf51a2f50ea8e7b19b5a7ae512f633ba`, use:

```gh
git reset 5d69206
```

`HEAD` is now set to that previous commit.

### 7. git reset review ###

To better understand `git reset commit_SHA`, notice the diagram on the right. Each circle represents a commit.

**Before reset:**

* `HEAD` is at the **most recent commit**

**After resetting:**

* `HEAD` goes to a **previously made commit** of your choice
* The gray commits are no longer part of your project
* You have in essence rewound the project’s history

![git reset review](https://content.codecademy.com/courses/learn-git/git-diagram-3.svg)

### 8. Generalizations ###

Congratulations! You’ve learned three different ways to backtrack in Git. You can use these skills to undo changes made to your Git project.

Let’s take a moment to review the new commands:

* `git checkout HEAD filename`: Discards changes in the working directory.
* `git reset HEAD filename`: Unstages file changes in the staging area.
* `git reset commit_SHA`: Resets to a previous commit in your commit history.

Additionally, you learned a way to add multiple files to the staging area with a single command:

```gh
git add filename_1 filename_2
```

## 3. Handy Git Operations ##

**Introduction**

Git provides us with a vast number of different commands that are listed on the documentation which can be intimidating at first. We will break down a couple that are powerful for daily tasks.

### 1. Git stash ###

Let’s say you’re working on experimental code on a fresh branch and realize that you forgot to add something to a previous commit in order to continue your work. In order to go to a different branch, one must always be at a clean commit point. In this case you don’t want to commit your experimental code since it’s not ready but you also don’t want to lose all the code you’ve been working on.

A good way to handle this is by using git stash, which allows you to get back to a clean commit point with a synchronized working tree, and avoid losing your local changes in the process. You’re “stashing” your local work temporarily in order to update a previous commit and later on retrieve your work.

The flow when using **git stash** might look something like this:

![In this diagram, a coworker asks the programmer if they can work on something else while they have their current code open. Git stash allows their current code to be stashed as they finish the other update. Git stash pop puts the code changes back into the working directory.](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-stash-pop-diagram.svg)

While working on a file, you find a small bug in a separate file from a previous commit that needs to be fixed before you continue.

```zsh
$ git stash
```

Running the command above will store your work temporarily for later use in a hidden directory.

At this point, you can switch branches and do work elsewhere.

Once the bug is fixed, you want to retrieve the code you were working on previously, you can “pop” the work that was stored when you used git stash.

```zsh
$ git stash pop
```

From here, you can continue your work and commit it when ready.

### 2. Git log ###

At this point you might be familiar with the command **git log**, which allows you to view the commit history of the branch you currently have checked out:

![Git Log output shows recent commit history](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-log.png)

There are other ways you can use **git log** in order to view recorded changes. Here are a few examples:

* **`git log --oneline`** shows the list of commits in one line format.

![Git Log online output shows recent commit history all in one line](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-log-oneline-2.png)

* **`git log -S "keyword"`** displays a list of commits that contain the keyword in the message. In the screenshot below, we use git log -S "Add" to find any commits with “Add” in the message.
In the screenshot, the output of **`git log -S "Add"`** finds a commit with "Add" in the message.

![Git log -s shows a commit containing the keyword specified](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-log-S.png)

* **`git log --oneline --graph - --graph`** Displays a visual representation of how the branches and commits were created in order to help you make sense of your repository history. When used alone, the description can be very lengthy, so you can combine the command with **`--oneline`** in order to shorten the description.

![Git log --online --graph outputs a graphical representation of commits, showing where branches were created earlier and merged.](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-log-oneline-graph.png)

### 3. Git commit amend ###

Git’s **`--amend`** flag is extremely useful when updating a commit, it allows you to correct mistakes and edit commits easily instead of creating a completely new one.

Let’s say you finish working on a lengthy feature and everything seems to be working fine so you commit your work. Shortly after, you realize you missed a few semicolons in one of your functions. You could technically create a new commit, but ideally, you want to keep all commits specific, clean, and succinct. To avoid creating a new one, you could create your changes, stage them with git add and then type the command **`git commit --amend`** to update your previous commit.

It’s important to note that although it seems like **`--amend`** is simply updating the commit, what Git actually does is replace the whole previous commit. For this reason, when you execute the command **`git commit --amend`**, your terminal editor asks you to update your commit message:

![git-amend](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-commit-amend.png)

However, if you want to keep the same commit message, you can simply add the flag --no-edit:

```zsh
$ git commit --amend --no-edit
```

### 4. Git alias commands ###

When grouping commands together, you can end up writing very long lines of Git commands in the terminal such as:

```zsh
$ git log --pretty=format:"%h %s" --graph
```

Fortunately, Git offers a helpful feature that can make your Git experience simpler, easier, and more familiar: aliases.

If you have a set of commands that you use regularly and want to save some time from typing them, you can easily set up an alias for each command using Git config.

Below are a couple of examples:

```zsh
$ git config --global alias.co "checkout"
$ git config --global alias.br "branch"
$ git config --global alias.glop "log --pretty=format:"%h %s" --graph"
```

Once the aliases are configured, next time you want to check out to another branch you could type the command:

```zsh
$ git co example_branch
```

Instead of:

```zsh
$ git checkout example_branch
```

Using Git aliases can create a much more fluid and efficient workflow experience when using Git. By getting creative with your aliases, you’re able to wrap a sequence of Git commands into one in order to save time and effort.

## 4. The GitHub Flow ##

**Introduction**

In this lesson, we’ll discuss the flow of using GitHub with your code development process. When working on a project, things can scale rather quickly. Following a specific workflow allows the project to move in more orderly way.

Remember that Git is defined as a version control system that’s maintained on your local system. It helps you manage and record your source code history. GitHub, on the other hand, is a hosting service for repositories. Simply put, Git is the tool and GitHub is the service for projects that use Git.

In this lesson we’ll take a look at the basic workflow used with GitHub, which goes like this:

1. Create a branch
2. Commit changes
3. Create a pull request
4. Review pull request
5. Merge and delete branch
 
By sticking to that workflow, team members are able to isolate their work and avoid any conflicting code from being merged. In the following lesson, we’ll take a deeper look at each of these steps.

### 1. Managing Branches ###

Whenever we’re working on a team creating multiple versions of a project code, it’s important to isolate each teammate’s work in order to avoid any conflicts. With Git, each teammate can create their own branch off of the main project in order to work on bug-fixes, new features, experimental code, etc.

A branch is essentially a divergence from the main project. ​​When you branch out, git is essentially making a new state of your current code, upon which you can work, without affecting the important main state of the code. One can create as many branches as they wish and even create branches off of other branches.

By using separate branches, the main project remains intact and unaffected before the changes are reviewed and merged into the project.

Each repository can have one or more branches. The main branch — the one where all changes eventually get merged back into, is called `main`. The `main` branch is usually the working version of a project and contains the production code, so it’s very important to only merge clean and correct code into it!

When someone wants to create a new feature, fix a bug, or just experiment, they should always create their own branch with a descriptive name.

Each team will adopt their own best practices when working together and figuring out naming conventions. For example, the branch name `carlos_feature_dashboard_notifications` includes the author, branch type, and short branch description. Other teams may pick branch names to correspond to ticket numbers from their project management tool.

![a photo showcasing git branch](https://static-assets.codecademy.com/Courses/learn-git-github/github-flow/github-flow-branch.svg)

### 2. Adding and Committing Changes ###

Let’s assume you were recently assigned to a team to develop a feature for an app. You clone (download) the entire app repository from GitHub and create a branch for your feature of the `main` branch, and begin coding a new file in your local Git environment.

After testing your code and ensuring that everything is running correctly, it’s time to push those changes with a commit!

As a refresher, the `git commit` command records change to one or more files in your branch, assigning the commit a unique ID that identifies who created the changes, what changes were created, and when the changes were created.

You can commit along with a message describing your work, and lastly, push the commit to the remote Github repository.

![photo showing commits](https://static-assets.codecademy.com/Courses/learn-git-github/github-flow/github-flow-commit-changes.svg)

### 3. Creating a Pull Request ###

At this point, your work is ready to be reviewed before it’s integrated into the official project.

Pull Requests on GitHub allow collaborators to review and give feedback on proposed code changes before they are merged to the main branch. Through a process of discussion and potentially some extra code changes, the pull request can be ultimately approved, which means you can merge the changes into the official project on the `main` branch.

When creating pull requests, it’s imperative that you include as much relevant detail in the description as possible in order to save review time. Add any comments or images that might be useful for your reviewer.

It’s also important to ensure that your code is running properly with the updated repository in order to prevent anything from crashing. Lastly, you don’t want to submit a pull request with 50 files containing a plethora of changes, instead, stick to smaller-sized pull requests since they’re easier and faster to review.

![pull request in GitHub](https://static-assets.codecademy.com/Courses/learn-git-github/github-flow/github-flow-open-pull-request.svg)

### 4. Reviewing and Merging a Pull Request
Once you’ve created a pull request, other members in your team can review it up on GitHub.

The pull request should include a description and GitHub will display all the files with the changes created. Each line of code will have a clickable “+” button where you can add a comment in regards to the line.

While reviewing, it’s important to be constructive with feedback and be precise about what needs to be changed. Here are few best practices when reviewing code:

* Don’t only comment on what should be changed, but why it should be changed. Feel free to provide resources to make your point.
* Be as clear as possible with your comments and make sure to be clear as to what to modify.
* Look at the bigger picture and try to spot potential errors. Would the submitted code produce any obstacles if the project scales?

Once all the feedback is added, collaborators can click on “Submit Review” and wait for a response. If all goes well, the pull request will eventually be merged into `main`!

![reviewing pull request](https://static-assets.codecademy.com/Courses/learn-git-github/github-flow/github-flow-review-pull-request.svg)

### 5. Deleting a Branch and Review ###

Once changes are merged, in order to keep things organized and managed, it’s imperative to only keep active branches and delete the closed ones.

With that in place, this wraps up the flow of working on a project using Github. We explored:

* The importance of creating branches and isolating work from the `main` branch.
* Best practices of naming branches and making commits on branches.
* What a pull request is: a discussion page for a set of code changes between one branch and another.
* Merging a branch and delete it once it’s merged.
This covers the main steps of working with a team and managing the workflow using Github.

Github provides us with a number of useful tools that expand on Git functionality, especially if we’re collaborating with teammates!

![deleting a branch](https://static-assets.codecademy.com/Courses/learn-git-github/github-flow/github-flow-merge-delete-branch.svg)

## 5. GitHub and Markdown ##

Why learn Markdown?

Once we add our code to GitHub, how do we actually format the text in our repository?

Technically, we could use plaintext on everything. But if we wanted to highlight our project with codeblocks, insert images into our project descriptions, or visually pace our documentation with headings, using Markdown on GitHub is the answer!

With a little bit of Markdown magic, you can achieve text that includes headings, hyperlinks, emojis, checkmarks, and codeblocks like the following file in our Learn C++ repository!

![A README.md file of a GitHub repository, filled with hyperlinks, indentations, headings, emojis](https://static-assets.codecademy.com/Courses/learn-git-github/markdown/markdown-example.png)

Markdown is an indispensable skill and can be opened in many other applications, not just GitHub. In the next few interactive articles, you’ll learn the basics of Markdown and how to use it to write a good README for your project!

### 1. What is Markdown? ###

**An alternative way to style a text document for readability and portability.**

```md
Introduction
---
```

If you are looking for a simple way to create visually appealing text documents without using any fancy editors, check out Markdown. Invented by John Gruber and Aaron Swartz in 2004, Markdown provides a lightweight syntax to style any text document so that it can be converted to HTML for viewing and publishing.

```md
Differences between HTML and Markdown
---
```

Markdown translates to HTML, but Markdown is not a replacement for HTML. Markdown’s syntax can be converted to a small subset of HTML tags to do things like format text, add links, display images, and more. You can even incorporate HTML elements inside a Markdown document. To render Markdown in HTML, though, you would need a tool called a Markdown parser (more about this parser later on).

```md
Benefits of Using Markdown
---
```

Why would you use Markdown? Compared to HTML, writing text in Markdown is much faster because the syntax is simpler. The authors of Markdown intended Markdown to be a language for writing styled text with syntax that is just as easy to read as it is to write.

Imagine that we are writing down some important text on a sheet of paper. If we wanted to emphasize the text we might underline it, twice even! Similarly, in Markdown, we could write:

```md
Title of My Document
====================
```

Notice that we have plain text that has a row of equal signs (`=`) to produce a first-level header, also known as `<h1>`. On a webpage, the heading will display as such:

```md
Title of My Document
===
```

The amount of `=s` don’t matter so long as there’s at least one and it goes under the text.

For text that’s important, but not as important as a first-level heading, we might just underline it once. In code, we could use a row of hyphens (`-`), like so:

```md
Sub-Title of My Document
------------------------
```

to produce a second-level header, also known as `<h2>`:

Sub-Title of My Document

Both examples are valid Markdown syntax. It is intuitive and normal for headings to be in either format. Alternatively, you can format headings using the # character. We’ll show more examples of different headings, but for now, here’s an example of valid syntax for a `<h1>` heading:

```md
# Title of My Document
```

Furthermore, a Markdown document without any HTML tags can be published as is because its syntax is already made for easy viewing. For example, the following Markdown document has:

* styled a heading underlined with equal signs `(=)`,
* emphasized **`week`** in bold with double asterisks `(**)`,
* bulleted a list by prefacing each item with a number and a period,
* and marked several lines as separate quotes with an angle bracket `(>)` per quote.

```md
My Todo List
============
 
At the end of this **week**, I plan to:
 
1. Learn Markdown
2. Write Markdown
3. Share a Markdown note
 
My favorite quote is:
> If you didn't get it the first time
> Do not despair
> Try and try again
> ~ Anonymous
```

The HTML equivalent to the above would be:

```html
<h1>My Todo List</h1>
<p>At the end of this <strong>week</strong>, I plan to:</p>
<ol>
  <li>Learn Markdown</li>
  <li>Write Markdown</li>
  <li>Share a Markdown note</li>
</ol>
<p>My favorite quote is:</p>
<blockquote>
  <p>
    If you didn't get it the first time<br>
    Do not despair<br>
    Try and try again<br>
    ~ Anonymous
  </p>
</blockquote>
```

When viewed on a Markdown parser such as [Stackedit.io](https://stackedit.io/app#), you will see this: 

![(>)](https://static-assets.codecademy.com/Courses/What-is-Markdown/stack_edit_md_parser.jpg)

or this, based on Codecademy’s parser:

My Todo List

At the end of this week, I plan to:

1. Learn Markdown
2. Write Markdown
3. Share a Markdown note

My favorite quote is:

> If you didn’t get it the first time
> Do not despair
> Try and try again
> ~ Anonymous

While both parsers take the same Markdown input, they render slightly different HTML based on their internal configuration and CSS.

```md
When to Use Markdown
---
```

After knowing the many benefits of Markdown, you might want to consider using Markdown if you ever find yourself in any of these scenarios:

* The only editor available to you supports just plain text.
* Time is of the essence and you can’t afford to learn how to use an unfamiliar rich-text editor.
* You need to quickly outline your ideas in a structured but presentable manner.
* You want your document to be portable so that it can convert to HTML, PDF, EPUB, and/or MOBI.

```md
Markdown Document Extension
---
```

Contrary to popular belief, Markdown is not a document format. Therefore, it doesn’t require a strict file extension naming convention, such as **.md**. As the [official Markdown mailing list](https://superuser.com/questions/249436/file-extension-for-markdown-files) explains, Markdown isn’t meant to take over the format of a file. Any file extension that you would normally use to name your text document such as .txt or .text is appropriate. However, organizations such as GitHub have a preference to expect Markdown documents to appear with an **.md** or **.markdown** extension.

```md
Markdown Applications
---
```

Since Markdown has gained a lot of popularity, you will find Markdown content being accepted in many applications.

* Website publishers that accept Markdown content include Wordpress.com, Ghost and BeakerBrowser. Tools such as Jekyll, Docusaurus and MkDocs can convert Markdown documents into a static website geared for technical documentation. Take a look at this [page](https://daringfireball.net/projects/markdown/basics) rendered in HTML, and its text [source](https://daringfireball.net/projects/markdown/basics.text) styled in Markdown.
* Book publishers such as LeanHub accepts Markdown manuscripts and convert them to books for publication.
* Slide-show presentations such as Remark and Cleaver can convert Markdown slides into HTML for web viewing.

```md
The Markdown Parser
---
```

A Markdown parser is software written to parse the Markdown syntax in a text document and convert it to HTML syntax. The original Markdown parser was written in Perl, but you can find parser implementations today in almost any programming language. Regardless, a basic Markdown parser should support the core Markdown syntax: paragraphs, headers, blockquotes, phrase emphasis, lists, code, images, and links.

There are Markdown parsers that are freely available on the Web: StackEdit.io, Dillinger, Parse and Markdown to HTML Converter. In addition to parsing and rendering, both Parse and Markdown to HTML Converter also convert the Markdown document to raw HTML so that you can copy and paste the HTML to be used elsewhere.

```md
Markdown Tutorial
---
```

Let’s learn a little more about the Markdown syntax. As mentioned above, you can simulate a `<h1>` HTML tag with a `#` Markdown symbol. Since there are six heading tags for HTML, from `<h1>` through `<h6>`, you can simulate this with `#` through `######` in Markdown. For example this Markdown syntax:

```md
# This is a H1 heading
## This is a H2 heading
### This is a H3 heading
#### This is a H4 heading
##### This is a H5 heading
###### This is a H6 heading
```

will render this:

```md
# This is a H1 heading #
## This is a H2 heading ##

### This is a H3 heading ###

#### This is a H4 heading ####

##### This is a H5 heading #####

###### This is a H6 heading ######
```

In addition to numbered lists, you can style a bulleted list too. There are three different symbols you can use to mark a line item as a bullet: asterisk (`*`), plus sign (`+`), or hyphen (`-`).

For example:

```md
* Markdown
+ HTML
- XML
```

produces this:

* Markdown
* HTML
* XML

For best practice, it is recommended to use the same marker throughout your list instead of mixing them like above.

The core Markdown syntax does not include nested lists (list within another list), but it allows adding paragraphs between list items. To do so, you need to add a blank line after a list item and indent 4 spaces or 1 tab before starting a paragraph. Some parsers are lenient and do not enforce 4 spaces but there should be some spacing.

* Markdown
 
   Markdown is a lightweight markup language for styling text.
 
* HTML
 
   HTML stands for HyperText Markup Language.
For more examples of basic syntax, check out [CommonMark’s reference guide](https://commonmark.org/help/).

```md
The Markdown Flavors
---
```

Because the core Markdown language supports only a subset of HTML features, many independent developers have extended the Markdown syntax to incorporate more HTML compatibilities and customize it for their own organizations. Here are a few popular flavors of Markdown:

* [CommonMark](https://commonmark.org/) is a body of special-interest developers who work side-by-side on a proposal to standardize the Markdown syntax and offer extensive test suites to validate Markdown implementations against this specification. This standard has been used by other developers to base their code upon.
* GitHub Flavored Markup, or [GFM](https://github.github.com/gfm/) is GitHub’s expanded dialect of Markdown based on CommonMark and is used throughout the GitHub platform by its active community.
* [Trello](https://help.trello.com/article/821-using-markdown-in-trello), a popular collaborative tool that organizes and tracks information through virtual boards and cards, implements a custom version of Markdown as well.

**Conclusion**

You’ve learned a lot about Markdown, specifically:

* What Markdown is and how it differs from HTML
* How you can benefit from Markdown
* Where and when to apply Markdown in various scenarios
* How to write Markdown to style your text and make it presentable
* What a Markdown parser is and where to locate one
* Where to find other flavors of Markdown that are used in industry

Amazing job getting this far! Don’t be shy in applying Markdown in your next document. In fact, this article and many others like this on Codecademy were prepared using Markdown! See? We practice what we preach.


### 2. How To Write a Good README for Your Project ###

This article explains the purpose, conventional structure, and proper formatting of a README file, and best practices to follow when writing one.

#### What Is a README File? ####

You may have noticed that when a GitHub repo is initialized, you see a prompt to create a README.md file immediately. As implied in its name, a README file is a text file that is meant to be read as soon as someone views the repository. This file contains text to introduce, explain, and share the information required to understand what the project is about.

![Comic with three panels in which a character clones a GitHub project, gets confused trying to use it, and finally realizes after three hours that there’s a README file explaining all of the steps](https://static-assets.codecademy.com/Courses/learn-git-github/write-README/github-README.svg)



Since a README file is often the first thing a visitor sees, README’S should tell the viewer how to install and use the project. There is no one good way to structure a README but there is only one bad way: not to include a README at all.

#### Conventions of a Good README File ####

Your README file should be as good as your project itself.

Make your project stand out look professional by at least including the following elements in your README:

* **Project Title**: the name of your project
* **Description**: This is an extremely important component of the README. You should describe the main purpose of your project. Answer questions like “why did you build this project?” and “what problem(s) does it solve?”. It also helps to include your motivations for the project and what you learned from it.
* **Features**: If your project has multiple features, list them here. Don’t be afraid to brag if your project has unique features that make it stand out. You can even add screenshots and gifs to show off the features.
* **How to use**: Here, you should write step-by-step instructions on how to install and use your project. Any software or package requirements should also be listed here.
* **Technologies**: List all the technologies and/or frameworks you used and what purpose they serve in your project.
* **Collaborators**: If others have contributed to your project in any way, it is important to give them credit for their work. Write your team members’ or collaborators’ names here along with a link to their GitHub profile.
* **License**: It’s also important to list a license on your README so other developers can understand what they can and cannot do with your project. You can use [this guide](https://choosealicense.com/) to help you choose a license.

Keep README’s brief but detailed. README should always be up-to-date and self-explanatory. If you have spent a lot of time on your project, you should also spend a good chunk of time on the README. It can help your future self as well when you step away for a while and need to get reacquainted with your project. Not to mention it’ll leave a positive impression on future interviewers who look at your GitHub profile.

#### Using Markdown to Format README’s ####

Keep in mind that nobody wants to read a long block of unformatted text bloated with information. That is why a README file usually has the .md extension. Formatting README files with Markdown can give it flair and make it interesting to read.

#### Use Headers ####

Every title or section (usage, license, etc.) in a README.md should be formatted as a header. Using headers and adding some HTML, we can achieve stuff like this:

#### 📕 Codecademy Docs ####

Documentation for popular programming languages and frameworks.
Built by the community. Maintained by Codecademy.

#### What is Docs? ####

Codecademy Docs is a free, easily accessible reference for coding terms and concepts, available to developers all over the world.

Take a look at the README file on [Codecademy’s docs repository](https://github.com/Codecademy/docs) for the source code.

GitHub uses headers to automatically generate a table of contents for README files based on the Markdown sections. Something like this

```md
## Usage
Please follow these steps to get your application up and running.
 
### Requirements
The following packages are required for this script to work.
- pandas
- numpy
- requests

To install these packages, you can simply run: `pip install -r requirements.txt`
```

GitHub will find the headers and include them in a table of contents based on the header hierarchy:

![An image of a README on GitHub showing table of contents for the project called "My Awesome Project". The headers include "What does it do?", "Usage" with a "Requirements" subsection, and "License".](https://static-assets.codecademy.com/Courses/learn-git-github/write-README/table-of-contents.png)

#### Level Up README’s With Media ####

Documentation doesn’t have to be boring. Go for images or videos to make a project more understandable and appealing! We can add project’s logo, diagrams, screenshots, or even GIFs!

For Markdown files living in a repository, the path to the image can either be to an URL or to an image file in the repository. For example, if we had an image named `diagram.png` inside the `images` folder of the repository, we could reference it like so `![Use Case Diagram](./images/diagram.png)` in the `README.md`.

#### Conclusion ####

Write engaging README’s! Make sure they include easy-to-follow details for your project. This improves your documentation skills and makes you a better developer and communicator of code.

If you want to see more examples of good README’s, take a look at the README on Codecademy’s [40Phaser](https://github.com/Codecademy/40Phaser) and stuff.js repositories. For more information on GitHub’s formatting syntax, take a look at their docs.

### 3. Review: Git and GitHub, Part I ###

Review what you just learned in the Git and Github, Part I Unit.

Congratulations! The goal of this unit was to introduce you to the Git versioning technology. Understanding Git is a crucial tool in your developer toolkit—but don’t worry if it didn’t stick! Practice is crucial with Git, which is why we introduced it early in the Path. You also now know how to take the repositories on your computer and put them online with GitHub. Having your work on Github will be important when you apply for jobs, and now you also know how to write a solid README.md with markdown.

Having completed this unit, you are now able to:

* Version control projects using Git
* Backtrack in Git
* Host a codebase online using GitHub repositories
* Use markdown to author a good README.md file

If you are interested in learning more about these topics, here are some additional resources:

Documentation: [GitHub Docs](https://docs.github.com/en)
Resource: [GitHub Cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)
Video Playlist: [Get Up and Running on Git and GitHub](https://www.youtube.com/playlist?list=PLg7s6cbtAD15G8lNyoaYDuKZSKyJrgwB-)
Resource: [GitHub Learning Lab](https://lab.github.com/)
Resource: [Markdown and Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown)
Resource: [GitHub Guide to Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

Remember, you will put all of this knowledge into practice with an upcoming Portfolio Project. If you ever get stuck while working on the project, you can come back to this Unit and review what you have learned.
