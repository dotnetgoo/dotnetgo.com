import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  --primary-light: #b0edfd;
  /* Primary Color */
  --primary: #61DBFB;
  --primary-red: yellow;
  --primary-dark: #316e7e;
  --border: 1px solid #61DBFB;
  --transition: all 0.3s linear;
  --nav-height: 61px;
  --min-footer-height: 11vh;
  --card-height: 30rem;
  --background:var(--primary-red);
}
@media (prefers-color-scheme: dark) {
  :root {
    --background:var(--primary);
  }
}
/*
=============== 
Global Styles
===============
*/
body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
}
a:hover {
  cursor: pointer;
}
.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};
  &:hover {
        color: var(--primary);
      }
}

.section {
  display: grid;
  place-items: center;
}

.title {
  font-family: 'Space Grotesk', sans-serif;
}

.card {
  height: var(--card-height);
  border: var(--border);
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  .card-img-top {
    height: 50%;
    object-fit: contain;
  }
}

.page-item.active .page-link {
    background-color: var(--primary);
    border-color: var(--primary);
}

@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 3rem;
  }
  .form-group {
      max-width: 750px;
    }
}

 @media screen and (min-width: 1367px) {
  .link-icons:hover {
    color: var(--primary);
  }
  }
  :root { color: blue }
  @media (prefers-color-scheme: dark) {
    :root { --primary: red; }
  }


`;

export default GlobalStyles;
