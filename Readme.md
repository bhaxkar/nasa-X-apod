# nasa-X-apod 🚀

nasa-X-apod is a simple web application that displays the Astronomy Picture of the Day (APOD) provided by NASA. The application fetches the latest APOD and presents it along with its description.

## Features

- Retrieves the latest Astronomy Picture of the Day from NASA's APOD API.
- Displays the image along with its title and description.
- Includes the application share functionality implemented using the Web Share API.
- Incorporate a contact page for support or inquiries, implemented using SMTP.js.

## Technical Description

1. **DOM Manipulation and Event Handling**:
    - Utilized JavaScript to dynamically manipulate the Document Object Model (DOM) for creating, updating, and deleting HTML elements.
    - Implemented event listeners to handle user interactions such as clicks, form submissions, and other events to provide a responsive user experience.

2. **API Fetching**:
    - Integrated with external APIs to fetch data asynchronously using the Fetch API.
    - Handled API responses and errors gracefully to ensure smooth data retrieval and user feedback.
3. **Web Share API Implementation**:
    - Integrated the Web Share API to enable users to share the application content directly from the web.

4. **Contact Form Implementation**:
    - Developed a contact form using HTML and JavaScript.
    - Integrated SMTP.js to send form data via email.
    - Implemented form validation to ensure that users provide necessary information before submission.
    - Provided user feedback on successful or failed form submissions.

## Installation ⚙️

1. Clone the repository:
    ```bash
    git clone https://github.com/bhaxkar/nasa-X-apod.git
    ```
2. Navigate to the project directory:
    ```bash
    cd nasa-X-apod
    ```
3. Configure the API
- Obtain your NASA APOD API key from [NASA API](https://api.nasa.gov/).
- Create a `config.js` file in the root directory and add your API key:
    ```javascript
    const config = {
        API_KEY: 'your_api_key_here'
    };
    ```
## Contributing 🚀

Contributions are welcome ⭐️!  
Please fork the repository and create a pull request with your changes.

## Contact ✉️

Bhaskar Jha (👾 [@bhaxkar](mailto:bhaskarjha.info@gmail.com)  )



