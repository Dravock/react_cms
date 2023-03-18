**** Install TAILWIND ****
    ** STEPS **
        1. npm install -D tailwindcss
        2. npx tailwindcss init
        3. Open tailwind.config.js and paste: 
            /** @type {import('tailwindcss').Config} */
            module.exports = {
            content: [
                "./src/**/*.{js,jsx,ts,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
            }

        4. Open index.css and paste into first Line:
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
        5. npm run start

**** INSTALL NPM MODULES ****
    npm i axios universal-cookie react-router react-router-dom dotenv react-draft-wysiwyg

**** USAGE React Browser Router ****
    *** Implentation BrowserRouter ***
        1. Paste Import react-router-dom into App.js:
            import { BrowserRouter,Routes,Route } from 'react-router-dom';
        2. Create router component :
                <BrowserRouter basename='/sitename'>
                    <Routes>
                        <Route path='/' element={<Component_Name />} />
                            etc ...
                    </Routes>
                </BrowserRouter>
        3. Go to package.json and paste into line 3:
            "homepage": "/sitename",
    *** Use Navigation ***
        1. add import { useNavigate } from 'react-router-dom' to youre component
        2. create a const with const navigate = useNavigate()
        3. use navigate("/source")

**** USAGE .env in REACT ****
    1. create .env if you want you can add to .env.development or for production .production
    2. define variable starting with REACT_APP_VARIABLE_NAME
        Beispiel:
            **** BASE_URL für einen BACKEND CALL ****
            REACT_APP_BASE_URL=http://localhost/project_Folder/backend/api/controllers/

**** SHORT CUTS ****
    - Create React component:
        - rfce

**** INSTALLATION XDEBUG ****
    1. Download the xdebug version for youre used PHP version. Check youre needed download zip on !!! https://xdebug.org/wizard !!!
    2. Move the downloaded file to \xampp\php\ext, and rename it to php_xdebug.dll. rename the old version tol -old
    3. Update C:\xampp\php\php.ini and add these lines on the end of the php.ini:
        [XDEBUG]
        xdebug.mode = xdebug
        xdebug.start_with_request=yes
        zend_extension = "C:\xampp\php\ext\php_xdebug.dll"
    4. Restart the Apache Webserver
    5. Download VS Code Extension PHP Debug