from flask import Flask, request, jsonify
from flask import render_template
from flask_cors import CORS
import joblib
import numpy as np
import warnings

app = Flask(__name__)
CORS(app)

model = joblib.load('model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        features = data.get('features')

        if not features or not isinstance(features, list):
            return jsonify({'error': 'Features must be a list of values'}), 400

        input_data = np.array(features).reshape(1, -1)

        with warnings.catch_warnings():
            warnings.simplefilter("ignore", category=UserWarning)
            prediction = model.predict(input_data)

        return jsonify({'prediction': prediction.tolist()})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
