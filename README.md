# CAPTIQ Coding Challenge

Front-end and Back-end application to use Marvel api and display data on front-end.

## Back-end Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install the application.

## Clone git repo
Please use following command to clone the project.

```bash
mkdir captiqchallenge
cd captiqchallenge
git clone "https://github.com/asifahmad1011/captiqcasestudy.git"
```
Create new file with same name as (.env) and copy the content from .env_default into .env file.

### Create virtual environment using following command
```bash
python -m venv captiq_challenge
```
 Activate virtual environment using following command
```bash
captiq_challenge\Scripts\activate
```
Install libraries for back-end using following command
```bash
pip install -r requirements.txt
```

## Usage
### Back-end

Build files are also added to the backend as static files. The application can be run by only running back-end.

Navigate to captiqcasestudy folder and run following command

```terminal
python manage.py runserver
```
Open [http://localhost:8000/api/v1/characters-data](http://localhost:8000/api/v1/characters-data) to view API response in the browser.
Open [http://localhost:8000/api/v1/home](http://localhost:8000/api/v1/home) to view the frontend in the browser.

### Front-end Installation.

Navigate to frontend folder and run run following command to install required packages.

```terminal
yarn install
```

After the installation of all packages, run front-end application by using following command.

```terminal
yarn start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.