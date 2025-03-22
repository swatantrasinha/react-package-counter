# React NPM PACKAGE

## 1. create a folder
The folder name will be the name of package in npm 
> mkdir count-via-react

## 2. initialize
>npm init -y   

## 3. install rollup as devDependencies
> npm i --save-dev rollup

## 4. install four more devDependencies - **typescript**, **tslib** ,  **@rollup/plugin-babel** and **@rollup/plugin-typescript**
> npm i --save-dev tslib @rollup/plugin-babel @rollup/plugin-typescript

## 5. install **react** , **react-dom** and **@types/react** as devDependencies
>npm i --save-dev react react-dom

## 6. create folder **src** parallel to package.json and add file **index.ts** into it

## 7. in package.json , make below changes   

a. write command for build inside scripts   
> "build": "npx rollup -c"

b. also add these changes
> "main": "index.ts",   
> "type": "module",   

the complete file will look like below :   

<details>
    <summary>package.json </summary>
    <p>
        

```javascript

{
  "name": "counter-using-react",
  "version": "1.0.0",
  "main": "index.ts",
  "type": "module",
  "scripts": {
    "build": "npx rollup -c"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@rollup/plugin-babel": "^6.0.4",
    "@rollup/plugin-typescript": "^12.1.2",
    "@types/react": "^19.0.12",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "rollup": "^4.36.0",
    "tslib": "^2.8.1",
    "typescript": "^5.8.2"
  }
}

```

 </p>
</details>

## 8. also create 2 more folders - **components** and **hooks** inside src folder

## 9. inside hooks folder create file **useCounter.tsx**

Add below code to it 
    
   <details>
      <summary>useCounter</summary>
        <p>

```javascript

                import {useState} from 'react'

                const useCounter = () => {
                    const[count, setCount]= useState(0)

                    const increment = () => {
                        setCount(count +1)
                    }

                    const decrement = () => {
                        setCount(count - 1)
                    }

                return {count, increment, decrement}
                }

                export  {useCounter}
```

</p>
            
   </details>


## 10. inside components folder create a new file Button.tsx 

```javascript
            import React,{ReactNode} from 'react'

            type ButtonPropsType= {
                children: ReactNode,
                 onClick: () => void,
            }
            const Button = ({children, onClick}: ButtonPropsType) => {
                const buttonStyle= {
                    padding: '10px 20px',
                    fontSize: "1.2em",
                    borderRadius: "5px",
                    cursor: "pomnter",
                    backgroundColor: "grey",
                    color: "white",
                    border: "none"
                }
            return (
                <button style={buttonStyle} onClick={onClick}>
                {children}
                </button>
            )
            }

            export {Button}

```

## 11. in index.ts export components are hoooks

```javascript
export * from './components/Button'
export * from './hooks/counter'
```

## 12. create new file **rollup.config.js** parallel to package.json

```javascript
import {defineConfig} from 'rollup'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'es',
        name: 'counter-using-react',
    },
    external: ['react', 'react-dom'],
    plugins: [typescript({tsconfig: 'tsconfig.json'})]
})
```

## 13. create tsconfig.json file parallel to package.json
```javascript
{
    "compilerOptions": {
        "jsx": "react",
        "target": "ES2020",
        "module": "ESNext",
        "declaration": true,
        "declarationDir": "dist",
        "strict": true,
        "allowSyntheticDefaultImports": true
    }
}

```

## 14. check for working of the  build command
> npm run build

We can see dist folder is generated
lets verify inside dist folder we have index.js and index.d.ts

## 15. Before publishing, in package.json file we need to make 2 changes:   

- main need to have index.js from dist
  // "main": "index.ts",
> "main": "dist/index.ts",

- creaate types with value dist/index.d.ts
> "types": "dist/index.d.ts",

## 16. We will be pushing code in git so add .gitignore file
node_modules
dist

## 17. lets test before publishing to npm   

in terminal give command   
> npm link 

now create a react app (say using vite)
give commmand the below in react app terminal   
> npm link counter-using-react

in App.tsx we can do :

```javascript

import {useCounter, Button} from 'counter-using-react'

import './App.css'
function App() {

const {count, increment, decrement }= useCounter()


  return (
  <div>
    <h1>Test React Package : counter-using-react </h1>
    <Button onClick={increment}>Plus</Button>
    {count}
    <Button onClick={decrement}>Minus</Button>

  </div>
  )
}

export default App

```

now hit    
> npm run dev

if all good 
do unlink using commmand :   
> npm unlink counter-using-react
proceed to next step

## 18. publish package to npm

> npm publish
( it may ask to login )


19. for updating package we need to change version then test using link/unlink command and if all good do publish to npm

