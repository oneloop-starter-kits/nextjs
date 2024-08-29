# Oneloop Starter Kit - NextJS with full App Router support

This is a starter kit to get you started with Oneloop on Next.js

## Dependancies

- node.js (>=18)
- Oneloop account - Get free account [here](https://dashboard.openloop.ai/)

## Setup your local environment

1. [Fork](https://github.com/oneloop-starter-kits/oneloop-nextjs-app-router-starter-kit/fork)
2. Clone the repository

```
git clone https://github.com/<your_github_username>/oneloop-nextjs-app-router-starter-kit.git
```

3. Within the project folder install the dependencies

```
> cd oneloop-nextjs-app-router-starter-kit
> npm i
```

4. Set up your environment

Rename `.env.local.sample` to `.env.local`

Update the file with your application settings. These can be found within the backend application details within the Oneloop dashboard

```
ONELOOP_SDK_KEY=<your_oneloop_sdk_key>
```

## Setup Oneloop

Within `./src/app/api-key-manager/component.tsx` update the following id

```ts
const WORKSPACE_ID = "<your-oneloop-workspace-id>";
const CURRENT_CUSTOMER_ID = "<your-customer-id>";
```

For more information on Workspaces and Customer IDs, please visit:

## Start your app

```
npm run dev
```

open `http://localhost:3000/api-key-manager` in your browser

# Resources

- [Oneloop Next.js SDK Docs](https://docs.oneloop.ai/)
