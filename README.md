# Application Documentation

## Application Description:

The application is a simple React-based user interface designed to validate input strings against specific criteria. Users can input a string into a provided text field, and the application will dynamically validate the string based on a combination of requirements including length, character variety, and the absence of whitespace. The validation results are displayed immediately, offering a responsive experience for the user.

## Regex Implementation Description:

The core of the validation mechanism is a complex regular expression, which is designed to ensure the input string meets multiple criteria simultaneously. Specifically, this regular expression checks that the string contains at least one uppercase letter, one lowercase letter, one digit, and one special character from a predefined list, while ensuring there are no whitespace characters present. Moreover, the string length is dynamically validated to ensure it does not exceed a specified maximum length. Using positive lookaheads, the regular expression can efficiently check for the presence of each criterion without consuming any characters, enabling it to validate the entire string in one operation.

## How to Run the Developed Application Locally:

1. Prerequisite: Ensure you have Node.js and npm installed on your machine. If not, download and install them from Node.js official website.
2. Navigate to the root directory of the application using your terminal or command prompt.
3. Run npm install to install all the necessary dependencies.
4. After the installation is complete, run npm start. This will start the development server and the application should automatically open in your default browser. If it doesn't, you can manually navigate to http://localhost:3000/ in your browser to access the application.

## How to Run the Test Function Locally:

1. Navigate to the root directory of the application using your terminal or command prompt.
2. Open the file containing the testRegex function.
3. At the bottom of this file, invoke the testRegex function with your desired maximum length. For example: testRegex(20);.
