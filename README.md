# Next.js App con Autenticación Completa (Prueba)

Este proyecto es una prueba de concepto para explorar diferentes métodos de autenticación utilizando Next.js, junto con un conjunto de potentes herramientas y bibliotecas para un desarrollo moderno y eficiente.

## Tecnologías Clave

Este proyecto se construye utilizando las siguientes tecnologías:

- **[Next.js](https://nextjs.org/docs)**: El framework de React para la web con renderizado del lado del servidor y muchas otras características.
- **[shadcn/ui](https://ui.shadcn.com/)**: Una colección de componentes de interfaz de usuario hermosos y accesibles, construidos con Radix UI y Tailwind CSS.
- **[Tailwind CSS](https://tailwindcss.com/)**: Un framework CSS de utilidad-primera para un diseño rápido y flexible.
- **[Auth.js](https://authjs.dev/)**: Una biblioteca de autenticación simple y poderosa para aplicaciones web.
- **[MongoDB](https://www.mongodb.com/)**: Una base de datos NoSQL utilizada para almacenar la información de los usuarios en una colección llamada `users`.
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**: Una biblioteca para el hash seguro de contraseñas.
- **[Next.js Form Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)**: Funciones del servidor para manejar envíos de formularios de manera eficiente.
- **[Zod](https://zod.dev/)**: Una biblioteca de TypeScript para la validación de esquemas de datos, utilizada aquí para la validación del formulario de inicio de sesión.

## Funcionalidades de Autenticación (Prueba)

Este proyecto actualmente implementa una prueba básica de autenticación, sentando las bases para la integración de múltiples métodos en el futuro.

## Cómo Ejecutar Localmente

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1.  **Clona el repositorio:**

    ```bash
    git clone TU_REPOSITORIO
    cd TU_PROYECTO
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    # o
    bun install
    ```

3.  **Crea el archivo `.env.local`:**

    Copia el contenido del archivo `.env.example` y configúralo con tus propias variables de entorno. Asegúrate de configurar la conexión a tu instancia de MongoDB.

    ```bash
    cp .env.example .env.local
    ```

    **Ejemplo de `.env.local`:**

    ```env
    MONGODB_URI=TU_URL_DE_CONEXIÓN_MONGODB
    MONGO_CFG=?retryWrites=true&w=majority O LOS PARAMETROS DE LA URL PARA MONGODB
    AUTH_SECRET=UN_SECRETO_SEGURO_PARA_NEXTAUTH
    AUTH_GITHUB_ID=TU_ID_DE_CLIENTE_DE_GITHUB
    AUTH_GITHUB_SECRET=TU_SECRETO_DE_CLIENTE_DE_GITHUB
    AUTH_GOOGLE_ID=TU_ID_DE_CLIENTE_DE_GOOGLE
    AUTH_GOOGLE_SECRET=TU_SECRETO_DE_CLIENTE_DE_GOOGLE
    NEXTAUTH_URL=http://localhost:3000 # O la URL de tu despliegue
    ```

    **Importante:** Para habilitar la autenticación con Google y GitHub, necesitarás crear credenciales de OAuth en sus respectivas plataformas de desarrolladores y configurar las variables `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_GITHUB_ID` y `AUTH_GITHUB_SECRET`. Consulta la documentación oficial:

    - **Google Cloud Console:** [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
    - **GitHub Developer settings:** [https://github.com/settings/developers](https://github.com/settings/developers)

4.  **Ejecuta el servidor de desarrollo:**

    ```bash
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    # o
    bun dev
    ```

5.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.

## Aprende Más

Para profundizar en las tecnologías utilizadas en este proyecto, consulta la documentación oficial:

- **Documentación de Next.js:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **Documentación de Auth.js:** [https://authjs.dev/](https://authjs.dev/)
- **Documentación de shadcn/ui:** [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs)
- **Documentación de Tailwind CSS:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Documentación de MongoDB:** [https://www.mongodb.com/docs/manual/](https://www.mongodb.com/docs/manual/)
- **Documentación de bcryptjs:** [https://www.npmjs.com/package/bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Documentación de Next.js Form Actions:** [https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- **Documentación de Zod:** [https://zod.dev/](https://zod.dev/)

## Despliegue en Vercel

La forma más sencilla de desplegar tu aplicación Next.js es utilizando la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), creada por los mismos desarrolladores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

## Próximos Pasos

Este proyecto se ampliará con la integración de más métodos de autenticación en el futuro. ¡Mantente atento a las actualizaciones!

---

````markdown
# Next.js App with Full Authentication (Proof of Concept)

This project is a proof of concept to explore different authentication methods using Next.js, along with a set of powerful tools and libraries for modern and efficient development.

## Key Technologies

This project is built using the following technologies:

- **[Next.js](https://nextjs.org/docs)**: The React framework for the web with server-side rendering and many other features.
- **[shadcn/ui](https://ui.shadcn.com/)**: A collection of beautiful and accessible UI components, built with Radix UI and Tailwind CSS.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid and flexible design.
- **[Auth.js](https://authjs.dev/)**: A simple and powerful authentication library for web applications.
- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database used to store user information in a collection called `users`.
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**: A library for secure password hashing.
- **[Next.js Form Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)**: Server-side functions to handle form submissions efficiently.
- **[Zod](https://zod.dev/)**: A TypeScript-first schema validation with static types inference, used here for login form validation.

## Authentication Features (Proof of Concept)

This project currently implements a basic authentication proof of concept, laying the groundwork for integrating multiple methods in the future.

## How to Run Locally

Follow these steps to run the application in your local environment:

1.  **Clone the repository:**

    ```bash
    git clone YOUR_REPOSITORY
    cd YOUR_PROJECT
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Create the `.env.local` file:**

    Copy the contents of the `.env.example` file and configure it with your own environment variables. Make sure to set up the connection to your MongoDB instance.

    ```bash
    cp .env.example .env.local
    ```

    **Example `.env.local`:**

    ```env
    MONGODB_URI=YOUR_MONGODB_CONNECTION_URL
    MONGO_CFG=?retryWrites=true&w=majority OR YOUR MONGODB URI PARAMETERS
    AUTH_SECRET=A_SECURE_SECRET_FOR_NEXTAUTH
    AUTH_GITHUB_ID=YOUR_GITHUB_CLIENT_ID
    AUTH_GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET
    AUTH_GOOGLE_ID=YOUR_AUTH_GOOGLE_ID
    AUTH_GOOGLE_SECRET=YOUR_AUTH_GOOGLE_SECRET
    NEXTAUTH_URL=http://localhost:3000 # Or your deployment URL
    ```

    **Important:** To enable authentication with Google and GitHub, you will need to create OAuth credentials on their respective developer platforms and configure the `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_GITHUB_ID`, and `AUTH_GITHUB_SECRET` variables. Refer to the official documentation:

    - **Google Cloud Console:** [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
    - **GitHub Developer settings:** [https://github.com/settings/developers](https://github.com/settings/developers)

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Learn More

To delve deeper into the technologies used in this project, consult the official documentation:

- **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **Auth.js Documentation:** [https://authjs.dev/](https://authjs.dev/)
- **shadcn/ui Documentation:** [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs)
- **Tailwind CSS Documentation:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **MongoDB Documentation:** [https://www.mongodb.com/docs/manual/](https://www.mongodb.com/docs/manual/)
- **bcryptjs Documentation:** [https://www.npmjs.com/package/bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Next.js Form Actions Documentation:** [https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- **Zod Documentation:** [https://zod.dev/](https://zod.dev/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Next Steps

This project will be expanded with the integration of more authentication methods in the future. Stay tuned for updates!
````
