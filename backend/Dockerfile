# Use an official Python runtime as a parent image
#FROM python:3.12.2

# Set environment variables
#ENV PYTHONDONTWRITEBYTECODE 1
#ENV PYTHONUNBUFFERED 1

# Set the working directory
#WORKDIR /usr/src/app

# install python requirements
#RUN pip install --upgrade pip

# Install dependencies
#COPY ./requirements.txt /usr/src/app/requirements.txt
#RUN pip install -r requirements.txt

# Bash file
#COPY ./entrypoint.sh /usr/src/app/entrypoint.sh

# copy code files
#COPY . /usr/src/app/

#ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]

### FOR LATER
# Use an official Python runtime as a parent image
FROM python:latest

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /usr/src/app/backend

# install python requirements
RUN pip install --upgrade pip

# Install dependencies
COPY ./requirements.txt /usr/src/app/backend/requirements.txt
RUN pip install -r requirements.txt

# Bash file
COPY ./entrypoint.sh /usr/src/app/backend/entrypoint.sh

# copy code files
COPY . /usr/src/app/backend/

#ENTRYPOINT [ "/usr/src/app/backend/entrypoint.sh" ]
