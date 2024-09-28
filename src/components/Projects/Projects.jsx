import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.jsx";
import blogApp from "../../Assets/Projects/blogApp.png"
import toDo from "../../Assets/Projects/toDo.png"
import weatherApp from "../../Assets/Projects/weatherApp.png"
import bmiCalc from "../../Assets/Projects/bmiCalc.png"
import alarmApp from "../../Assets/Projects/alarmApp.png"
import memoryCardGame from "../../Assets/Projects/memoryCardGame.png"
import guessNumber from "../../Assets/Projects/guessNumber.png"
import microsoftClone from "../../Assets/Projects/microsoftClone.png"
import foodOrder from "../../Assets/Projects/foodOrder.png"
import adminDashboard from "../../Assets/Projects/adminDashboard.png"
import mernTodo from "../../Assets/Projects/mernTodo.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adminDashboard}
              isBlog={false}
              title="Admin Dashboard"
              description="I developed an admin dashboard for an e-commerce website using React.js and TypeScript. The dashboard provides features like product management, order tracking, user management, and analytics, enabling administrators to efficiently manage and oversee the platform’s operations. The use of TypeScript ensures type safety and scalability, while React.js delivers a dynamic and responsive user interface."
              ghLink="https://github.com/Kuldeep-Rathod/Admin-Dashboard.git"
              demoLink="https://admin-dashboard-wheat-nu.vercel.app/admin/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mernTodo}
              isBlog={false}
              title="MERN ToDo App"
              description="I developed an authenticated To-Do application using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to securely register, log in, and manage their tasks. With real-time updates and intuitive UI, it offers features like task creation, updation, deletion, and categorization, ensuring seamless task management with persistent user sessions."
              ghLink="https://github.com/Kuldeep-Rathod/BackendAPI"
              demoLink="https://frontend-todo-hazel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogApp}
              isBlog={false}
              title="Blog App"
              description="This full-stack application utilizes React.js for the frontend, Node.js for the backend, and MySQL for the database. It offers comprehensive CRUD functionality for managing blog posts, including features for user authentication. Posts are organized into categories to enhance usability and content management, ensuring a streamlined experience for both users and administrators."
              ghLink="https://github.com/Kuldeep-Rathod/Blog-App"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDo}
              isBlog={false}
              title="To Do List"
              description="The To-Do List application is a web-based tool developed using JavaScript, HTML, and CSS. It enables users to add, edit, delete, and complete tasks, with tasks categorized into pending and completed sections for better organization. The application also saves data to local storage, ensuring that tasks persist even after the browser is closed."
              ghLink="https://github.com/Kuldeep-Rathod/Frontend-Mini-Projects/tree/master/toDoList"
              demoLink="https://kuldeep-rathod.github.io/Frontend-Mini-Projects/toDoList/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              description="The Weather App is a web-based application developed using JavaScript, HTML, and CSS. It fetches real-time weather data from an online API, providing users with up-to-date weather information. Users can search for weather conditions in different locations, The application showcases the use of APIs for data retrieval and dynamic content updating."
              ghLink="https://github.com/Kuldeep-Rathod/Frontend-Mini-Projects/tree/master/WeatherApp"
              demoLink="https://kuldeep-rathod.github.io/Frontend-Mini-Projects/WeatherApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memoryCardGame}
              isBlog={false}
              title="Memory Card Game"
              description="The Memory Card Game is an engaging web-based game developed using JavaScript, HTML, and CSS. It challenges players to test their memory by flipping over cards to find and match pairs. The game includes features such as dynamic card shuffling, smooth transitions, and responsive design to ensure an enjoyable experience across different devices. The user interface is designed for simplicity and accessibility, with animations and visual feedback enhancing gameplay."
              ghLink="https://github.com/Kuldeep-Rathod/Javascript-Games/tree/master/MemoryCardGame"
              demoLink="https://kuldeep-rathod.github.io/Javascript-Games/MemoryCardGame/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodOrder}
              isBlog={false}
              title="Food Order Website"
              description="The Food Order Website is a sleek and modern web application designed with Tailwind CSS. This site allows users to browse through a menu of food items, customize their orders, and place them online. The design features a clean and responsive layout, showcasing intuitive navigation, attractive food item cards, and a user-friendly checkout process. Tailwind CSS is utilized to create a visually appealing interface with efficient and consistent styling across all components."
              ghLink="https://github.com/Kuldeep-Rathod/Food-Order-Website"
              demoLink="https://kuldeep-rathod.github.io/Food-Order-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alarmApp}
              isBlog={false}
              title="Alarm App"
              description="The Alarm App is a web-based application developed with JavaScript, HTML, and CSS. It enables users to set and manage alarms with ease. The app features a straightforward interface for creating and customizing alarms, allowing users to set times and manage multiple alarms. It demonstrates effective use of JavaScript for handling time-based functions and provides a clean, user-friendly design."
              ghLink="https://github.com/Kuldeep-Rathod/Frontend-Mini-Projects/tree/master/AlarmApp"
              demoLink="https://kuldeep-rathod.github.io/Frontend-Mini-Projects/AlarmApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microsoftClone}
              isBlog={false}
              title="Microsoft Clone"
              description="The Microsoft Clone website is a web application designed to replicate the look and feel of Microsoft's official site, utilizing Tailwind CSS for styling. This project features a modern, responsive layout with a clean and intuitive design, reflecting Microsoft’s branding and user experience. It includes key components such as a navigation bar, product sections, and a footer, all styled with Tailwind's utility-first CSS framework."
              ghLink="https://github.com/Kuldeep-Rathod/Microsoft_Clone"
              demoLink="https://kuldeep-rathod.github.io/Microsoft_Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guessNumber}
              isBlog={false}
              title="Guess The Number"
              description="The Guess the Number game is a web-based application built with JavaScript, HTML, and CSS. In this game, players attempt to guess a randomly generated number within a specified range. The app provides feedback on each guess, informing players whether their guess is too high, too low, or correct. Features include an easy-to-use interface, dynamic input validation, and a simple scoring system."
              ghLink="https://github.com/Kuldeep-Rathod/Javascript-Games/tree/master/GuessTheNumber"
              demoLink="https://kuldeep-rathod.github.io/Javascript-Games/GuessTheNumber/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
