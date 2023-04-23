# Monday theme

Monday theme is a clean and simple theme that is very suitable for blogs.
It almost doesn't use any decoration elements while looking attractive,
so visitors will be concentrated on your content and will not be distracted.

## Screenshots

![# 1](https://github.com/cyevgeniy/monday-theme/blob/master/images/tn.png)

## Installation

To install the monday theme, clone it 
into `themes` directory of your hugo project:

```
git clone https://github.com/cyevgeniy/monday-theme themes/monday-theme
```

## Configuration

Add `theme=monday-theme` to your site's `config.toml` file,
after that Hugo will use the monday theme for building your site.

### Menu

Adding top navigation menu is like putting
these lines in `config.toml`:

```toml
[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "Blog"
    url = "/posts/"
    weight = 2
  [[menu.main]]
    name = "About"
    url = "/about/"
    weight = 3
```

The theme supports only single-level menu.

### Featured posts

Use `featured: true` param in a post
to make it appear in the "Featured posts"
section. If you don't want this post to be listed in the blog posts list,
add `hidden: true` parameter to the frontmatter of the post.

### Intro text

Intro text is displayed
at the bottom of the aside block.

To add the intro block, use `introBody`
and `introTitle` params:

```
[params]
  introTitle="Introduction"
  introBody = """Hello, this is my blog and my introduction message. Put
  here small description about yourself. It is also a good idea to put here
  your contact email or something like this."""
```

## Featured image

Featured images are shown right after a post heading
in the blog page. To set featured image for the post,
use `featured_image` param:

```
---
Title: "Some blog post"
featured_image: "/img/subdir/img.png"
---

## Todo

- [ ] Add footer
- [ ] Publish to hugo themes
