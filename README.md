[![frontend CI/CD](https://github.com/Rokiis1/sortable-table/actions/workflows/fronted.yml/badge.svg)](https://github.com/Rokiis1/sortable-table/actions/workflows/fronted.yml)
![AWS](https://codebuild.eu-west-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiYnVadGw0Q1ovN2ZmeWlVMXgyLzNqL3ZZSGhmNzZUZDVtNzUzMVU4WGVnZlBwMVpqTFFPTGFheEx1M3plaUdBbXVQVGxUT3lWQnNTRGE5NTJMNTJvTVdrPSIsIml2UGFyYW1ldGVyU3BlYyI6IndidUtmNGdFemNRTytzTVEiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=main)

# Table of contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [Development and Testing](#development-and-testing)
- [Run Locally](#run-locally)
- [Demo](#demo)

# Overview

This application is built using React, Typescript, axios, and css. The app is designed to retrieve and display data from the [API endpoint](https://jsonplaceholder.typicode.com/users).

# Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

# Deployment

The application has been deployed to AWS using Elastic Beanstalk, CodeBuild, Elastic Container Registry, and CodePipeline. This setup allows for an automated, scalable, and secure deployment process.

# Development and Testing

The development process for this application makes use of Github Actions to automate continuous integration and continuous delivery. The actions run linting using eslint and build the Docker container for the application.

# Run Locally

Clone the project

```bash
  git clone git@github.com:Rokiis1/sortable-table.git
```
Install pnpm

```bash
  npm install -g pnpm
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  npm run dev
```

# Demo

[Host Link on AWS](http://table-env.eba-qgraqbgq.eu-west-2.elasticbeanstalk.com/)
