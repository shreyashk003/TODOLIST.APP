# TODO List App

A simple and functional Todo List application built using **React**. This app allows users to add, prioritize, complete, and delete tasks, with added features for task filtering and smooth UI interactions.

## Features

- **Add Tasks**: Users can add tasks to the list by typing them into the input field and clicking "Add".
- **Task Completion**: Users can click on a task to mark it as complete. Completed tasks are displayed with a strikethrough for easy identification.
- **Task Prioritization**: Each task can have a priority level (Low, Medium, or High) that users can select from a dropdown.
- **Delete Tasks**: Users can delete tasks by clicking the trash icon next to the task.
- **Task Filtering**: Users can filter tasks based on their status (All, Completed, or Incomplete).
- **Responsive Design**: The app is designed to be responsive and works on different screen sizes.

## Tech Stack

- **React**: Frontend framework for building the app.
- **CSS**: Custom styling to make the app visually appealing.
- **Bootstrap Icons**: Used for the trash icon to delete tasks.

## Installation

To run the Todo List App on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-list-app.gi
Navigate to the project directory:

bash
Copy code
cd todo-list-app
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and go to http://localhost:3000 to view the app.

Usage
Add a Task: Type in the input field and click the Add button to add a new task.
Mark as Complete: Click on the task text to toggle between completed and incomplete states.
Set Priority: Use the dropdown next to each task to set its priority (Low, Medium, High).
Delete a Task: Click the Delete button (trash icon) to remove a task.
Filter Tasks: Use the filter buttons (All, Completed, Incomplete) to filter tasks based on their status.

App Component Structure
ListApp.js
This is the core component of the app that includes the following features:

useState to manage the state of tasks.
useRef to reference the input fields.
Functions for adding, deleting, filtering, and completing tasks.
A responsive user interface with task priority and filtering options.
Key Functions:
addTodo(): Adds a new task to the list.
toggleComplete(): Toggles the completion status of a task.
setPriority(): Allows users to set task priority.
handleDelete(): Deletes a task from the list.
getFilteredTodos(): Filters the task list based on their status (All, Completed, Incomplete).
Contributing
If you'd like to contribute:

Fork the repo
Create a new branch (git checkout -b feature/your-feature-name)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/your-feature-name)
Open a Pull Request
