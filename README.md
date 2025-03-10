# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

GIVEN a single-page application portfolio for a web developer

WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer DONE


WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio DONE

WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted DONE

WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted DONE

WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default DONE

WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them DONE


WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message DONE

WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required DONE

WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address DONE

WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies DONE

WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) DONE

WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
