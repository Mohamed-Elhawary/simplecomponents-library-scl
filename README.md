# SimpleComponents Library [SCL]

![image](https://user-images.githubusercontent.com/69651552/100553133-ab92b800-3294-11eb-9071-0a712c9caeb0.png)

Simple open-source JS library that introduces simple most popular and most used components that are ready to use at the moment.

## Objective  

This library contains four commonly used components nowadays, each component has its own unique `class`, so you can use this class with any of your elements in your project to be able to call this component easily.

## Get Started 

* For production:-

    - Move the `bundler.js` file that exists inside the `assets` folder in the `dist` folder into your project environment as a `js` library file, then create a reference `src` script to this file in your code, to be able to read it, for example:-
     
    ```
    <script src="js/libraries/bundler.js"></script>
    ```

    - Now you are ready to use the library components, as I will show below. 

* For development:-

    > Note:- I have created a ready HTML demo file that contains examples of all the library components for those who want to develop the library with me and need all the components structure as HTML elements, so you can find this file inside the `dist` folder.

    - 1- Fork, clone or download this repository to your local machine.
    - 2- Be sure that you install the `Node.js` environment in your machine.
    - 3- Open your terminal and be sure that you are inside the correct destination of the library, while you must be in the same path of the `package.json` file.
    - 4- inside your terminal run these commands:-

        * install dependencies.
        ```
        npm install
        ```
        * start the server.
        ```
        npm run serve
        ```
    - 5- Once the server is running, visit (localhost:8080) in the browser to view the library and now you can treat with.
    - 6- After finishing the development phase, you can now move to the build step for production, as this step requires to run the command below to build, compress and bundle your code into the `bundler.js` file as it is the production file for the library. 

        * build your code.
        ```
        npm run build
        ```

## Library components

* Component#1: (Tooltip)

    - <code>Description</code>: This component is used to show a hidden message that will appear when hovering on a specific element.
    
    - <code>Usage</code>: Add a class named <code>tooltip-scomp</code> to the specific element you want to hover on it to show a hidden message, then add an attribute named <code>data-message</code> to this element, and the value of this attribute will be your hidden message.

    - <code>Example:</code>:  

      ```
      <p>Lorem dolor sit amet consectetur adipisicing elit. Voluptate sequi odit totam. Quod maiores saepe sequi. <span class="tooltip-scomp" data-message="I'm a tooltip!!">Illum aspernatur</span> aut voluptatum, sequi quibusdam laudantium? Laborum asperiores consequuntur eum corporis exercitationem debitis.</p>

      ```  
    - <code>Result:</code>:

     > Before hovering

    ![image](https://user-images.githubusercontent.com/69651552/100553494-d41bb180-3296-11eb-93cf-76814d4e55f9.png)

    > After hovering

    ![image](https://user-images.githubusercontent.com/69651552/100553512-f6adca80-3296-11eb-9316-5a1860a6af24.png)


* Component#2: (Dropdown)

    - <code>Description</code>: This component is used to render an accordion that has 2 behaviors: (expand) to show a content and (collapse) to hide the same content, by toggle clicking on this accordion.
    
    - <code>Usage</code>: Add a class named <code>dropdown-scomp</code> to the specific element you want to render it as accordion, then inside this element you will create (2) elements. First element has a class named <code>trigger</code> and this element contains the heading name of the accordion. Second element has a class named <code>content</code> and this element contains the content of your accordion that will be shown and hidden when expanding and collapsing.

    - <code>Example:</code>:  

      ```
      <div class="dropdown-scomp">
        <div class="trigger">Awesome T-shirt Designs</div>
        <div class="content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus, a natus totam sequi velit? Vel cupiditate hic incidunt quam laboriosam tenetur nam, voluptate, necessitatibus ex porro, soluta accusantium aspernatur.</p>
        </div>
      </div>
      <div class="dropdown-scomp">
        <div class="trigger">Cool Sticker Printing</div>
        <div class="content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus, a natus totam sequi velit? Vel cupiditate hic incidunt quam laboriosam tenetur nam, voluptate, necessitatibus ex porro, soluta accusantium aspernatur.</p>
        </div>
      </div>
        ```  
    - <code>Result:</code>:

     > Collapse

    ![image](https://user-images.githubusercontent.com/69651552/100553994-55287800-329a-11eb-9dac-ae8472272f24.png)

    > Expand

    ![image](https://user-images.githubusercontent.com/69651552/100554027-afc1d400-329a-11eb-86ac-f2ce815f5e07.png)


* Component#3: (Tabs)

    - <code>Description</code>: This component is used to render multi tabs buttons, every tab has its own hidden content that will be shown only if you clicked on its own tab.
    
    - <code>Usage</code>: Add a class named <code>tabs-scomp</code> to the container element that will contain the tabs buttons list and the content box for each tab, then inside the container element you will create (2) elements. First element is a <code>ul</code> element that will contain <code>li</code> elements which their <code>innerText</code> will be the name of every tab, and each <code>li</code> element should contain a class named <code>trigger</code> and an attribute named <code>data-target</code>, the value of this attribute will be the <code>ID</code> name of the content for each tab with a <code>#</code> sign before this <code>ID</code> name. Second element is the content boxes, every content box refers to its own tab by its <code>ID</code>, for example if a tab has a <code>data-target</code> attribute with a value <code>#about</code>, so its content box should contain <code>ID</code> named <code>about</code> without <code>#</code> sign here, then add a class named <code>content</code> to each content box, and inside the content box you will add your content text that you want to show.

    > Note: You may need to add a class named <code>active</code> to a default tab and to its content box also, so it will be the default tab that will display its content automatically by default in the initial state. 

    - <code>Example:</code>:  

      ```
      <div class="tabs-scomp">
        <ul>
          <li class="trigger active" data-target="#about">About</li>
          <li class="trigger" data-target="#delivery">Delivery info</li>
          <li class="trigger" data-target="#returns">Returns info</li>
        </ul>
        <div id="about" class="content active">
          <h3>about</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque, non blanditiis deleniti, ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.</p>
        </div>
        <div id="delivery" class="content">
          <h3>delivery</h3>
          <p>Non blanditiis deleniti, ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque.</p>
        </div>
        <div id="returns" class="content">
          <h3>returns</h3>
          <p>Adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque, non blanditiis deleniti, lorem ipsum dolor sit amet consectetur ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.</p>
        </div>
      </div>
      ```  
    - <code>Result:</code>:

     > About is the default active tab  

    ![image](https://user-images.githubusercontent.com/69651552/100554740-70e24d00-329f-11eb-855e-461c97af4b77.png)

    > When clecking on the delivery info tab

    ![image](https://user-images.githubusercontent.com/69651552/100554746-78a1f180-329f-11eb-827e-6c0e64f325cb.png)

    > When clecking on the  returns info tab

    ![image](https://user-images.githubusercontent.com/69651552/100554776-b0109e00-329f-11eb-873e-32103ab3896d.png)


* Component#4: (Snackbar)

    - <code>Description</code>: This component is used to render a snackbar box that contains a specific message, this snackbar box will be hidden until you click on a specific button, so the sncakbar box will popup from the top of the window as an alert message.
    
    - <code>Usage</code>: Create a <code>button</code> element and add a class named <code>snackbar-btn-scomp</code> to it, and an attribute named <code>data-message</code>, the value of this attribute will be your message that will be inside the snackbar box when it popups after you click the button.

    - <code>Example:</code>:  
      ```
      <button class="snackbar-btn-scomp" data-message="Simplecomponents!! Snakebar">click me</button>
      ```  
    - <code>Result:</code>:

     > Before clicking the button  

    ![image](https://user-images.githubusercontent.com/69651552/100555316-44303480-32a3-11eb-89f9-fcca57b2b83f.png)

    > After clicking the button  

    ![image](https://user-images.githubusercontent.com/69651552/100555340-6d50c500-32a3-11eb-9257-a81ca0b025c2.png)

## Versions

* [v1.0](https://github.com/Mohamed-Elhawary/simplecomponents-library-scl/tree/v1.0)

This is the starting vesion of the library, I will enhance it in the next versions by adding more components and some other features that absolutely will improve the performance.

## Languages

* CSS
* Vanilla JS 

## Dependencies 

* Babel
* CSS-Loader
* Style-Loader
* Webpack

## Enviroment  

* Node JS 

## Author

* [Mohamed Elhawary](https://www.linkedin.com/in/mohamed-elhawary14/) 

## Contact me through my social accounts

* Email: mohamed.k.elhawary@gmail.com
* [LinkedIn](https://www.linkedin.com/in/mohamed-elhawary14/)
* [Github](https://github.com/Mohamed-Elhawary)  
* [Behance](https://www.behance.net/mohamed-elhawary14)
* [Codepen](https://codepen.io/Mohamed-ElHawary) 

## License

Licensed under the [MIT License](LICENSE)
