# Next Generation Doulas *

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme) Repository initiated by _**Zoe T. Sullivan**_

Pure HTML/CSS/JS and deployed via Hostinger.

## About

Next Generation Doulas is dedicated to providing trauma-informed doula support throughout pregnancy, labor, and up to one year postpartum. We aim to improve maternal and infant care outcomes, particularly for BIPOC, Indigenous, LGBTQ, disabled, and other underserved communities. Our mission is to support families in fostering strong, healthy connections that promote wellness for the next generation.

## Table of Contents

- [To-do](#to-do)
- [Services](#services)
  - [Birth Doula Services](#birth-doula-services)
  - [Postpartum Care](#postpartum-care)
- [Installation & Development](#installation--development)
  - [Prerequisites](#prerequisites)
  - [Running Locally](#running-locally)
  - [Deployment on Hostinger](#deployment-on-hostinger)
- [Team](#team)
- [Contributing](#contributing)
- [Technologies/Applications used](#technologiesapplications-used)
- [Resources](#resources)
- [Thanks](#thanks)
- [License](#license)

## To-do

- Publish minimized code
- Download font to server
  - Add @font-face
- Get only the icons you need from cloudflar

## Installation & Development

### Prerequisites

Ensure you have the following installed before working on the project:

- [Hugo](https://gohugo.io/getting-started/installing/)
- [Go](https://go.dev/doc/install)
- [Node.js](https://nodejs.org/) (if applicable)
- A [Cloudinary](https://cloudinary.com/) account for image hosting

### Running Locally

1. Clone the repository:

   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/nextgenerationdoulas.org.git
   ```

2. Navigate into the project directory:

   ```sh
   cd nextgenerationdoulas.org
   ```

3. Start the Hugo development server:

   ```sh
   hugo server -D
   ```

4. Open your browser and go to `http://localhost:1313/`

### Deployment on Hostinger

This project is deployed using Hostinger. To deploy updates or make changes, follow these steps:

Build the Static Files. This will generate the static site in the `public/` directory.

```sh
hugo --minify
```

Upload to Hostinger
    1. Log in to your Hostinger account.
    2. Navigate to the File Manager or use FTP to upload files.
    3. Replace the existing files in the public directory with the contents of this repository.
        Alternative: Deploy via Git (if using Git-based deployment)
    4. Open your website in a browser to ensure the changes are live.
        If caching issues occur, clear the cache from Hostinger’s control panel.

## Team

- **Emilie Young, THW** – Doula & Childbirth Educator, Director & Founder
- **Tina Riley** – Accountant, Treasurer
- **Danielle Dalbok, MSW** – Therapist, Board Member
- **Reyah Travis, PCA, MS, QMHA-R** – Family Trauma Therapist, Board Member
- **Magda D'Angelis-Morris, DMD, MS** – Equity Strategy Manager & Educator, Board Member
- **Zoe Sullivan** – Web Developer, Board Member

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have improvements or bug fixes.

## Technologies/Applications used

- HTML
- Vanilla CSS/JS

## Resources

[CSS Shapes](https://css-tricks.com/the-shapes-of-css/)

## Thanks

[RichardLitt](https://github.com/RichardLitt) for creating the Standard README

## License

Licensed under [MIT](LICENSE)
