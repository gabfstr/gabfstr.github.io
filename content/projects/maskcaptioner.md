---
title: "Academic Project Page"

authors:
  - name: First Author
    link: "https://first-author.com"
    institutions: [1, 2]
    equal: true
  - name: Second Author
    link: "https://second-author.com"
    institutions: [1]
    equal: true
  - name: Third Author
    link: "https://third-author.com"
    institutions: [2]

institutions:
  - "Institution One, Country"
  - "Institution Two, Country"

conference: "Conference name and year"

equal_contribution_note: "Indicates Equal Contribution"

buttons:
  arxiv_pdf: "https://arxiv.org/pdf/1234.5678.pdf"
  arxiv_abs: "https://arxiv.org/abs/1234.5678"
  code: "https://github.com/YOUR-REPO"
  supplementary: "/static/pdfs/supplementary_material.pdf"

videos:
  teaser: 
    src: "/static/videos/banner_video.mp4"
    caption: "Aliquam vitae elit ullamcorper tellus egestas pellentesque. Ut lacus tellus, maximus vel lectus at, placerat pretium mi. Maecenas dignissim tincidunt vestibulum. Sed consequat hendrerit nisl ut maximus."
  carousel:
    - title: "Video 1"
      src: "/static/videos/carousel1.mp4"
    - title: "Video 2"
      src: "/static/videos/carousel2.mp4"
    - title: "Video 3"
      src: "/static/videos/carousel3.mp4"
  carousel_caption: "This is an example carousel"

images:
  - src: "/static/images/carousel1.jpg"
    caption: "First image description."
  - src: "/static/images/carousel2.jpg"
    caption: "Second image description."
  - src: "/static/images/carousel3.jpg"
    caption: "Third image description."
  - src: "/static/images/carousel4.jpg"
    caption: "Fourth image description."

poster_pdf: "/static/pdfs/sample.pdf"

bibtex: |
  @article{YourPaperKey2024,
    title={Your Paper Title Here},
    author={First Author and Second Author and Third Author},
    journal={Conference/Journal Name},
    year={2024},
    url={https://your-domain.com/your-project-page}
  }

footer_note: |
  This page was built using the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template),
  adapted from the [Nerfies](https://nerfies.github.io) project page. Licensed under a [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.
---

## Abstract
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper tellus sed ante aliquam tempus...

## Video Presentation
<iframe src="https://www.youtube.com/embed/JkaxUblCGz0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Poster
<iframe src="/static/pdfs/sample.pdf" width="100%" height="550"></iframe>

## BibTeX
```bibtex
@article{YourPaperKey2024,
  title={Your Paper Title Here},
  author={First Author and Second Author and Third Author},
  journal={Conference/Journal Name},
  year={2024}
}
