# Next Generation Doulas

Repository initiated by _**Zoe T. Sullivan**_

Profile created with Hugo and deployed via GH pages. This profile will also serve as a concept design for an opensource doula network.

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## About

Next Generation Doulas is dedicated to providing trauma-informed doula support throughout pregnancy, labor, and up to one year postpartum. We aim to improve maternal and infant care outcomes, particularly for BIPOC, Indigenous, LGBTQ, disabled, and other underserved communities. Our mission is to support families in fostering strong, healthy connections that promote wellness for the next generation.

## Features

- **Birth Doula Services** – Comprehensive labor and postpartum support
- **Postpartum Care** – Daytime and overnight assistance for new parents
- **Sliding Scale & OHP Coverage** – Accessible support for diverse families
- **Community Resources & Advocacy** – Ensuring families have the tools they need
- **Trauma-Informed Care** – Supporting healing and empowerment through connection

## Services

### Birth Doula Services

- **OHP Accepted / Sliding Scale**
- **Private Pay Package: $2,000**
  - Two prenatal visits (in-person or virtual)
  - Customized laminated birth plan
  - 24/7 on-call support from 37 weeks
  - Continuous emotional and physical support during labor and delivery
  - Backup doula availability
  - Eight hours of postpartum care (two daytime visits or one overnight shift)

### Postpartum Care

- **FSA Accepted**
- **OHP Coverage:** Covers 8 hours of care; additional services available via private pay or donations.

**Rates:**
- **Daytime:** $35/hr (weekdays), $40/hr (weekends)
- **Overnights:** $45/hr (weekdays), $50/hr (weekends)

Includes:
- Newborn care & postpartum education
- Trauma-informed emotional support
- Light housekeeping & meal preparation
- Lactation support & community referrals
- Overnight infant care & sibling support

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

## Deployment on GitHub Pages

This project is deployed using [GitHub Pages](https://pages.github.com/). To update and deploy the site:

1. **Build the Static Files**
   ```sh
   hugo --minify -d docs
   ```
   This generates the static site in the `docs/` directory (as required by GitHub Pages).

2. **Push Changes to GitHub**
   ```sh
   git add .
   git commit -m "Update site"
   git push origin main
   ```

3. **Enable GitHub Pages** (if not already set up):
   - Go to your repository on GitHub.
   - Navigate to **Settings > Pages**.
   - Under "Source," select `main` branch and `/docs` folder.
   - Save the settings.

4. **Check the Website**
   - Visit `https://zothsu.github.io/nextgenerationdoulas.org/` to ensure the changes are live.
   - If needed, clear your browser cache to view updates.

## Team

- **Emilie Young, THW** – Doula & Childbirth Educator, Director & Founder
- **Tina Riley** – Accountant, Treasurer
- **Danielle Dalbok, MSW** – Therapist, Board Member
- **Reyah Travis, PCA, MS, QMHA-R** – Family Trauma Therapist, Board Member
- **Magda D'Angelis-Morris, DMD, MS** – Equity Strategy Manager & Educator, Board Member
- **Zoe Sullivan** – Web Developer, Board Member

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have improvements or bug fixes.

## Known Bugs

Project is currently under construction

## Features to add

Project is currently under construction

## Technologies/Applications used.

- VS Code on Ubuntu 20.08

## Resources
[CSS Shapes](https://css-tricks.com/the-shapes-of-css/)

## Thanks

[RichardLitt](https://github.com/RichardLitt) for creating the Standard README


## License

Licensed under [MIT](LICENSE) 
