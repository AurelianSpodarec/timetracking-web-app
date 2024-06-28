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


## Documentation


### Services

The Services module handles API interactions. It is organized into two main folders: `apis` and `requests`.

#### Folder Structure

##### `apis`

Each API folder includes two subfolders:
- `endpoints`: Defines the endpoints for the API.
- `fetch`: Implements the fetch functionality, configured specifically for the API.

##### `requests`

- Extends the fetch functionality with custom error handling.
- Automates the process of getting response content.

##### Working with Multiple APIs

To support multiple APIs, create a new folder for each API inside the `apis` folder. For example:

```
apis/
    Clocklance/
        endpoints/
        fetch/
    Google/
        endpoints/
        fetch/
```

Each new API folder should follow the same structure with `fetch` and `endpoints` subfolders.

### Components

Our components follow the Atomic Design principles.

#### Folder Structure

- **Atoms**: Basic building blocks.
- **Molecules**: Groups of atoms functioning together.
- **Organisms**: Complex components composed of molecules and/or atoms.
- **Templates**: Complete page layouts or reusable sections.
- **UI**: ShadCN/UI components used as functionality only; this components should be never used directly but instead a wrapper should be built around and styling should be extracted. 

#### Usage Guidelines

Components used universally across the app reside in the global components directory. 

However, components specific to a single page, like the main Header or Footer, are placed directly in the page's root directory in a `_components` folder to avoid cluttering the global components folder.

For more details on Atomic Design principles, refer to [Brad Frost's Blog](https://atomicdesign.bradfrost.com/chapter-2/), the founder of this methodology.

### TypeScript

TypeScript interfaces are prefixed with `I` to distinguish them from other entities, like pages or components, that may share the same name. This convention helps avoid naming conflicts and enhances editor suggestions for quicker interface retrieval.

```typescript
interface IAuthLogin {
  email: string;
  password: string;
}
```

By prefixing interfaces with `I`, such as `IAuthLogin` in the example above, it becomes easier to manage and identify TypeScript types within your codebase.
