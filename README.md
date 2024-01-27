## Homework 1 OOP Coding

## Author: Zhi Ling

## Term: Spring 2024

## Description: This is a homework assignment 1 of CS5010. The assignment creates 3 classes, which are Interaction, DalleInteraction, and PromtsManager, to manage interactions by displaying, recording, and deleting the interaction of user prompt and repsonse.

### Project Setup

1.  Install [node.js](https://nodejs.org/en)
2.  Create a directory and use terminal:
    
    ```plaintext
    npm install --save-dev eslint prettier eslint-config-prettier
    ```
    
3.  In the same directory add **prompt-sync**:
    
    ```plaintext
    npm install --save prompt-sync
    ```
    
4.  **Download** project into the same directory and **replace all duplicates**

### Implementation

Run the project by

```plaintext
node main.js
```

The terminal will display 5 options to receive users' choice

```plaintext
1. Show all interactions.
2. Add example interactions.
3. Add an interaction.
4. Delete an interaction.
0. Quit.
```

**Mode 1** will show all recorded interactions.

**Mode 2** will add 2 test interactions:

1.  Prompt: This is a prompt test 1
    
    Response: This is a response test 1
    
2.  Prompt: This is a prompt test 2
    
    Image: [https://upload.wikimedia.org/wikipedia/commons/6/6f/Northeastern_seal.svg](https://upload.wikimedia.org/wikipedia/commons/6/6f/Northeastern_seal.svg)
    
    Response: This is a response test 2
    

(You can change any test content you want in main.js constant variable declerations.)

**Mode 3** will make user replacing the response of the interactions they want (new feature). It will firstly display all interactions with index, and then ask the user to enter a number to replace the response with following prompt:

```plaintext
Enter an index to replace response:
Give me a new response:
```

**Mode 4** will firstly display all interactions with index, and then ask the user to enter a number to delete the interaction they want.

**Mode 0** will quit the program.
