# Product Hunt React Web App

## First React Web Application

- How does React approach front-end development and what are the fundamentals nessessary to build an interactive React App from start to finish.
- With React's core it is easy to write a variety of fast, dynamic interfaces.

## Setting up development environments

### Node.js and NPM

Check versions

    node -v

    npm -v

## Git

check version

    git --version

If not install, just find installation instructions online.

Make sure to install based on Operating System.

### Current Development Environment

For the current system:

NODE

    v10.19.0

NPM

    6.14.4

GIT

    git version 2.25.1

## JavaScript ES6/ES7

We will be using ECMAScript specification for this application.

# Getting Started 

## Previewing the application

Inside the

    /voting_app

We can begin the process of installing and starting the react application on our local machine.

The local machine is a Ubuntu 20.04 Desktop.

now that we are inside the correct directory we can begin the install process of the different dependencies that are required for this react web application.

For the full list of the various dependencies you can view the

    package-lock.json

Here you can see that there are quite a few dependencies that are required for this react.js application.

To being the installation process just use this simple command:

    npm install

After installation is complete you can run an audit to fix any problems there were.

If there are any that require manual fixes you can install with instructions from the internet, usually it can also be done easily by using this command.

    npm install fsevents@1.1.2

After installation is completed, the application can now be run or served or started on the local machine.

    npm start

This will start the react application and open the web browser with the localhost url in the browser to show the react web application.

If there are any issues related to starting the react application.

Try removing the 

    node_modules

dir and then installing again

    npm install

There also can be issues related to multiple instances of the localhost applications using the same port.

For example when a previous application is currently using port 3000 and then another application trys to use the same port number.

An easy fix is to kill the process, or reset the machine.

This is the default web application from the source code.

![reactwebapp](app.png)

Using Design Software we recreated the User Interface with vectors.

![vecorized](product_hunt-01.jpg)

We will be doing a redesign from a custom User Interface.

No User Experience testing has been done with this design.

This product is to be seen as a demo.

![vecorized](mockup-01.png)

# Getting Started

Firstly remove the completed app.js file in the index.html to start building the application out from scratch.

        <script
          type="text/babel"
          data-plugins="transform-class-properties"
          src="./js/app-complete.js"
        ></script>


# First UI Component

React is setup using components. So on the User Interface certain functionality and interactions are logically limited within certain UI components.

In this case we are writing out a component this way.

    ProductList: Contains a list of product components

    Product: Displays a given product

React components maps out the UI component which are contained in one place.

This allows these components to be reusable alot easier.

Our first component looks like this:

    class ProductList extends React.Component{
        render() {
            return (
                <div className='ui unstackable items'>
                    Hello, World.
                </div>
            )
        }
    }

These React components are Es6 classes that extend the React.Component.

Then we reference the react var.

index.html loads the React Library for us to reference it here.

    <script src="vendor/react.js"></script>

ProductList class has method which is a javascript function from the React lib.

    render()

## Babel

Babel is a JavaScript transpiler which turns ES6 code into ES5 code using a method called transpiling. 

Also Babel allows us to use JSX.

The Babel dependency is installed in the index.html with this tag.

        <script src="vendor/babel-standalone.js"></script>

We need to add this to the component.js to allow it to know to use the Babel compiler with the component.

        <script
          type="text/babel"
          data-plugin="transform-class-properties"
          src="./js/ProductList.js">
        </script>

## ReactDom.render()

We can instruct React to render the ProductList inside the DOM mode.

    ReactDOM.render(
        <ProductList />,
        document.getElementById('content')
    )

Then in the index.html in the public folder we can put in the div.

    <div id="content"></div>

## Building Product

The Product in the React App is the child component of the parent component ProductList.

So to create the child component we create it similar to the parent component.

    class Product extends React.Component {
        render(){
            return (
                <div>
                </div>
            );
        }
    }

Now for every product we can start adding the different parts of the child components in the HTML.

    /* Child Component Product */
    class Product extends React.Component{
        render(){
            return (
                <div className="item">
                    <div className="image">
                        <img src="images/products/image-agua.png" />
                    </div>
                    <div className="middle aligned content">
                        <div className="description">
                            <a>Fort Knight</a>
                            <p>testestestetest</p>
                        </div>
                        <div className="extra">
                            <span>Submitted by:</span>
                            <img 
                                className="ui avater image"
                                src="images/avatars/daniel.jpg"
                            />
                        </div>
                    </div>
                </div>
            )
        }
    }

## Adding the React Child Component in the Parent Component

We can add this easily this way.

    /* Parent Component ProductList */
    class ProductList extends React.Component{
        render(){
            return (
                <div className='ui unstackable items' >

                /* Child Component Product */
                <Product />

                </div>
            );
        }
    }

## Making the Product data-driven

Creating the datamodel using a seed.js file.

First we create the javaScript Object, with the data in the data object.

    const product = [
    {
        id: 1,
        title: 'Yellow Pail',
        description: 'Test',
        url: '#',
        /*
        votes: generateVoteCount(),
        */
        submitterAvatarUrl: 'images/avatar/daniel.jpg',
        productImageUrl: 'images/products/images-aqua.png',
    },
    ]

## Props

Using Props we can dynamically display the data into the react web app UI Component.

We can write the props into the parent component's child compoinent JSX HTML div.

    /* Parent Component ProductList */
    class ProductList extends React.Component{
        render(){
            const product = Seed.products[0];
            return (
                <div className='ui unstackable items' >
                <Product 
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    /* votes={product.votes} */
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
                </div>
            );
        }
    }

In the Child Component we reference the props like this:

    class Product extends React.Component {
    render() {
        return (
        <div className='item'>
            <div className='image'>
            <img src={this.props.productImageUrl} />
            </div>
            <div className='middle aligned content'>
            <div className='header'>
                <a>
                <i className='large caret up icon' />
                </a>
                {this.props.votes}
            </div>
            <div className='description'>
                <a href={this.props.url}>
                {this.props.title}
                </a>
                <p>
                {this.props.description}
                </p>
            </div>
            <div className='extra'>
                <span>Submitted by:</span>
                <img
                className='ui avatar image'
                src={this.props.submitterAvatarUrl}
                />
            </div>
            </div>
        </div>
        );
    }
    }

Make sure to insert the data in the text content inside the tag:

          <div className='header'>
            <a>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>

## Rendering multiple products

Now we have to be able to render multiple products from the seed.js file.

We can do this by using the map method.

    class ProductList extends React.Component {
    render() {
        const productComponents = Seed.products.map((product) => (
        <Product
            key={'product-' + product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
        />
        ));
    }
    }

Now we can add the modification to the return value

    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    );

## Sorting 

We need to be able to sort the products based on the votes.

So we can do that using the sort method.

        const products = Seed.products.sort((a,b) => (
            b.votes - a.votes
        ));

## Building the handleProductUpVote Function

Lets start by creating the function that console.logs a text to the web browser console to test if it works.

    handleProductUpVote(productId){
        console.log(productId + ' was upvoted.');
    }

Now we will need to pass this function down the prop to each Product component. 

We can name the prop onVote to the child component in the parent component.

       <Product
          key={'product-' + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}

          /* Add the onVote here */
          onVote={this.handleProductUpVote}
        />

Now we access the function inside the Product by this.props.onVote.

So write the function inside Product that calls this new prop-function.

    /* Inside Product*/
    handleUpVote(){
        this.props.onVote(this.props.id);
    }

## Using onClick attribute

We can use the onClick function to handle mouse click events.

    <a onClick={this.handleUpVote}>
        <i className='large caret up icon' />
    </a>

So when the user clicks the up-vote icon, it will trigger the click event that does the function call.

Make sure to refer to this.props.

    /* Inside Product*/
    handleUpVote(){
        this.props.onVote(this.props.id);
    }

## Binding custom components methods

For JavaScript we need to bind methods to the component.

React binds the render() method to the class Component for us automatically.

But for custom components we will need to bind it manually.

We can do that this way for our custom function handleUpVote.

    /* This binds the handUpVote Method */
    constructor(props){
        super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
    }

Now if we click it should show up in the console.

## Adding State to the App


# Deployment

This Product's source code is hosted on a Github Account that is connected to a Heroku account where the branch is deployed.

Somethings to note about this type of deployment.

There were issues related to the package.json as well as how the source code was organized. No serious problem but to deploy the application will need to have the package.json in the root dir. Secondondly the project will need a src with a index.js.

Simply create a new react app with create-react-app and move the files inside the new app folder.

    npx create-react-app newapp

Test to see it works.

    cd newapp && npm start

We can test if this deploys correctly with a new heroku app

    heroku create <app-name> — b https://github.com/mars/create-react-app-buildpack.git

Make sure to have the buildpack.
    
    git push heroku master

Now the app should be deployed on Heroku.

Once the files are in place push to Github

    git add .

    git commit -m "message."

    git push -u origin master

This only works with the correct .git file.

This is an invisible file that can be seen from the cmd 

    ls -a 

After the push is completed just go to the heroku dashboard and deploy the app.

If there are build issues make sure there is the buildpack, check for the src dir and the index.js, and double check the package.json.

    {
    "name": "testreact",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^4.2.4",
        "@testing-library/react": "^9.5.0",
        "@testing-library/user-event": "^7.2.1",
        "react": "^16.13.1",
        "react-dom": "^16.13.1",
        "react-scripts": "3.4.1"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": "react-app"
    },
    "browserslist": {
        "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
        ],
        "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
        ]
    }
    }
