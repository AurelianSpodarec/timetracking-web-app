## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Generate AuthJS Secret

To generate secret: `npx auth secret`

AuthJS Docs: [https://authjs.dev/reference/core/errors#missingsecret](https://authjs.dev/reference/core/errors#missingsecret)

### Services

The Services module handles API interactions. It is organized into two main folders: `apis` and `requests`.

#### Folder Structure

##### `apis`

Each API folder includes two subfolders:
- `fetch`: Implements the fetch functionality, configured specifically for the API.
- `requests`: Defines the endpoints for the API.

##### `requests`

- Extends the fetch functionality with custom error handling.
- Automates the process of getting response content.

##### Working with Multiple APIs

To support multiple APIs, create a new folder for each API inside the `apis` folder. For example:

```
apis/
    Clocklance/
        fetch/
        endpoints/
    Google/
        fetch/
        endpoints/
```

Each new API folder should follow the same structure with `fetch` and `endpoints` subfolders.

#### Components
