## Software Development Portfolio

My name is Ryan Hopkins and I have a Bachelor's of Science from Southern New Hampshire University. Below is a showcase of my capstone work as well as some narratives to offer insight into my thought process on how I solve problems.

## Professional Self-Assessment

During my journey at Southern New Hampshire University, I have seen myself grow as a software developer and a human being. Looking back, it is hard to believe that I have learned so much in just a few years, with much more learning to go as I venture into an industry that is forever changing. I found my strengths, weaknesses, interests and motivation that will allow me to be the best software developer I can be in a career as a software developer. I hope you enjoy this professional reflection into my time at SNHU and the start of a career as a software developer.

Entering SNHU, I had some experience with Java through self-taught methods, but once I started my first programming course, I quickly realized how little I really knew. I was excited to learn though! Once I finished the first couple programming classes, I started to gain confidence in my ability to write code, each time thinking I was ready to enter the workforce. However, a new course came up that changed my opinion, almost every term, that made me doubt my previous assessment. Throughout this time, I learned to work on a code base with a team, communicate project changes to key stakeholders, the importance of security in my code, the use of databases, how to incorporate structures and algorithms to speed up and enhance software applications.

Learning to collaborate on the same project helped me realize how developers work together. Branching from a central repository and dealing with merge conflicts helped me understand the difficulties of pushing changes to production. Integration testing is a key factor in a smooth transition from one version to another. The concept of test (or behavior) driven development is a difficult thing to master but writing tests before code allows for the code to mirror the behavior desired in the software, instead of writing tests that confirm the behavior of your code. Understanding how all of this can change the scope, cost and time needed for a project is key in communicating it to project stakeholders. My time at SNHU has allowed me to confidently understand the timeline of a project and communicate it directly to those stakeholders, even if the news is advising them of delays by delivering the information with confidence. Many of my final presentations were simulated to be at a stakeholder level environment with emphasis on the idea that as a developer, these meetings and presentations will come up and the best way to go about delivering the information professionally.

In the world we live in today, security needs to be the first thought that goes through every software developer’s mind. Unfortunately, the more one learns about security in development, the deeper the rabbit hole goes. Taking preventive measures when writing software is the best way to avoid hackers getting into your application and stealing information that is sensitive. Testing edge cases, parsing input variables, keeping up to date with design flaws in the language that your application is using, restricting access to production environments, layering the application with credential checks and safely securing secrets are a few ways to proactively secure an application as a software developer. At SNHU, I learned to test edge cases as much as possible, but also understanding that 100% code coverage is difficult to do, so identifying the most vulnerable places in the application and focusing tests on those areas keeps the budget and time constraints in check while securing the software.

Data structures and algorithms allow for efficiency that cannot be done without them. In my data structures and algorithms class, emphasis on speeding up an application was given. I started off creating brute force sorting algorithms to see the inefficiency in them. Then using the same functioning application but using hash maps and binary search trees instead. The key takeaway from this class was the ability to understand Big O notion, how each data structure and algorithm worked, how to choose which one is best for your application or problem at hand, and how to implement the design into an existing application. 

Using a database to enhance a software engineering project was well emphasized at SNHU. Learning how to create a RESTful API through MongoDB and Springboot was one of the most satisfying final projects in the program. Creating a functioning API that can create, update, read and delete objects in a database allowed me to learn and understand how to interface with databases. Looking back and being able to easily translate, rewrite or enhance projects that I once struggled with is a great feeling and showcase of how far this program has taken my skills as a software developer.

## Artifact Introduction

My portfolio showcases my skills as an entry level software developer in many ways. To start, I converted a project from Java to C# which shows my ability to pick up a new language and be comfortable working with something I am unfamiliar with. My first assignment in my current role as a software developer requires me to pick up and learn python. Since doing this project, I have complete confidence in my ability to learn and thrive with python as well.

The remainder of my portfolio is a multi-part project that showcases integration, work in an environment I do not prefer and working with something I enjoy quite a bit. To begin the project, I wanted to challenge myself and create something that I know I do not like doing, which is front-end work. I created a React web application that pulls from a JSON file, parses it and caches it locally, then outputs visual charts to represent the data. The next step was to create a backend to do the heavy lifting instead. I created a RESTful API with Springboot that pulls the JSON data from a MongoDB collection and filters the data into usable endpoints. Finally, to wrap things up, I created hooks in the React framework to use the APIs instead of the local file. 

## Code Review

<iframe width="640" height="360" src="https://www.youtube.com/embed/hYG94ve7WrY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


During the course, we were asked to perform an in-depth code review on a previous project selected for enhancement. For this code review, I looked at my final project for IT-145: Foundations in Application Development. 

## Software Design and Engineering Enhancement

This artifact is an authentication program where the user is required to submit their username and password to get their role in the system. The program uses an MD5 hash to encrypt the password and compares the input to known credentials in the system. If the user succeeds, they will see the role assigned to their credentials. If the user fails, they have three attempts to succeed before the system shuts down for security.

I believe this program is justified in the inclusion of my ePortfolio content as it showcases my C# abilities. The changes made to this program were in the logic of the code. I simplified many methods and loops, deleting things that were not necessary. The original program included a set of nested while loops, which are not needed for the program to work as requested in the original rubric from IT-145. I found a C# library to import the logic of MD5 hashing, which simplified that part also. I’m not sure if it would be beneficial to show both programs to display the improvements in logic or if keeping only the best project on display would be better.

The main course objective in this milestone was to rewrite the final project of IT-145, which was completed. As stated above, this is more streamlined than the original, so enhancements were made to the logic of the program as well. I do not know enough of C# to have enhanced this into a C# WPF project with a functional GUI, however I may try it in the future on my own. 

During my C# course, I only worked with single file projects, so my first obstacle was figuring out how to create a file structure that could handle text file resources and the file path to get them seen by my code. Next, I needed to learn more about classes and OOP syntax in C# to be able to create a separation of functions. Once I solved those two issues, I needed to find an MD5 hash function, since it was given to us in IT-145 and I have not worked with cryptography yet. After solving these issues, the rest of the program came together quite nicely and quickly. It was eye opening to see the level of skill I have now within the general logic of programming and how to piece functions together versus when I wrote this program over two years ago.

## Algorithms and Data Structures Enhancement

This assignment was designed to enhance my front-end skills. This is part of a project at work in training to teach us to fully implement a front and back end to a RESTful API. During its creation, I started to wonder how I would fit the requirements of algorithms and/or data structures into it because this was handled on the backend with the database. However, I was able to implement a caching data structure to store the data on the front-end, at least temporarily until the larger project comes together at the end. 

Earlier in the week when I say HTML and CSS in the lineup for learning material, I rolled my eyes then as we started, I quickly realized I had forgotten most of my design skills due to the lack of interest in them. In the current trending industry, full stack is the demand though. Including a front-end may not showcase my design skills but it does show that I can implement it, I just ask that someone comes to me with the idea instead of asking me to do my own design! 

The review_store file is a caching function that allows the JSON file to be read into storage locally and drawn into getter functions for graphs and tables. This improves a front-end program if the data is small enough to not slow down the website. It does delay the website a bit due to the parsing that is happening before it is allowed to load, but it showcases the ability to rely completely on a front-end, if necessary.

React was a completely new learning experience to me this week. Before that, I had a two-day crash course on JavaScript, so most of the week was frustrating, just learning the syntax of a new language. This is the first time I’ve learned I have interest in front-end. Working with a framework is much more desirable as someone that prefers the frameworks of back-end development. Someone told me in an interview (for my current position) to push yourself to learn something you hate because you’ll be more well-rounded and desirable as a developer. I took this advice to heart and worked hard this week learning React, even if it was just the surface of React’s capabilities. I can’t wait to learn more about it now. 

## Database Enhancement

For the database enhancement, I created a back-end RESTful API that connected to a MongoDB database. This is a new project and was created for the purpose of this course. Once paired with the front-end project from the previous week, this project will be a full stack application that leverages microservices and a division of responsibility, allowing each to be reused individually if necessary, down the road.

This project deserves to be in my ePortfolio because it is my main focus as a developer at Liberty Mutual and showcases the skills appropriately. We are pushing to microservices, so all new developers are being brought in to pull apart legacy systems, make them serverless and separated in small webservices. Once the project is complete, the benefit of showcasing a full stack project with different software groups will show an ability to hook one type of project with another (in this case, React.js with Java working together).

I believe the course objectives for this project were met, as it meets the planned development from week one. If I had additional time to work on the project, I would add more HTTP responses for the front-end to consume and create more graphs for analytics.

This was similar to the project from CS-340 and since it is a focus point at work, it came fairly easily to me. I am very comfortable with Spring and Maven, using it several times. One struggle was getting the year out of the UNIX time stamp, but it was more of a difficulty in MongoDB aggregation. Once I solved that problem, writing it with the MongoDB template was not too bad. The more I work with MongoDB, the more I love it and hope to never see SQL again. If only that was possible!

## Connecting The Pieces

Outside of the assignments for CS-499, I created a stretch goal of connecting my React front-end to the Java/Spring backend. To do this, I repurposed the reviews_store and created a parser. Once I had that completed, I also added an API file to keep things neat and organized. After completing the utilities that needed to be written, I refactored the code within each page to use the API instead of the local JSON file. No work was needed on the backend to complete this implementation. The implementation is available, however the application itself does not run as is because the two sides need to run on the same port locally or be hosted. I did not have time within the constraints of this course to learn about creating a build pipeline and hosting a database, while keeping the credentials a secret. However, if this is done, the code will function as a working application as designed.

This is being included in my portfolio because it shows my ability to connect two unrelated code bases together as one. I could have created the API in node.js and made the project much simpler but I wanted to showcase a more challenging opportunity. The process of creating an API hook was not easy, since so much code needed to be refactored to get it working properly. I am glad I pushed myself to complete the hook in enhancement though, because I am excited to see what this skill can do for me in my future.


You can use the [editor on GitHub](https://github.com/ryanhopkinscapstone/capstone/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/ryanhopkinscapstone/capstone/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
