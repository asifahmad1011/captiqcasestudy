"""Marvel Setting."""
import os
import environ
from pathlib import Path
# Basic Settings
BASE_DIR = Path(__file__).resolve().parent.parent

ENV = environ.Env(
    DEBUG=(bool, False),
    ALLOWED_HOSTS=(list, []),
)
environ.Env.read_env('%s/.env' % str(BASE_DIR))


# adding allowed hosts to cors

CORS_ORIGIN_ALLOW_ALL = False
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:8000',
    'http://127.0.0.1:8000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1'
]

SECRET_KEY = ENV.str('SECRET_KEY')
DEBUG = ENV.bool('DEBUG')


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'marvel_characters',
)

MIDDLEWARE = (
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    "corsheaders.middleware.CorsMiddleware",
)

ROOT_URLCONF = 'marvel.urls'

TEMPLATES = (
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
)


WSGI_APPLICATION = 'marvel.wsgi.application'


# Database

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': str(BASE_DIR) + 'db.sqlite3',
    }
}


# Password validation

AUTH_PASSWORD_VALIDATORS = (
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
)


# Internationalization

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)

STATIC_URL = '/static/'

# Add these new lines
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'build', 'static'),
)

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

# Default primary key field type

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
# Marvel Setting
PRIVATE_KEY = ENV.str('PRIVATE_KEY', default='')
PUBLIC_KEY = ENV.str('PUBLIC_KEY', default='')