# OTT - Movie App

- Tailwind CSS
- Firebase for authentication
- Routing using react-router-dom
- Form Validation
- Log in/Log out/Register user using firebase
- Once user SignIn
  1. Add user data into Redux Store --> userSlice
  2. Navigate to Browse Page
- TMDB API for movies:
  - Push movies data into Redux Store --> movieSlice
  - create custom hooks
- Get API key from Platform.openai.com
- install OpenAI package -> npm install openai --> It will help you make api call directly

# Features:

- Sign In / Sign Up Page
- Browse Page
  - Header
    - Sign out
  - Main section(MainContainer)
    - Video background
    - Movies title
  - Movie recommendation section(SecondaryContainer)
    - Movie List \* n -> Popular
      - cards \* n
    - Movie List \* n -> Now Playing
      - cards \* n
    - Movie List \* n -> Top Rated
      - cards \* n
    - Movie List \* n -> Upcoming
      - cards \* n
  - GPT search page
    - Used Open AI GPT public API to recommend movies

# Images:

<img width="1440" alt="1" src="https://github.com/user-attachments/assets/1ba00f06-1e1a-42e9-8eca-6f22d36f54c4" />

<img width="1440" alt="2" src="https://github.com/user-attachments/assets/9f5a59dd-688f-454c-a598-c6429b22bd01" />

<img width="1440" alt="3" src="https://github.com/user-attachments/assets/ede9b37d-b2e0-4d7f-848d-e1376475b957" />
