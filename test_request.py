import requests

url = 'http://127.0.0.1:5000/predict'
data = {'features': [[0.72,0.87,5,223,5,0]]}

feature_names = [
    'Satisfaction',  
    'Evaluation',  
    'ProjectCount',
    'TotalMonthlyHours', 
    'YearsAtCompany',  
    'WorkAccident'   
]

# Your data
data = {'features': [[0.72, 0.87, 5, 223, 5, 0]]}


features = data['features'][0] 

for name, value in zip(feature_names, features):
    print(f"{name}: {value}")


response = requests.post(url, json=data)

print(response.json())