#FROM python:3.11-bookworm
#ENV PYTHONUNBUFFERED=1

# install node/npm
#RUN \
#  echo "deb https://deb.nodesource.com/node_20.x bookworm main" > /etc/apt/sources.list.d/nodesource.list && \
#  wget -qO- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
#  apt-get update && \
#  apt-get install -yqq nodejs

# install gettext for translations
#RUN apt-get -yqq install gettext

# create code directory
#RUN mkdir /code
#WORKDIR /code

# install python requirements
#RUN pip install --upgrade pip

# copy just requirements and install before rest of code to avoid having to
# reinstall packages during build every time code changes
#COPY requirements.txt requirements.txt
#COPY dev-requirements.txt dev-requirements.txt
#COPY requirements requirements/
#RUN pip install -r dev-requirements.txt

# copy code files
#COPY . /code/


# Use an official Python runtime as a parent image
FROM python:latest

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /usr/src/app/backend

# copy code files
COPY . /usr/src/app/backend

# install python requirements
RUN pip install --upgrade pip

# Install dependencies
RUN pip install -r ./requirements.txt

# Bash file
COPY ./entrypoint.sh ./entrypoint.sh

RUN chmod +x ./entrypoint.sh

ENTRYPOINT [ "/usr/src/app/backend/entrypoint.sh" ]
