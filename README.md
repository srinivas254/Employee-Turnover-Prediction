# Employee Turnover Prediction

This project aims to predict employee turnover using a historical HR dataset. By analyzing various employee attributes, we build a machine learning model to help organizations understand the likelihood of employees leaving.

## Table of Contents

- [Introduction](#introduction)
- [Dataset](#dataset)
- [Data Preprocessing](#data-preprocessing)
- [Model Training](#model-training)
- [API Development](#api-development)
- [Frontend Development](#frontend-development)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Employee turnover can be costly for organizations. By predicting which employees are likely to leave, HR departments can implement strategies to improve retention. This project utilizes a dataset containing various employee attributes to build a predictive model using machine learning techniques.

## Dataset

The dataset used in this project includes the following features:

- **Employee ID**
- **Age**
- **Gender**
- **Departments**
- **Promotion in the last 5 years**
- **Left (Boolean)**
- **Salary**
- **Work accident (Boolean)**
- **Time spent at the company**
- **Average monthly hours**
- **Number of projects worked on**
- **Last evaluation**
- **Satisfaction level**

## Data Preprocessing

1. **Data Cleaning**: Handled missing values and outliers.
2. **Feature Encoding**: Converted categorical features into numerical values.
3. **Normalization**: Scaled numerical features for better model performance.

## Model Training

We experimented with multiple models, including logistic regression, decision trees, and support vector machines. Ultimately, the **Gradient Boosting Classifier** was chosen for its high accuracy and performance. The model was trained and tested using the historical HR dataset.

### Saving the Model

The trained model was serialized using `joblib` for later use in the API.

## API Development

We developed a RESTful API using **Flask** to interact with our model. The API supports:

- **GET Method**: Provides access to a web interface for predicting employee turnover.
- **POST Method**: Accepts employee data as input and returns a turnover prediction.

## Frontend Development

The web interface is built using **HTML**, **CSS**, and **JavaScript**. It is responsive and user-friendly, allowing users to easily input employee data and view predictions.

### Features of the Frontend

- Responsive design for various devices
- Intuitive form for entering employee data
- Display of prediction results

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/employee-turnover-prediction.git
   ```
2. Navigate to the project directory:
   ```bash
   cd employee-turnover-prediction
   ```
3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```bash
   python app.py
   ```
5. Access the web interface at `http://127.0.0.1:5000`.
6.  Access the get method at `http://127.0.0.1:5000/`
    and Access the post method at `http://127.0.0.1:5000/predict`

## Technologies Used

- Python
- Flask
- Scikit-learn
- Joblib
- HTML/CSS/JavaScript
  

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to explore the code, test the API, and use the predictions to enhance employee retention strategies in your organization!

